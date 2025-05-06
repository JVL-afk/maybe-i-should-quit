"use client";

import React from "react";
import PricingPlan from "@/components/PricingPlan"; // Assuming path alias "@/" is configured for your project root

// Define the structure for a plan
interface Plan {
  id: string; // Stripe Price ID (user provided Product ID here)
  name: string;
  displayPrice: string;
  // You will need to get the actual logged-in user's ID here
  // For now, using a placeholder. This needs to be dynamic in a real app.
  userIdPlaceholder: string; 
}

// Plan data extracted from your screenshots
const plansData: Plan[] = [
  {
    id: "prod_SFtK5uxjfEzaXy", // User provided ID for Pro monthly
    name: "Pro subscription monthly",
    displayPrice: "$10.00 USD Per month",
    userIdPlaceholder: "user_123_placeholder", // Replace with actual dynamic user ID
  },
  {
    id: "prod_SFPjH4RSq282j", // User provided ID for Pro yearly
    name: "Pro subscription yearly",
    displayPrice: "$99.00 USD Per year",
    userIdPlaceholder: "user_123_placeholder", // Replace with actual dynamic user ID
  },
  {
    id: "prod_SFtNPvSsTkNHzl", // User provided ID for Enterprise monthly
    name: "Enterprise subscription monthly",
    displayPrice: "$50.00 USD Per month",
    userIdPlaceholder: "user_123_placeholder", // Replace with actual dynamic user ID
  },
  {
    id: "prod_SFtR9NYx17kPjr", // User provided ID for Enterprise yearly
    name: "Enterprise subscription yearly",
    displayPrice: "$499.00 USD Per year",
    userIdPlaceholder: "user_123_placeholder", // Replace with actual dynamic user ID
  },
];

export default function PricingPage() {
  // TODO: Implement logic to get the actual logged-in user's ID
  // const currentUserId = getUserIdFromAuth(); // Example function

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 sm:p-12 md:p-24">
      <div className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Choose Your Plan
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)]">
          Select the perfect plan to boost your affiliate marketing success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {plansData.map((plan) => (
          <PricingPlan
            key={plan.id}
            planName={plan.name}
            price={plan.displayPrice}
            stripePriceId={plan.id} // This is where the ID from your screenshot is used
            // IMPORTANT: Replace plan.userIdPlaceholder with the actual ID of the logged-in user
            userId={plan.userIdPlaceholder} 
          />
        ))}
      </div>
      
      <div className="mt-12 text-center text-sm text-[var(--text-secondary)]">
        <p>
          <strong>Note:</strong> The IDs provided (e.g., `prod_SFtK5uxjfEzaXy`) appear to be Stripe Product IDs. 
          For Stripe Checkout in subscription mode, you typically need a **Price ID** (usually starting with `price_...`). 
          Please ensure these are the correct Price IDs associated with the recurring prices of your products in your Stripe Dashboard.
        </p>
        <p>
           You will also need to replace `userIdPlaceholder` with a dynamic way to get the currently logged-in user&apos;s ID.
        </p>
      </div>
    </main>
  );
}

