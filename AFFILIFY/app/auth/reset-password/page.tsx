"use client";

import React, { useState, FormEvent, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(''); // For user to enter the token they received
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 for code verification, 2 for new password

  useEffect(() => {
    const queryToken = searchParams.get('token');
    const queryEmail = searchParams.get('email');
    if (queryToken) {
      setToken(queryToken); // Store the token from URL
      // Optionally prefill the code field if it's short and you want to guide the user
      // setCode(queryToken); 
    }
    if (queryEmail) {
      setEmail(decodeURIComponent(queryEmail));
    }
    if (!queryToken || !queryEmail) {
        setError("Invalid or missing reset link parameters. Please request a new password reset link if needed.");
        // Optionally disable the form or guide user back
    }
  }, [searchParams]);

  const handleCodeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    if (!code.trim()) {
      setError('Please enter the reset code from your email.');
      setIsLoading(false);
      return;
    }
    if (code.trim() !== token) { // Simple token check for demo
        setError('Invalid reset code. Please check the code and try again.');
        setIsLoading(false);
        return;
    }

    // Placeholder: In a real app, you would verify the token against the backend more securely
    // For this demo, if the code matches the token from URL, we proceed
    setSuccessMessage('Code verified! Please enter your new password.');
    setStep(2);
    setIsLoading(false);
  };

 const handlePasswordResetSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    if (!newPassword || !confirmPassword) {
      setError('Please enter and confirm your new password.');
      setIsLoading(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }
    if (newPassword.length < 6) { // Basic password policy example
        setError('Password must be at least 6 characters long.');
        setIsLoading(false);
        return;
    }

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, token, newPassword }), // Send email and original token for backend validation
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(data.message || 'Password has been reset successfully! Redirecting to login...');
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setError(data.message || 'An error occurred while resetting your password.');
      }
    } catch (err) {
      console.error('Reset password fetch error:', err);
      setError('Failed to connect to the server. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-orange-600 p-4">
      <div className="max-w-md w-full bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Reset Your Password</h2>
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

        {step === 1 && (
          <form className="space-y-6" onSubmit={handleCodeSubmit}>
            <p className="text-sm text-gray-400">
              A reset code was sent to <strong>{email || 'your email'}</strong> (for demo, check console or use token from URL if visible).
              Please enter it below to verify your identity.
            </p>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-300">
                Reset Code
              </label>
              <div className="mt-1">
                <input
                  id="code"
                  name="code"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm bg-gray-700 text-white"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading || !token}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500 disabled:opacity-50"
              >
                {isLoading ? 'Verifying Code...' : 'Verify Code'}
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form className="space-y-6" onSubmit={handlePasswordResetSubmit}>
            <p className="text-sm text-gray-400">
              Enter your new password for <strong>{email}</strong>.
            </p>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300">
                New Password
              </label>
              <div className="mt-1">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm bg-gray-700 text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {isLoading ? 'Resetting Password...' : 'Set New Password'}
              </button>
            </div>
          </form>
        )}

        <div className="text-sm text-center mt-4">
          <Link href="/login" className="font-medium text-orange-400 hover:text-orange-300">
            Back to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

// Wrap with Suspense for useSearchParams
export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordForm />
        </Suspense>
    )
}

