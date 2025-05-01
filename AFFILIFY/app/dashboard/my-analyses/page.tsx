
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DashboardSidebar from '../../components/dashboard/sidebar' // Changed from path alias to relative path

// Define a type for the analysis object
interface Analysis {
  id: string;
  url: string;
  date: string;
  productCount: number;
  status: 'Completed' | 'Processing' | 'Failed'; // Example statuses
}

export default function MyAnalysesPage() {
  const [analyses, setAnalyses] = useState<Analysis[]>([
    {
      id: 'analysis-123',
      url: 'https://amazon.com/electronics',
      date: '2025-04-24',
      productCount: 15,
      status: 'Completed',
    },
    {
      id: 'analysis-456',
      url: 'https://bestbuy.com/laptops',
      date: '2025-04-20',
      productCount: 22,
      status: 'Completed',
    },
    {
      id: 'analysis-789',
      url: 'https://example.com/pending-analysis',
      date: '2025-04-28',
      productCount: 0,
      status: 'Processing',
    },
  ])

  // Add useEffect if fetching data from an API
  // useEffect(() => {
  //   // Fetch analyses data
  // }, [])

  const getStatusColor = (status: Analysis['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Analyses</h1>
            <p className="text-[var(--text-secondary)]">
              View your past website analyses.
            </p>
          </div>

          <Link
            href="/dashboard/analyze-website"
            className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white font-bold py-2 px-4 rounded-md text-center flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Analyze New Website
          </Link>
        </div>

        {/* Analyses Table */}
        <div className="bg-[rgba(45,26,61,0.7)] rounded-lg overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[rgba(255,255,255,0.1)]">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    Analysis ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    URL Analyzed
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    Products Found
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(255,255,255,0.1)]">
                {analyses.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-[var(--text-secondary)]">
                      No analyses found.
                    </td>
                  </tr>
                ) : (
                  analyses.map((analysis) => (
                    <tr key={analysis.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">
                        {analysis.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm truncate max-w-xs" title={analysis.url}>{analysis.url}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {analysis.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {analysis.status === 'Completed' ? analysis.productCount : '—'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(analysis.status)}`}>
                          {analysis.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <div className="flex justify-end space-x-2">
                          {analysis.status === 'Completed' && (
                            <button
                              onClick={() => alert(`Use Analysis ID: ${analysis.id} on Create Website page`)}
                              className="text-[var(--button-primary)] hover:text-[var(--button-primary-hover)]"
                              title="Use this analysis to create a website"
                            >
                              {/* Use Plus icon or similar */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          )}
                          <button className="text-red-500 hover:text-red-400" title="Delete analysis">
                            {/* Use Trash icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

