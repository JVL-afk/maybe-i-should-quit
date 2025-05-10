"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    if (!name || !email || !password) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(data.message || 'Signup successful! Redirecting to login...');
        // Redirect to login page with a success message, or directly to dashboard if flow changes
        router.push(`/login?message=${encodeURIComponent(data.message || 'Signup successful! Please login.')}`);
      } else {
        setError(data.message || 'An error occurred during signup.');
      }
    } catch (err) {
      console.error('Signup fetch error:', err);
      setError('Failed to connect to the server. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-orange-600 p-4">
      <div className="max-w-md w-full bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Create your AFFILIFY Account</h2>
          <p className="mt-2 text-sm text-gray-400">
            And start building powerful affiliate websites.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-400 text-center">{error}</p>}
          {successMessage && <p className="text-sm text-green-400 text-center">{successMessage}</p>}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500 disabled:opacity-50"
            >
              {isLoading ? 'Creating Account...' : 'Sign up'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <Link href="/login" className="font-medium text-orange-400 hover:text-orange-300">
            Already have an account? Sign in
          </Link>
        </div>
         <div className="text-sm text-center mt-4">
          <Link href="/" className="font-medium text-gray-400 hover:text-gray-300">
            &larr; Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

