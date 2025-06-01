import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
