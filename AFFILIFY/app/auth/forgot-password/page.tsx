"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    if (!email) {
      setError('Email address is required.');
      setIsLoading(false);
      return;
    }

    try {
      // In a real application, this API route would handle sending a password reset email.
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(data.message || 'If an account exists for this email, a password reset link has been sent (placeholder).');
        setEmail(''); // Clear email field on success
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error('Forgot password fetch error:', err);
      setError('Failed to connect to the server. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-orange-600 p-4">
      <div className="max-w-md w-full bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Forgot Your Password?</h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address and we&apos;ll send you a link to reset your password (placeholder functionality).
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
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500 disabled:opacity-50"
            >
              {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <Link href="/login" className="font-medium text-orange-400 hover:text-orange-300">
            Remembered your password? Sign in
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

