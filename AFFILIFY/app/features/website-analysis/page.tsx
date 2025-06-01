import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function WebsiteAnalysisPage() {
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
            <h1 className="text-4xl font-bold mb-4">Uncover Hidden Opportunities in Any Affiliate Website</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Our AI analyzes competitor websites to reveal their strategies, strengths, and weaknesses, giving you a competitive edge in your niche.
            </p>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
            >
              Try Website Analysis
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <img 
                src="/images/features/website-analysis-dashboard.png" 
                alt="Website Analysis Dashboard" 
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
                <h3 className="font-semibold text-lg">Difficulty Understanding Competitor Strategies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Manually analyzing competitor websites is time-consuming and often misses critical insights.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Time-Consuming Manual Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thoroughly analyzing a single competitor site can take hours or even days of manual work.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Missing Hidden Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Without comprehensive analysis, you miss valuable patterns and opportunities your competitors have discovered.
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
                <h3 className="font-semibold text-lg">One-Click Comprehensive Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Simply enter a URL and our AI analyzes the entire site structure, content, and strategy in minutes.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Multi-Factor Evaluation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI evaluates over 50 different factors to provide a complete picture of any affiliate website.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Actionable Insights</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive specific, actionable recommendations you can implement immediately on your own site.
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
              title: "Identify Top Content Structures",
              description: "Discover which content formats and structures drive the most engagement and conversions.",
              icon: "📝"
            },
            {
              title: "Uncover Profitable Keywords",
              description: "See which keywords your competitors are ranking for and where opportunities exist.",
              icon: "🔑"
            },
            {
              title: "Reveal Monetization Strategies",
              description: "Learn how competitors are monetizing their traffic and which methods work best.",
              icon: "💰"
            },
            {
              title: "Benchmark Performance",
              description: "Compare your site against competitors and industry standards to identify gaps.",
              icon: "📊"
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
              title: "Enter any affiliate website URL",
              description: "Simply paste the URL of any affiliate website you want to analyze."
            },
            {
              step: 2,
              title: "Our AI scans the entire site",
              description: "Our advanced AI crawls the site, analyzing content, structure, keywords, and monetization strategies."
            },
            {
              step: 3,
              title: "Receive detailed analysis",
              description: "Get a comprehensive report covering content quality, SEO, monetization, user experience, and trust signals."
            },
            {
              step: 4,
              title: "Implement actionable recommendations",
              description: "Apply the specific, prioritized recommendations to improve your own affiliate website."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="bg-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="border-l-2 border-dashed border-purple-300 dark:border-purple-700 h-8 ml-4 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Analysis Categories Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Analysis Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Content Quality Assessment",
              items: [
                "Readability and engagement metrics",
                "Content depth and comprehensiveness",
                "Media usage and quality",
                "User value and uniqueness"
              ],
              color: "purple"
            },
            {
              title: "SEO Structure and Performance",
              items: [
                "Keyword usage and optimization",
                "Internal linking structure",
                "Technical SEO elements",
                "Backlink profile analysis"
              ],
              color: "blue"
            },
            {
              title: "Monetization Strategy Analysis",
              items: [
                "Affiliate program identification",
                "Link placement and density",
                "Call-to-action effectiveness",
                "Conversion optimization elements"
              ],
              color: "green"
            },
            {
              title: "User Experience Evaluation",
              items: [
                "Site speed and performance",
                "Mobile responsiveness",
                "Navigation and structure",
                "User journey optimization"
              ],
              color: "yellow"
            },
            {
              title: "Trust Signals and Authority",
              items: [
                "E-E-A-T indicators",
                "Credibility elements",
                "Transparency and disclosure",
                "Brand positioning"
              ],
              color: "red"
            },
            {
              title: "Competitive Advantage",
              items: [
                "Unique selling propositions",
                "Content gaps and opportunities",
                "Audience targeting precision",
                "Market positioning"
              ],
              color: "indigo"
            }
          ].map((category, index) => {
            const colorClasses = {
              purple: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10",
              blue: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10",
              green: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10",
              yellow: "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10",
              red: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10",
              indigo: "border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10"
            };
            
            return (
              <div key={index} className={`border rounded-xl p-6 ${colorClasses[category.color]}`}>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Case Study Section */}
      <div className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Story</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4">
                  <img 
                    src="/images/testimonials/user-avatar.jpg" 
                    alt="User Avatar" 
                    className="w-full h-full object-cover"
                    // This is a placeholder - you'll need to add the actual image
                  />
                </div>
                <h3 className="text-xl font-bold">Michael T.</h3>
                <p className="text-gray-600 dark:text-gray-400">Fitness Affiliate Marketer</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "I was struggling to understand why my competitors were outranking me. After analyzing their sites with AFFILIFY, I discovered they were using a specific content structure that resonated with both users and search engines. I implemented the recommendations and saw a 215% increase in organic traffic within 3 months."
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">215%</p>
                    <p className="text-gray-600 dark:text-gray-400">Organic Traffic Increase</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">187%</p>
                    <p className="text-gray-600 dark:text-gray-400">Conversion Rate Improvement</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</p>
                    <p className="text-gray-600 dark:text-gray-400">Months to See Results</p>
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
              question: "How accurate is the analysis?",
              answer: "Our AI analysis has been benchmarked at 94% accuracy compared to expert manual analysis. The system continuously improves through machine learning and regular updates to keep pace with industry changes and search engine algorithms."
            },
            {
              question: "Can I analyze my own website?",
              answer: "Absolutely! In fact, we recommend analyzing your own website first to establish a baseline, then analyzing competitors to identify opportunities for improvement. This comparative approach yields the most actionable insights."
            },
            {
              question: "How often should I analyze competitor sites?",
              answer: "We recommend analyzing your main competitors quarterly, as well as whenever you notice significant changes in rankings or traffic patterns. For fast-moving niches, monthly analysis may be beneficial to stay ahead of trends."
            },
            {
              question: "What makes this better than manual analysis?",
              answer: "Our AI can analyze hundreds of factors simultaneously across entire websites in minutes, something that would take days manually. It also identifies patterns and correlations that might not be obvious to the human eye, providing deeper insights."
            },
            {
              question: "Can I export the analysis results?",
              answer: "Yes, all analysis results can be exported in PDF, CSV, or Google Sheets formats. This makes it easy to share with team members or clients, or to create your own custom reports and action plans."
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
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Analyze Your First Website Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Uncover hidden opportunities and gain a competitive edge in your affiliate marketing niche.
        </p>
        <Link 
          href="/signup" 
          className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Get Started Free
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-purple-200">
          No credit card required. 7-day free trial.
        </p>
      </div>
    </div>
  );
}
