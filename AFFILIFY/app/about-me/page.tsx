import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | AFFILIFY',
  description: 'Learn about the person behind AFFILIFY and their mission to democratize affiliate marketing.',
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">About Me</h1>
          
          <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">The Person Behind AFFILIFY</h2>
            
            {/* Placeholder content that the user can fill in later */}
            <div className="space-y-6">
              <p className="text-lg">
                [HI, I'm Andrew and I'm with nothing better than you. I'm from a small village in Romania and I am a student at the local school. About one year ago, I reached my peak: I had great friends, high grades, and I was seeing my crush on the side. Everything was going as planned. But then, in December 2024,something hit me. I realized that I don't just want to be that normal guy, I wanted something different. That one thought changed everything, my crush became just another girl and my friends became some annoying people. I knew I had to do something. Back then, I didn't know anything about how to make money online, but I knew that was the best way. I tried Dropshipping and it failed, I tried Copywriting and it failed, I tried making money through social media and that failed a well. By now it was New Year's and I was feeling a little bit depressed, I didn't have any friends to party with and no girl to kiss. On top of that, my ambition didn't lead to any result, and I made absolutely no money from it. I wanted to quit. At about 1 am I saw on a post about an affiliate marketing website and how much it was making. It seemed like I hit gold. I started immeadiatly, I signed up for an affiliate program and picked my product. Than I realized that I had no idea on how to make a website, so I started looking for alternatives, all the free programs gave out, and the ones I had to pay for didn't work out as well. I was back to deppresion. I had done nothing useful. I lost everything that took me years to get. ALL for NOTHING. Then I remembered all the nights in which I dreamed of succeding, of proving everybody wrong. I wasn't gonna let dream fade away. Ok I guess that by now you know that I'm joking. What actually happened was I tried to recover my old life and it didn't work out. So I sat back down on my chair and started thinking: What should I do? What should I do?... . Finally, after like a week, I came to this idea: I will make a tool that will give everybody a chance to start affiliate marketing. For that I needed to build a website, so I started studying, and studying,and studying some more. It was March, I finally learned how to write some code. I started writing, checking the list that I made every time to see if I made mistakes. I didn't add the AI yet, but I just wanted to see how the website would work. I started deploying-error another deployment-error. I kept receiving errors like this for a month. It was already April. I thought that instead of losing time deploying I should first find a way to integrate the main AI bot. I started researching again. Only after a month I had found the solution. It was going to cost me, but what was my scholarship for anyway? I started integrating-error another error and even more errors. Finnaly, after another three weeks I succeded. Now I had to set up payment, legal terms and domains. Fortunately, I didn't have any problems with that. And here we are, we got to the point where I'm writing this. I just want you to know that if you got here, you're probably a way better person than me because honestly, if the roles were switched, I wouldn't have done the same. Good Luck and WELCOME TO AFFILIFY!!!  ]
              </p>
              
              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">My Journey</h3>
                <p className="mb-4">
                  [Describe your journey in affiliate marketing and what inspired you to build this platform.]
                </p>
                <p>
                  [Share any relevant experience, challenges you've overcome, and lessons learned along the way.]
                </p>
              </div>
              
              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">My Mission</h3>
                <p className="mb-4">
                  [Explain your mission with AFFILIFY and how you aim to help others succeed in affiliate marketing.]
                </p>
                <p>
                  [Describe your vision for democratizing entrepreneurship through affordable, accessible tools.]
                </p>
              </div>
              
              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Values & Approach</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>[Value 1 - e.g., Transparency]</li>
                  <li>[Value 2 - e.g., Quality]</li>
                  <li>[Value 3 - e.g., Accessibility]</li>
                  <li>[Value 4 - e.g., Innovation]</li>
                  <li>[Value 5 - e.g., Community]</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Connect With Me</h2>
            <p className="mb-6">
              [Share how users can connect with you - social media, email, etc.]
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Placeholder buttons for social links */}
              <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300">Twitter</a>
              <a href="#" className="px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-md transition duration-300">LinkedIn</a>
              <a href="#" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition duration-300">Instagram</a>
              <a href="#" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md transition duration-300">YouTube</a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-md font-semibold transition duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
