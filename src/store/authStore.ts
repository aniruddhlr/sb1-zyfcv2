import { create } from 'zustand';
import { auth, db } from '../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface UserData {
  uid: string;
  email: string;
  userType: 'influencer' | 'brand';
  displayName?: string;
  profileCompleted: boolean;
}

interface AuthState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string, userType: 'influencer' | 'brand') => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,

  signUp: async (email: string, password: string, userType: 'influencer' | 'brand') => {
    try {
      set({ loading: true, error: null });
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        userType,
        profileCompleted: false,
        createdAt: new Date().toISOString()
      });

      set({
        user: {
          uid: user.uid,
          email: user.email!,
          userType,
          profileCompleted: false
        },
        loading: false
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data() as UserData;

      set({ user: userData, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  signOut: async () => {
    try {
      await firebaseSignOut(auth);
      set({ user: null });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  clearError: () => set({ error: null })
}));

// Set up auth state listener
onAuthStateChanged(auth, async (user: User | null) => {
  if (user) {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data() as UserData;
    useAuthStore.setState({ user: userData, loading: false });
  } else {
    useAuthStore.setState({ user: null, loading: false });
  }
});