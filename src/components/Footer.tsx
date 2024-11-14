import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">CreatorMatch</span>
            <p className="mt-2 text-gray-400 text-sm">
              Connecting brands with influential creators for impactful collaborations.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/creators" className="text-gray-400 hover:text-white text-sm">
                  Find Creators
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-400 hover:text-white text-sm">
                  Browse Campaigns
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} CreatorMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}