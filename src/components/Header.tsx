import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, User, Shield } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  onLogout: () => void;
}

export default function Header({ isAdmin, onLogout }: HeaderProps) {
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Car className="h-8 w-8 text-blue-700 group-hover:text-blue-800 transition-colors" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              JDM Showroom
            </span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Gallery
            </Link>

            {isAdmin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                    location.pathname === '/admin/dashboard'
                      ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                  location.pathname === '/admin/login'
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                <User className="h-4 w-4" />
                <span>Admin Login</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}