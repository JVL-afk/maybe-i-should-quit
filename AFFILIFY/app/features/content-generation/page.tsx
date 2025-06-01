import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function ContentGenerationPage() {
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
            <h1 className="text-4xl font-bold mb-4">Never Stare at a Blank Page Again</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Generate conversion-focused affiliate content that ranks and sells, saving you countless hours of writing time.
            </p>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
            >
              Create Your First Content
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <img 
                src="/images/features/content-generation-example.png" 
                alt="Content Generation Example" 
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
                <h3 className="font-semibold text-lg">Quality Content Creation is Time-Consuming</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Writing high-quality affiliate content can take hours or even days per article, limiting your site's growth.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Most AI Writers Don't Understand Affiliate Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Generic AI content tools create bland content that lacks the specific elements needed to drive affiliate sales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Generic Content Doesn't Convert or Rank Well</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Without specialized knowledge of conversion triggers and SEO, most content fails to generate significant revenue.
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
                <h3 className="font-semibold text-lg">Specialized Affiliate Content Generation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI is specifically trained on high-performing affiliate content to create material that actually sells products.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Conversion Elements Built Into Every Piece</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each piece of content includes proven conversion triggers, call-to-actions, and persuasive elements.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">SEO-Optimized Structure and Formatting</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Content is structured to rank well in search engines while maintaining a natural, engaging writing style.
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
              title: "Save 90% of Content Creation Time",
              description: "Generate complete, ready-to-publish affiliate content in minutes instead of hours or days.",
              icon: "⏱️"
            },
            {
              title: "Consistent Quality Across All Content",
              description: "Maintain the same high standard of quality across all your affiliate content, regardless of volume.",
              icon: "✅"
            },
            {
              title: "Built-in Conversion Triggers",
              description: "Every piece includes psychological triggers and persuasive elements that drive affiliate sales.",
              icon: "💰"
            },
            {
              title: "Natural, Engaging Writing Style",
              description: "Content reads naturally and engages readers while still optimizing for both conversions and SEO.",
              icon: "📝"
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
              title: "Select content type",
              description: "Choose from product reviews, comparisons, buying guides, how-to content, and more."
            },
            {
              step: 2,
              title: "Enter product details and target keywords",
              description: "Provide information about the products you're promoting and your target keywords."
            },
            {
              step: 3,
              title: "Customize tone and style preferences",
              description: "Select your preferred writing style, tone, and content length to match your brand voice."
            },
            {
              step: 4,
              title: "Generate and edit the finished content",
              description: "Review the generated content, make any desired edits, and publish to your website."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="border-l-2 border-dashed border-green-300 dark:border-green-700 h-8 ml-4 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Content Types Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Content Types Available</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Product Reviews",
              description: "In-depth, conversion-focused product reviews that highlight benefits, features, and use cases to drive affiliate sales.",
              image: "/images/features/product-review-example.jpg"
            },
            {
              title: "Product Comparisons",
              description: "Side-by-side comparisons that help readers choose between similar products, increasing your chance of earning a commission.",
              image: "/images/features/product-comparison-example.jpg"
            },
            {
              title: "Buying Guides",
              description: "Comprehensive guides that help readers make informed purchasing decisions while naturally incorporating your affiliate products.",
              image: "/images/features/buying-guide-example.jpg"
            },
            {
              title: "How-To Content",
              description: "Practical, useful content that attracts organic traffic and naturally incorporates affiliate product recommendations.",
              image: "/images/features/how-to-content-example.jpg"
            },
            {
              title: "Informational Articles",
              description: "SEO-optimized informational content that establishes authority in your niche while subtly promoting affiliate products.",
              image: "/images/features/informational-article-example.jpg"
            },
            {
              title: "Email Sequences",
              description: "Conversion-focused email sequences designed to nurture leads and drive affiliate sales through strategic follow-up.",
              image: "/images/features/email-sequence-example.jpg"
            }
          ].map((contentType, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={contentType.image}
                  alt={contentType.title}
                  className="w-full h-full object-cover"
                  // These are placeholders - you'll need to add the actual images
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{contentType.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{contentType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Expert Insight Section */}
      <div className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Expert Insight</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4">
                  <img 
                    src="/images/experts/content-marketing-expert.jpg" 
                    alt="Content Marketing Expert" 
                    className="w-full h-full object-cover"
                    // This is a placeholder - you'll need to add the actual image
                  />
                </div>
                <h3 className="text-xl font-bold">Alex Rodriguez</h3>
                <p className="text-gray-600 dark:text-gray-400">Content Marketing Expert</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "What sets AFFILIFY's content generation apart is its deep understanding of affiliate marketing psychology. The content it produces doesn't just read well—it sells. I've analyzed dozens of AI content tools, and none come close to the conversion rates I've seen from AFFILIFY-generated content."
                </blockquote>
                
                <h4 className="font-bold text-lg mb-4">Before & After Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                    <p className="font-bold mb-2">Before AFFILIFY:</p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 1.2% conversion rate</li>
                      <li>• 8 hours per article</li>
                      <li>• 2.3% CTR on affiliate links</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                    <p className="font-bold mb-2">After AFFILIFY:</p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 3.7% conversion rate</li>
                      <li>• 20 minutes per article</li>
                      <li>• 5.8% CTR on affiliate links</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">208%</p>
                  <p className="text-gray-600 dark:text-gray-400">Average Increase in Affiliate Revenue</p>
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
              question: "Is the content unique and original?",
              answer: "Yes, all content generated by AFFILIFY is unique and original. Our AI creates fresh content for each request, ensuring you never have duplicate content issues. Each piece is tailored to your specific products, keywords, and preferences."
            },
            {
              question: "Can I edit the generated content?",
              answer: "Absolutely! After generation, you have full control to edit any aspect of the content. Our built-in editor makes it easy to refine, expand, or modify the content to perfectly match your voice and requirements."
            },
            {
              question: "How does the content avoid AI detection?",
              answer: "Our content is specifically engineered to be indistinguishable from human-written content. We use advanced natural language processing techniques that create varied sentence structures, natural transitions, and human-like reasoning patterns that easily pass AI detection tools."
            },
            {
              question: "Can I generate content in bulk?",
              answer: "Yes, our platform supports bulk content generation. You can create multiple pieces of content simultaneously by uploading a CSV file with your requirements. This is perfect for scaling your affiliate site quickly or managing multiple sites at once."
            },
            {
              question: "Will the content rank well in search engines?",
              answer: "Our content is created with SEO best practices built in. Each piece includes proper keyword usage, semantic relevance, optimal structure, and other ranking factors. While no one can guarantee rankings (as they depend on many external factors), our content provides a strong foundation for SEO success."
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
      <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Create Your First Piece of Content</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Stop wasting hours staring at blank pages. Generate conversion-focused affiliate content in minutes.
        </p>
        <Link 
          href="/signup" 
          className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Start Creating Free
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-green-200">
          No credit card required. 7-day free trial.
        </p>
      </div>
    </div>
  );
}
