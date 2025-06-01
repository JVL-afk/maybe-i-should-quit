import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function KeywordResearchPage() {
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
            <h1 className="text-4xl font-bold mb-4">Uncover Keywords That Convert, Not Just Rank</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Our AI identifies keywords with high buyer intent and low competition, giving you the perfect foundation for profitable affiliate content.
            </p>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
            >
              Start Your Keyword Research
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <img 
                src="/images/features/keyword-research-dashboard.png" 
                alt="Keyword Research Dashboard" 
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
                <h3 className="font-semibold text-lg">Generic Keyword Tools Don't Identify Buyer Intent</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Standard keyword tools focus on search volume, not whether the searcher is ready to make a purchase.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Hard to Find Profitable, Low-Competition Keywords</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Identifying keywords with the perfect balance of profit potential and ranking difficulty is time-consuming.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Difficult to Prioritize Which Keywords to Target First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Without clear metrics on potential ROI, it's hard to know which keywords deserve your immediate attention.
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
                <h3 className="font-semibold text-lg">Affiliate-Specific Keyword Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI analyzes keywords specifically for their potential to drive affiliate commissions, not just traffic.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Buyer Intent Scoring System</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each keyword receives a Buyer Intent Score™ that indicates how likely the searcher is to make a purchase.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Competition vs. Opportunity Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our system balances ranking difficulty against profit potential to identify the most valuable keywords.
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
              title: "Find Keywords with Purchase Intent",
              description: "Discover keywords that attract visitors who are ready to buy, not just research.",
              icon: "🔍"
            },
            {
              title: "Discover Untapped Opportunities",
              description: "Identify valuable keywords your competitors have missed for quick ranking wins.",
              icon: "💎"
            },
            {
              title: "Prioritize Content Creation",
              description: "Know exactly which keywords to target first for maximum ROI on your content investment.",
              icon: "📋"
            },
            {
              title: "Track Performance Over Time",
              description: "Monitor how your keywords are performing and identify new opportunities as they emerge.",
              icon: "📈"
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
              title: "Enter your niche or seed keywords",
              description: "Start with your main niche or a few seed keywords that represent your affiliate focus."
            },
            {
              step: 2,
              title: "Review comprehensive keyword suggestions",
              description: "Our AI generates hundreds of keyword ideas specifically tailored for affiliate marketing success."
            },
            {
              step: 3,
              title: "Filter by buyer intent, competition, and volume",
              description: "Use our advanced filters to narrow down to the most valuable keywords for your strategy."
            },
            {
              step: 4,
              title: "Export or directly use for content generation",
              description: "Send keywords directly to our content generator or export them for your own use."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="bg-yellow-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="border-l-2 border-dashed border-yellow-300 dark:border-yellow-700 h-8 ml-4 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Unique Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Unique Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Buyer Intent Score™",
              description: "Our proprietary algorithm analyzes each keyword and assigns a score from 1-100 indicating how likely the searcher is to make a purchase.",
              icon: "🎯",
              color: "yellow"
            },
            {
              title: "Opportunity Gap Analysis",
              description: "Identifies keywords where the competition is low but the profit potential is high, revealing perfect opportunities.",
              icon: "📊",
              color: "blue"
            },
            {
              title: "Seasonal Trend Prediction",
              description: "Forecasts how keyword demand will change throughout the year, helping you plan content ahead of seasonal peaks.",
              icon: "🗓️",
              color: "green"
            },
            {
              title: "Competitor Keyword Mapping",
              description: "See which keywords your competitors are ranking for and identify gaps in their strategy you can exploit.",
              icon: "🔎",
              color: "purple"
            },
            {
              title: "SERP Feature Analysis",
              description: "Identifies which keywords trigger special search features like featured snippets that you can target for increased visibility.",
              icon: "✨",
              color: "red"
            },
            {
              title: "Commission Potential Estimator",
              description: "Estimates the potential affiliate commission value of each keyword based on product prices and conversion data.",
              icon: "💰",
              color: "indigo"
            }
          ].map((feature, index) => {
            const colorClasses = {
              yellow: "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10",
              blue: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10",
              green: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10",
              purple: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10",
              red: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10",
              indigo: "border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10"
            };
            
            return (
              <div key={index} className={`border rounded-xl p-6 ${colorClasses[feature.color]}`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Case Example Section */}
      <div className="mb-16 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Case Example</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Home Fitness Equipment Niche</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              A client in the highly competitive home fitness equipment niche was struggling to gain traction. Using our keyword research tool, we discovered these hidden opportunities:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-200 dark:border-gray-600 p-3 text-left">Keyword</th>
                    <th className="border border-gray-200 dark:border-gray-600 p-3 text-left">Monthly Searches</th>
                    <th className="border border-gray-200 dark:border-gray-600 p-3 text-left">Competition</th>
                    <th className="border border-gray-200 dark:border-gray-600 p-3 text-left">Buyer Intent Score™</th>
                    <th className="border border-gray-200 dark:border-gray-600 p-3 text-left">Opportunity Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">compact treadmill for apartment</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">1,800</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">Low</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">87/100</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">94/100</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-200 dark:border-gray-600 p-3">adjustable dumbbells worth it</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">2,400</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">Medium</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">92/100</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">88/100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">rowing machine for tall person</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">1,200</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">Very Low</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">84/100</td>
                    <td className="border border-gray-200 dark:border-gray-600 p-3">96/100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-bold text-lg mb-4">Results After Targeting These Keywords:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">$8,400</p>
                <p className="text-gray-600 dark:text-gray-400">Monthly Affiliate Revenue</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">Top 3</p>
                <p className="text-gray-600 dark:text-gray-400">Rankings for All Keywords</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">5.2%</p>
                <p className="text-gray-600 dark:text-gray-400">Conversion Rate</p>
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
              question: "How is this different from free keyword tools?",
              answer: "Unlike free keyword tools that focus primarily on search volume, our tool analyzes keywords specifically for affiliate marketing success. We evaluate buyer intent, competition levels, commission potential, and seasonal trends to identify keywords that will actually drive revenue, not just traffic."
            },
            {
              question: "How often is the keyword data updated?",
              answer: "Our keyword database is updated weekly to ensure you always have the most current data. Search trends, competition levels, and buyer behavior change constantly, and our system continuously adapts to these changes to provide you with the most accurate recommendations."
            },
            {
              question: "Can I track my keyword rankings?",
              answer: "Yes, our platform includes a keyword tracking feature that monitors your rankings for all your target keywords. You'll receive weekly reports showing your position changes and opportunities for improvement, helping you refine your content strategy over time."
            },
            {
              question: "How many keywords can I research?",
              answer: "Our standard plan allows for unlimited keyword research queries. There are no artificial limits on the number of keywords you can analyze or track, ensuring you can thoroughly explore any niche or topic without restrictions."
            },
            {
              question: "Can I export the keyword data?",
              answer: "Absolutely! All keyword data can be exported in CSV, Excel, or Google Sheets format. This makes it easy to share with team members, integrate with your content calendar, or use in your own custom analysis."
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
      <div className="text-center bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Start Your Keyword Research</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover high-converting keywords that your competitors have missed and build a foundation for affiliate success.
        </p>
        <Link 
          href="/signup" 
          className="bg-white text-yellow-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Get Started Free
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-yellow-100">
          No credit card required. 7-day free trial.
        </p>
      </div>
    </div>
  );
}
