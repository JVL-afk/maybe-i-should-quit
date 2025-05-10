"use client";

import React from 'react';

export default function MyWebsitesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">My Created Websites</h1>
      
      {/* Placeholder for website listing */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
        <p className="text-gray-400 text-lg mb-4">
          This is where the list of websites you have created using AFFILIFY will appear.
        </p>
        <p className="text-gray-500">
          Each website entry will show details such as the site name, creation date, a direct link, and options to view traffic/affiliate click graphs or compare performance (features coming soon).
        </p>
        {/* Example of how a site might be listed - to be replaced with dynamic data */}
        <div className="mt-6 border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold text-orange-400">Example Site: My Awesome Niche Blog</h3>
          <p className="text-sm text-gray-500">Created: 2025-05-10</p>
          <a href="#" className="text-blue-400 hover:text-blue-300">Visit Site (Placeholder)</a>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500">
          The ability to manage and view detailed analytics for your created websites is under development.
        </p>
      </div>
    </div>
  );
}

