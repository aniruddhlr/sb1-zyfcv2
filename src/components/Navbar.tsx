import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, signOut } = useAuthStore();

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  CreatorMatch
                </span>
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link to="/creators" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Find Creators
              </Link>
              <Link to="/campaigns" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Campaigns
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {user.userType === 'influencer' ? 'Creator' : 'Brand'}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={() => signOut()}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </button>
              )}
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/creators"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Find Creators
              </Link>
              <Link
                to="/campaigns"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Campaigns
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Pricing
              </Link>
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="px-3 py-2">
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}