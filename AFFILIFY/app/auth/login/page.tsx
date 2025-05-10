"use client";

import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get('message');
    if (message) {
      setSuccessMessage(decodeURIComponent(message));
    }
    // Clear the message from URL to prevent it from showing again on refresh/navigation
    // router.replace('/login', undefined); // This might cause issues if not handled carefully with Next.js 13+ app router
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage(''); // Clear previous success message on new attempt
    setIsLoading(true);

    if (!email || !password) {
      setError('Email and password are required.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.redirectTo) {
        // In a real app, you might store a session token here (e.g., in context or secure storage)
        setSuccessMessage(data.message || 'Login successful! Redirecting...');
        router.push(data.redirectTo); // Redirect to dashboard
      } else {
        setError(data.message || 'An error occurred during login.');
      }
    } catch (err) {
      console.error('Login fetch error:', err);
      setError('Failed to connect to the server. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-orange-600 p-4">
      <div className="max-w-md w-full bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Sign in to AFFILIFY</h2>
          <p className="mt-2 text-sm text-gray-400">
            Access your dashboard and tools.
          </p>
        </div>

        {successMessage && (
          <div className="bg-green-700 border border-green-600 text-green-100 px-4 py-3 rounded-md relative mb-4" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}
        {error && (
          <div className="bg-red-700 border border-red-600 text-red-100 px-4 py-3 rounded-md relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/forgot-password" className="font-medium text-orange-400 hover:text-orange-300">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <Link href="/signup" className="font-medium text-orange-400 hover:text-orange-300">
            Don&apos;t have an account? Sign up
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

