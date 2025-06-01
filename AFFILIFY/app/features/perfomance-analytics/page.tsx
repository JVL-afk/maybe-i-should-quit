import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function PerformanceAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <Link 
          href="/features" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Features
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Turn Data Into Dollars</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Our comprehensive analytics dashboard reveals what's working and what needs improvement, helping you make data-driven decisions to maximize revenue.
            </p>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
            >
              Start Tracking Your Performance
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <img 
                src="/images/features/performance-analytics-dashboard.png" 
                alt="Performance Analytics Dashboard" 
                className="rounded-lg w-full"
                // This is a placeholder - you'll need to add the actual image
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Problem/Solution Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">The Challenge</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Scattered Data Across Multiple Platforms</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Affiliate marketers struggle to piece together data from various affiliate networks, analytics tools, and content platforms.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Difficult to Connect Content Performance to Revenue</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Most analytics tools don't show the direct relationship between specific content pieces and the revenue they generate.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unclear Which Efforts Drive Results</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Without comprehensive analytics, it's difficult to know which strategies and content types are most profitable.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">AFFILIFY's Solution</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Centralized Performance Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our platform brings together data from all your affiliate networks, analytics, and content platforms in one place.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Content-to-Revenue Attribution</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  See exactly how much revenue each piece of content generates, down to the individual link level.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI-Powered Improvement Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive actionable insights and specific recommendations to improve your performance based on your data.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Complete Performance Visibility",
              description: "See all your affiliate marketing performance metrics in one comprehensive dashboard.",
              icon: "👁️"
            },
            {
              title: "Identify Top Performers",
              description: "Quickly spot your highest-performing content, products, and traffic sources.",
              icon: "🏆"
            },
            {
              title: "Spot Underperforming Areas",
              description: "Identify content and strategies that aren't delivering results so you can improve or replace them.",
              icon: "📉"
            },
            {
              title: "Data-Driven Optimization",
              description: "Make informed decisions based on real data rather than guesswork or assumptions.",
              icon: "🧠"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="mb-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              step: 1,
              title: "Connect your affiliate accounts and analytics",
              description: "Easily integrate with all major affiliate networks, Google Analytics, and your website platform."
            },
            {
              step: 2,
              title: "View unified performance dashboard",
              description: "Access your comprehensive dashboard showing all key metrics in one place."
            },
            {
              step: 3,
              title: "Drill down into specific metrics and pages",
              description: "Explore detailed performance data for individual content pieces, products, and traffic sources."
            },
            {
              step: 4,
              title: "Receive AI-powered improvement suggestions",
              description: "Get actionable recommendations to optimize your strategy based on your unique data."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="bg-indigo-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="border-l-2 border-dashed border-indigo-300 dark:border-indigo-700 h-8 ml-4 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Key Metrics Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Metrics Tracked</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Revenue by Content Piece",
              description: "See exactly how much revenue each article, page, or post is generating for your affiliate business.",
              icon: "💵",
              color: "indigo"
            },
            {
              title: "Conversion Rates by Product",
              description: "Track which products convert best with your audience across different content types and placements.",
              icon: "🔄",
              color: "purple"
            },
            {
              title: "Traffic and Engagement Metrics",
              description: "Monitor traffic sources, page views, time on page, and other key engagement metrics that impact revenue.",
              icon: "👥",
              color: "blue"
            },
            {
              title: "ROI on Content Creation",
              description: "Calculate the exact return on investment for each piece of content to optimize your content strategy.",
              icon: "📊",
              color: "green"
            },
            {
              title: "Performance Trends Over Time",
              description: "Track how your metrics change over time to identify seasonal patterns and long-term trends.",
              icon: "📈",
              color: "yellow"
            },
            {
              title: "Comparison to Industry Benchmarks",
              description: "See how your performance compares to industry averages and top performers in your niche.",
              icon: "⚖️",
              color: "red"
            }
          ].map((metric, index) => {
            const colorClasses = {
              indigo: "border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10",
              purple: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10",
              blue: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10",
              green: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10",
              yellow: "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10",
              red: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10"
            };
            
            return (
              <div key={index} className={`border rounded-xl p-6 ${colorClasses[metric.color]}`}>
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Dashboard Preview Section */}
      <div className="mb-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Dashboard Preview</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
            <img 
              src="/images/features/analytics-dashboard-full.png" 
              alt="Full Analytics Dashboard" 
              className="w-full rounded-lg"
              // This is a placeholder - you'll need to add the actual image
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-bold mb-2">Revenue Breakdown</h3>
              <img 
                src="/images/features/revenue-breakdown-chart.png" 
                alt="Revenue Breakdown Chart" 
                className="w-full rounded-lg"
                // This is a placeholder - you'll need to add the actual image
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-bold mb-2">Top Performing Content</h3>
              <img 
                src="/images/features/top-content-chart.png" 
                alt="Top Performing Content Chart" 
                className="w-full rounded-lg"
                // This is a placeholder - you'll need to add the actual image
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-bold mb-2">Conversion Trends</h3>
              <img 
                src="/images/features/conversion-trends-chart.png" 
                alt="Conversion Trends Chart" 
                className="w-full rounded-lg"
                // This is a placeholder - you'll need to add the actual image
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* User Testimonial Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">User Testimonial</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4">
                  <img 
                    src="/images/testimonials/analytics-user.jpg" 
                    alt="User Avatar" 
                    className="w-full h-full object-cover"
                    // This is a placeholder - you'll need to add the actual image
                  />
                </div>
                <h3 className="text-xl font-bold">Jennifer L.</h3>
                <p className="text-gray-600 dark:text-gray-400">Tech Affiliate Blogger</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "Before AFFILIFY, I was flying blind with my affiliate marketing. I had no idea which content was actually driving revenue versus just getting traffic. The performance analytics dashboard changed everything. I discovered that one of my lowest-traffic articles was generating 40% of my revenue! I've since created more content like it and tripled my monthly income."
                </blockquote>
                
                <h4 className="font-bold text-lg mb-4">Specific Metrics Improved:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">312%</p>
                    <p className="text-gray-600 dark:text-gray-400">Revenue Increase</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">47%</p>
                    <p className="text-gray-600 dark:text-gray-400">Higher Conversion Rate</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">8.5x</p>
                    <p className="text-gray-600 dark:text-gray-400">Content ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "Which affiliate networks can I connect?",
              answer: "AFFILIFY supports all major affiliate networks including Amazon Associates, ShareASale, CJ Affiliate, Awin, ClickBank, Impact, Rakuten, and many more. We also support direct merchant programs through our custom API integration. If you use a network that isn't directly supported, we offer a manual tracking option as well."
            },
            {
              question: "Can I export reports automatically?",
              answer: "Yes, you can schedule automated reports to be exported in various formats (PDF, CSV, Excel) and delivered to your email or connected cloud storage services like Google Drive or Dropbox. You can customize the frequency (daily, weekly, monthly) and the specific metrics included in each report."
            },
            {
              question: "How does content attribution work?",
              answer: "Our system uses a combination of URL parameters, cookies, and advanced tracking to connect affiliate commissions back to the specific content that generated them. We track the entire customer journey from initial click to final purchase, even across multiple sessions, giving you accurate attribution data for every piece of content."
            },
            {
              question: "Can I set custom goals and alerts?",
              answer: "Absolutely! You can set custom performance goals for revenue, conversion rates, traffic, and other metrics. Our system will track your progress toward these goals and send you alerts when you reach milestones or if performance drops below specified thresholds. This helps you stay on top of your business without constantly checking the dashboard."
            },
            {
              question: "Is historical data imported when I connect my accounts?",
              answer: "Yes, when you connect your affiliate networks and analytics accounts, we import up to 12 months of historical data (where available). This gives you immediate access to performance trends and allows you to compare current performance against historical benchmarks."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Start Tracking Your Performance</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get complete visibility into your affiliate marketing performance and discover opportunities to maximize your revenue.
        </p>
        <Link 
          href="/signup" 
          className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Get Started Free
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-indigo-200">
          No credit card required. 7-day free trial.
        </p>
      </div>
    </div>
  );
}
