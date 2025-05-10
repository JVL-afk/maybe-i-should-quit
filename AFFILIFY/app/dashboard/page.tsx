"use client";

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-orange-600 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Your AFFILIFY Dashboard</h1>
        <p className="text-xl text-gray-300">Your central hub for affiliate website creation and analysis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link href="/dashboard/create-website" passHref>
          <div className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-12 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer text-center">
            <h2 className="text-3xl mb-3">CREATE A NEW WEBSITE</h2>
            <p className="text-orange-100">Launch your next affiliate marketing site with our AI-powered builder.</p>
          </div>
        </Link>

        <Link href="/dashboard/analyze" passHref>
          <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-12 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer text-center">
            <h2 className="text-3xl mb-3">ANALYZE A WEBSITE</h2>
            <p className="text-purple-100">Get in-depth insights and SEO recommendations for any website.</p>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400">Navigate using the sidebar to view your existing websites and analyses.</p>
      </div>
    </div>
  );
}

