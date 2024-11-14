import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'influencer' | 'brand'>('influencer');
  const { signUp, error, clearError } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    await signUp(email, password, userType);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-4 mb-4">
        <button
          type="button"
          onClick={() => setUserType('influencer')}
          className={`flex-1 py-3 px-4 rounded-lg border ${
            userType === 'influencer'
              ? 'border-purple-600 bg-purple-50 text-purple-700'
              : 'border-gray-300 text-gray-700'
          }`}
        >
          I'm an Influencer
        </button>
        <button
          type="button"
          onClick={() => setUserType('brand')}
          className={`flex-1 py-3 px-4 rounded-lg border ${
            userType === 'brand'
              ? 'border-purple-600 bg-purple-50 text-purple-700'
              : 'border-gray-300 text-gray-700'
          }`}
        >
          I'm a Brand
        </button>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-600 focus:outline-none focus:ring-purple-600"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-600 focus:outline-none focus:ring-purple-600"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Create Account
      </button>
    </form>
  );
}