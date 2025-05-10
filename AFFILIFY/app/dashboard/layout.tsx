"use client";

import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar'; // Assuming @/components path alias

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <DashboardSidebar />
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

