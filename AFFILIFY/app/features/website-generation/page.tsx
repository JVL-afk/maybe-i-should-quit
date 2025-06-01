import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function WebsiteGenerationPage() {
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
            <h1 className="text-4xl font-bold mb-4">Create Profitable Affiliate Websites in Minutes, Not Months</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Our AI generates complete, conversion-optimized websites tailored to your niche and products, with no coding or design skills required.
            </p>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
            >
              Generate Your First Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <img 
                src="/images/features/website-generation-demo.png" 
                alt="Website Generation Demo" 
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
                <h3 className="font-semibold text-lg">Traditional Website Creation is Slow and Expensive</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating a professional affiliate website typically takes weeks or months and costs thousands of dollars.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Most Templates Aren't Optimized for Affiliate Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Generic website templates lack the specific elements and structures that drive affiliate conversions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-red-600 dark:text-red-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Technical Barriers Prevent Many From Starting</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Without coding or design skills, many potential affiliate marketers never get their ideas off the ground.
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
                <h3 className="font-semibold text-lg">End-to-End Website Generation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI creates complete, ready-to-launch affiliate websites with all necessary pages and content.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Conversion-Optimized for Affiliate Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every element is designed specifically to maximize affiliate conversions and commissions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-4 mt-1">
                <span className="text-green-600 dark:text-green-400 text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">No Coding or Design Skills Needed</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Simply enter your niche and products, and our AI handles everything else, from design to content.
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
              title: "Launch Sites in Minutes",
              description: "Create complete, ready-to-publish affiliate websites in just minutes instead of weeks or months.",
              icon: "🚀"
            },
            {
              title: "Test Multiple Niches Quickly",
              description: "Rapidly test different niches and products to find the most profitable opportunities.",
              icon: "🔍"
            },
            {
              title: "Professional Design & Structure",
              description: "Get beautiful, responsive designs that look like they were created by professional web designers.",
              icon: "🎨"
            },
            {
              title: "Built-in SEO & Conversion Elements",
              description: "Every site includes optimized SEO elements and proven conversion triggers for affiliate marketing.",
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
              title: "Enter your niche and products",
              description: "Specify your affiliate niche and the products you want to promote on your website."
            },
            {
              step: 2,
              title: "Select your preferred style and structure",
              description: "Choose from various design styles and site structures optimized for affiliate marketing."
            },
            {
              step: 3,
              title: "Review and customize generated content",
              description: "Preview your complete website and make any desired adjustments to content or design."
            },
            {
              step: 4,
              title: "Publish with one click",
              description: "Deploy your finished website instantly to your custom domain or our free hosting."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                {step.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="border-l-2 border-dashed border-blue-300 dark:border-blue-700 h-8 ml-4 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Website Components Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Website Components Generated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Homepage with Compelling Introduction",
              description: "Engaging homepage that introduces your niche, establishes credibility, and guides visitors to your most important content.",
              image: "/images/features/homepage-example.jpg"
            },
            {
              title: "Product Review Pages",
              description: "In-depth, conversion-optimized product reviews with all the elements needed to drive affiliate sales.",
              image: "/images/features/review-page-example.jpg"
            },
            {
              title: "Comparison Pages",
              description: "Side-by-side product comparisons that help visitors make purchase decisions and increase your commission rates.",
              image: "/images/features/comparison-page-example.jpg"
            },
            {
              title: "Resource/Information Pages",
              description: "Valuable information pages that attract organic traffic and establish your site as an authority in your niche.",
              image: "/images/features/resource-page-example.jpg"
            },
            {
              title: "About/Contact Pages",
              description: "Trust-building pages that establish your credibility and provide necessary legal compliance for affiliate sites.",
              image: "/images/features/about-page-example.jpg"
            },
            {
              title: "Category & Navigation Structure",
              description: "Intuitive site structure and navigation that guides visitors through your content and maximizes engagement.",
              image: "/images/features/navigation-example.jpg"
            }
          ].map((component, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={component.image}
                  alt={component.title}
                  className="w-full h-full object-cover"
                  // These are placeholders - you'll need to add the actual images
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{component.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{component.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Success Story Section */}
      <div className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Story</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4">
                  <img 
                    src="/images/testimonials/user-avatar-2.jpg" 
                    alt="User Avatar" 
                    className="w-full h-full object-cover"
                    // This is a placeholder - you'll need to add the actual image
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah K.</h3>
                <p className="text-gray-600 dark:text-gray-400">Home Decor Affiliate</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  "I had been wanting to start an affiliate site for years but was intimidated by the technical aspects. With AFFILIFY, I was able to generate a complete home decor affiliate site in under an hour. Within the first month, I made $1,200 in commissions with almost no additional work. The site looks professional and converts incredibly well."
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1 Hour</p>
                    <p className="text-gray-600 dark:text-gray-400">To Create Complete Site</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$1,200</p>
                    <p className="text-gray-600 dark:text-gray-400">First Month Commissions</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.8%</p>
                    <p className="text-gray-600 dark:text-gray-400">Conversion Rate</p>
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
              question: "Are the websites unique and original?",
              answer: "Yes, each website is generated uniquely for your specific niche and products. Our AI creates original content, designs, and structures tailored to your requirements, ensuring your site stands out from competitors and avoids duplicate content issues."
            },
            {
              question: "Can I customize the generated content?",
              answer: "Absolutely! After generation, you have full control to edit any aspect of your website. You can modify text, images, colors, layouts, and more through our intuitive editor. The AI-generated site serves as a professional starting point that you can then personalize."
            },
            {
              question: "Do I own the websites completely?",
              answer: "Yes, you own 100% of the generated website and all its content. You can export it, host it anywhere you choose, modify it however you want, and monetize it without any restrictions or ongoing fees to AFFILIFY beyond your subscription."
            },
            {
              question: "How do I add my affiliate links?",
              answer: "The website generator includes dedicated fields for your affiliate links during the creation process. After generation, you can also easily add or update affiliate links through our visual editor. The system automatically formats them properly and places them in optimal positions for conversions."
            },
            {
              question: "Can I use my own domain name?",
              answer: "Yes, you can connect any domain you own to your generated website. We provide simple DNS instructions for pointing your domain to our hosting, or you can export the entire website and host it with any provider of your choice."
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
      <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Generate Your First Affiliate Website</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Stop wasting time and money on complex website development. Create your conversion-optimized affiliate site in minutes.
        </p>
        <Link 
          href="/signup" 
          className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Start Creating Free
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-blue-200">
          No credit card required. 7-day free trial.
        </p>
      </div>
    </div>
  );
}
