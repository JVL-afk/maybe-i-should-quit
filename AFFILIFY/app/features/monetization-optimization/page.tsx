import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function MonetizationOptimizationPage() {
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
            <h1 className="text-4xl font-bold mb-4">Turn Traffic Into Revenue</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Our AI analyzes your content to maximize conversion rates and commissions, ensuring you never leave money on the table.
            </p>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
            >
              Optimize Your Monetization
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <img 
                src="/images/features/monetization-optimization-dashboard.png" 
                alt="Monetization Optimization Dashboard" 
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
                <h3 className="font-semibold text-lg">Most Affiliate Sites Leave Money on the Table</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Even experienced affiliate marketers often miss optimization opportunities that could significantly increase revenue.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Difficult to Know Which Products Convert Best</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Without extensive testing, it's hard to determine which products will generate the highest commissions for your audience.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Suboptimal Placement of Affiliate Links</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Many affiliates place links in positions that get overlooked or fail to trigger purchasing decisions.
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
                <h3 className="font-semibold text-lg">Content Monetization Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI analyzes your content to identify the optimal monetization strategy for each piece of content.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Product Selection Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We identify the highest-converting products for your specific audience and content type.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Placement and Call-to-Action Enhancement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our system recommends the optimal placement, format, and wording for affiliate links to maximize clicks and conversions.
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
              title: "Increase Conversion Rates",
              description: "Boost your conversion rates by 30-150% through strategic optimization of your affiliate content.",
              icon: "📈"
            },
            {
              title: "Identify Higher-Commission Alternatives",
              description: "Discover higher-paying products and programs that your audience is likely to respond to.",
              icon: "💰"
            },
            {
              title: "Optimize Existing Content",
              description: "Transform underperforming content into revenue-generating assets without creating new material.",
              icon: "🔄"
            },
            {
              title: "Discover New Monetization Opportunities",
              description: "Uncover new ways to monetize your content that you might have overlooked.",
              icon: "💡"
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
              title: "Upload or connect your content",
              description: "Connect your website, upload content, or paste URLs for our AI to analyze."
            },
            {
              step: 2,
              title: "Our AI analyzes conversion potential",
              description: "Our system evaluates your content for monetization opportunities and conversion optimization."
            },
            {
              step: 3,
              title: "Receive specific monetization recommendations",
              description: "Get detailed recommendations for product selection, link placement, and call-to-action improvements."
            },
            {
              step: 4,
              title: "Implement changes with one click",
              description: "Apply our recommendations automatically or manually to your content."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="border-l-2 border-dashed border-red-300 dark:border-red-700 h-8 ml-4 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Optimization Categories Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Optimization Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Product Selection Optimization",
              description: "Identify the best products to promote based on your audience, content type, and conversion potential.",
              image: "/images/features/product-selection.jpg",
              items: [
                "Audience-product matching",
                "Commission rate analysis",
                "Conversion probability scoring",
                "Product quality assessment"
              ]
            },
            {
              title: "Link Placement Enhancement",
              description: "Discover the optimal positions within your content to place affiliate links for maximum visibility and clicks.",
              image: "/images/features/link-placement.jpg",
              items: [
                "Heat map analysis",
                "User journey mapping",
                "Attention point identification",
                "Natural placement suggestions"
              ]
            },
            {
              title: "Call-to-Action Improvement",
              description: "Optimize your call-to-action text and design to significantly increase click-through rates.",
              image: "/images/features/call-to-action.jpg",
              items: [
                "Persuasive language templates",
                "Button design optimization",
                "Psychological trigger integration",
                "A/B testing recommendations"
              ]
            },
            {
              title: "Visual Element Recommendations",
              description: "Add and optimize images, comparison tables, and other visual elements that drive affiliate conversions.",
              image: "/images/features/visual-elements.jpg",
              items: [
                "Product image optimization",
                "Comparison table generation",
                "Feature highlight visuals",
                "Trust badge placement"
              ]
            },
            {
              title: "Cross-selling Opportunities",
              description: "Identify complementary products to recommend alongside your primary promotions to increase order value.",
              image: "/images/features/cross-selling.jpg",
              items: [
                "Product pairing analysis",
                "Complementary item identification",
                "Bundle recommendation",
                "Upsell opportunity mapping"
              ]
            },
            {
              title: "Commission Structure Analysis",
              description: "Evaluate different affiliate programs to find the most profitable options for your specific content.",
              image: "/images/features/commission-structure.jpg",
              items: [
                "Program comparison",
                "Payout structure evaluation",
                "Cookie duration analysis",
                "Program reliability assessment"
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  // These are placeholders - you'll need to add the actual images
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Success Metrics Section */}
      <div className="mb-16 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Metrics</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <p className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">87%</p>
              <p className="text-xl font-semibold mb-2">Average Conversion Rate Improvement</p>
              <p className="text-gray-600 dark:text-gray-400">Across all client websites after implementing our recommendations</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <p className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">142%</p>
              <p className="text-xl font-semibold mb-2">Average Commission Increase</p>
              <p className="text-gray-600 dark:text-gray-400">From product selection and program optimization</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <p className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">3.2x</p>
              <p className="text-xl font-semibold mb-2">Return on Investment</p>
              <p className="text-gray-600 dark:text-gray-400">Average ROI within the first month of implementation</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Before & After Examples</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Before Optimization:</h4>
                  <img 
                    src="/images/features/before-optimization.jpg" 
                    alt="Before Optimization Example" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    // This is a placeholder - you'll need to add the actual image
                  />
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Generic product recommendations</li>
                    <li>• Text-only links buried in content</li>
                    <li>• 1.8% conversion rate</li>
                    <li>• $12 average commission per sale</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">After Optimization:</h4>
                  <img 
                    src="/images/features/after-optimization.jpg" 
                    alt="After Optimization Example" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    // This is a placeholder - you'll need to add the actual image
                  />
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Targeted product selection</li>
                    <li>• Strategic button placement & comparison tables</li>
                    <li>• 4.7% conversion rate</li>
                    <li>• $28 average commission per sale</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  Total Revenue Increase: 547%
                </p>
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
              question: "How quickly will I see results?",
              answer: "Most users see significant improvements within 7-14 days of implementing our recommendations. The exact timeline depends on your traffic volume and how quickly you implement the changes. Some high-traffic sites have reported seeing conversion improvements within 24-48 hours of implementation."
            },
            {
              question: "Does this work with any affiliate program?",
              answer: "Yes, our monetization optimization works with virtually any affiliate program, including Amazon Associates, ShareASale, CJ Affiliate, ClickBank, and direct merchant programs. Our system is designed to be program-agnostic and focuses on universal conversion principles that work across all affiliate platforms."
            },
            {
              question: "Can I optimize existing content?",
              answer: "Absolutely! In fact, optimizing existing content is one of the most powerful ways to use our system. You can often see dramatic revenue increases by applying our recommendations to content that's already ranking and receiving traffic, without having to create anything new."
            },
            {
              question: "How does the AI know what converts better?",
              answer: "Our AI has been trained on millions of data points from successful affiliate websites across dozens of niches. It analyzes patterns in high-converting content, including link placement, call-to-action wording, visual elements, and product selection factors. The system continuously learns from new data to improve its recommendations."
            },
            {
              question: "Will this work for my specific niche?",
              answer: "Our system has been successfully used across virtually every affiliate marketing niche, from fitness and health to technology, home goods, finance, and beyond. While some optimization principles are universal, our AI also provides niche-specific recommendations based on the unique characteristics of your audience and products."
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
      <div className="text-center bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Optimize Your Monetization Strategy</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Stop leaving money on the table. Transform your existing content into high-converting affiliate assets.
        </p>
        <Link 
          href="/signup" 
          className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Start Optimizing Free
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-red-200">
          No credit card required. 7-day free trial.
        </p>
      </div>
    </div>
  );
}
