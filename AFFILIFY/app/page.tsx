import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder data for reviews - replace with actual data later
const reviews = [
  { id: 1, name: 'John D.', text: 'AFFILIFY helped me launch my first profitable site in minutes!' },
  { id: 2, name: 'Sarah K.', text: 'The AI tools are incredibly powerful and easy to use.' },
  { id: 3, name: 'Mike P.', text: 'Finally making real money with affiliate marketing, thanks to this platform.' },
  { id: 4, name: 'Lisa M.', text: 'Generated more leads than ever before!' },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      {/* 1. Scrollable Image Section with Text Overlay */}
      <div className="w-full h-screen relative overflow-hidden">
        <Image
          src="/stock_chart_hero.png" // Use the new user-provided image
          alt="Stock chart showing upward trend" // Update alt text
          layout="fill"
          objectFit="cover"
          quality={85}
          priority // Load this image first
        />
        {/* Text Overlay */}
        <div className="absolute inset-x-0 top-0 pt-8 sm:pt-12 md:pt-16 flex justify-center z-10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 bg-black bg-opacity-30 rounded py-2">
            Want your charts to look like this?
          </h1>
        </div>
      </div>

      {/* Content below the scrollable image */}
      <div className="w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        
        {/* 2. Welcome Text Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold sm:text-5xl mb-4">
            WELCOME TO AFFILIFY
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Your gateway to profit
          </p>
        </section>

        {/* 3. Sideways Scrolling Reviews Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">What Our Users Say</h3>
          <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-thin scrollbar-thumb-[var(--button-primary)] scrollbar-track-transparent">
            {reviews.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-72 bg-[rgba(45,26,61,0.7)] p-6 rounded-lg shadow-lg">
                <p className="italic text-gray-300 mb-4">"{review.text}"</p>
                <p className="font-semibold text-right">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Call to Action Section */}
        <section>
          <h3 className="text-3xl font-bold mb-4">
            Don't believe us? Try it out yourself!
          </h3>
          <Link href="/signup">
            <button 
              className="mt-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] transition duration-300"
            >
              SIGN UP NOW
            </button>
          </Link>
        </section>

      </div>
    </main>
  );
}

