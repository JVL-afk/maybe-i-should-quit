
import React from 'react';
// Assuming DashboardSidebar exists and is correctly placed
// Adjust the import path if necessary based on your final structure
import DashboardSidebar from '../../../components/dashboard/sidebar';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-[rgba(45,26,61,0.7)] p-6 rounded-lg shadow-xl">
          <p>Welcome to your AFFILIFY dashboard!</p>
          {/* Add more dashboard content here */}
        </div>
      </main>
    </div>
  );
}

