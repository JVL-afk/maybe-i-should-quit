import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

// This is the main features overview page that links to all feature subpages
export default function FeaturesPage() {
  const features = [
    {
      id: 'website-analysis',
      title: 'Website Analysis',
      description: 'Analyze any affiliate website to uncover strategies, strengths, and weaknesses.',
      benefits: [
        'Identify top-performing content structures',
        'Discover profitable keywords and topics',
        'Uncover monetization strategies',
      ],
      icon: '🔍',
      color: 'bg-purple-100 dark:bg-purple-900/20',
      textColor: 'text-purple-700 dark:text-purple-400',
    },
    {
      id: 'website-generation',
      title: 'Website Generation',
      description: 'Create complete, conversion-optimized affiliate websites in minutes.',
      benefits: [
        'Launch new affiliate sites in minutes',
        'Test multiple niches quickly',
        'Professional design and structure',
      ],
      icon: '🏗️',
      color: 'bg-blue-100 dark:bg-blue-900/20',
      textColor: 'text-blue-700 dark:text-blue-400',
    },
    {
      id: 'content-generation',
      title: 'Content Generation',
      description: 'Generate engaging, SEO-optimized affiliate content that ranks and sells.',
      benefits: [
        'Save 90% of content creation time',
        'Consistent quality across all content',
        'Built-in conversion triggers',
      ],
      icon: '✍️',
      color: 'bg-green-100 dark:bg-green-900/20',
      textColor: 'text-green-700 dark:text-green-400',
    },
    {
      id: 'keyword-research',
      title: 'Keyword Research',
      description: 'Discover high-converting affiliate keywords with buyer intent.',
      benefits: [
        'Find keywords with purchase intent',
        'Discover untapped keyword opportunities',
        'Prioritize content creation effectively',
      ],
      icon: '🔑',
      color: 'bg-yellow-100 dark:bg-yellow-900/20',
      textColor: 'text-yellow-700 dark:text-yellow-400',
    },
    {
      id: 'monetization-optimization',
      title: 'Monetization Optimization',
      description: 'Maximize your affiliate earnings with AI-powered optimization.',
      benefits: [
        'Increase conversion rates by 30-150%',
        'Identify higher-commission alternatives',
        'Optimize existing content for better performance',
      ],
      icon: '💰',
      color: 'bg-red-100 dark:bg-red-900/20',
      textColor: 'text-red-700 dark:text-red-400',
    },
    {
      id: 'performance-analytics',
      title: 'Performance Analytics',
      description: 'Track and optimize your affiliate marketing performance with comprehensive analytics.',
      benefits: [
        'Complete performance visibility',
        'Identify top-performing content and products',
        'Make data-driven optimization decisions',
      ],
      icon: '📊',
      color: 'bg-indigo-100 dark:bg-indigo-900/20',
      textColor: 'text-indigo-700 dark:text-indigo-400',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Powerful Features for Affiliate Marketers</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          AFFILIFY combines cutting-edge AI technology with affiliate marketing expertise to help you create, optimize, and scale your affiliate business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Link 
            href={`/features/${feature.id}`} 
            key={feature.id}
            className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700"
          >
            <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
            
            <ul className="space-y-2 mb-6">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className={`${feature.textColor} h-5 w-5 mr-2 flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className={`${feature.textColor} flex items-center font-medium group-hover:underline`}>
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link 
          href="/pricing" 
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
        >
          Get Started Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Start your 7-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
}
