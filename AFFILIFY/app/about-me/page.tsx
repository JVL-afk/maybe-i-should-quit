import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | AFFILIFY',
  description: 'Learn about the person behind AFFILIFY and their mission to democratize affiliate marketing.',
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">About Me</h1>
          
          <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">The Person Behind AFFILIFY</h2>
            
            {/* Placeholder content that the user can fill in later */}
            <div className="space-y-6">
              <p className="text-lg">
                [Your introduction goes here. Share your story, background, and what led you to create AFFILIFY.]
              </p>
              
              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">My Journey</h3>
                <p className="mb-4">
                  [Describe your journey in affiliate marketing and what inspired you to build this platform.]
                </p>
                <p>
                  [Share any relevant experience, challenges you've overcome, and lessons learned along the way.]
                </p>
              </div>
              
              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">My Mission</h3>
                <p className="mb-4">
                  [Explain your mission with AFFILIFY and how you aim to help others succeed in affiliate marketing.]
                </p>
                <p>
                  [Describe your vision for democratizing entrepreneurship through affordable, accessible tools.]
                </p>
              </div>
              
              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Values & Approach</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>[Value 1 - e.g., Transparency]</li>
                  <li>[Value 2 - e.g., Quality]</li>
                  <li>[Value 3 - e.g., Accessibility]</li>
                  <li>[Value 4 - e.g., Innovation]</li>
                  <li>[Value 5 - e.g., Community]</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Connect With Me</h2>
            <p className="mb-6">
              [Share how users can connect with you - social media, email, etc.]
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Placeholder buttons for social links */}
              <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300">Twitter</a>
              <a href="#" className="px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-md transition duration-300">LinkedIn</a>
              <a href="#" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition duration-300">Instagram</a>
              <a href="#" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md transition duration-300">YouTube</a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-md font-semibold transition duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
