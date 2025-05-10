"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For active link styling

// Define navigation items
const navItems = [
  { name: 'Dashboard Home', href: '/dashboard', icon: '🏠' }, // Simple emoji icon for now
  { name: 'My Websites', href: '/dashboard/my-websites', icon: '🌐' },
  { name: 'My Analyses', href: '/dashboard/my-analyses', icon: '📊' },
  // Add more items like 'Account Settings', 'Logout' later
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 p-5 space-y-6 flex flex-col shadow-lg">
      <div className="text-center py-4">
        <Link href="/" passHref>
          <span className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors cursor-pointer">
            AFFILIFY
          </span>
        </Link>
        <p className="text-xs text-gray-400 mt-1">Chatbot Dashboard</p>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <span
                  className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-all duration-200 ease-in-out 
                              ${pathname === item.href 
                                ? 'bg-orange-600 text-white shadow-md' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6 border-t border-gray-700">
        {/* Placeholder for future items like settings or logout */}
        <p className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} AFFILIFY</p>
      </div>
    </aside>
  );
}

