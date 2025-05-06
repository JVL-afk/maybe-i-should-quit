// AFFILIFY/components/PricingPlan.tsx (Example)
"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe outside component render
// Ensure you have NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your .env.local
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Define a type for the component props for better type safety
interface PricingPlanProps {
  planName: string;
  price: string;
  stripePriceId: string;
  userId: string; // Assuming userId is passed as a prop or obtained from context/auth state
}

export default function PricingPlan({ planName, price, stripePriceId, userId }: PricingPlanProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribeClick = async () => {
    setIsLoading(true);
    setError("");

    try {
      // 1. Call your backend API route to create the session
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: stripePriceId, userId: userId }), // Send Stripe Price ID and your user ID
      });

      const sessionData = await response.json();

      if (!response.ok || !sessionData.sessionId) {
        throw new Error(sessionData.error || "Failed to create checkout session");
      }

      // 2. Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe.js failed to load.");
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: sessionData.sessionId,
      });

      // If `redirectToCheckout` fails due to browser issues, display the error.
      if (stripeError) {
        console.error("Stripe redirect error:", stripeError);
        setError(stripeError.message || "Failed to redirect to Stripe.");
      }
      // If redirection succeeds, the user won"t see code below this point in this flow.

    } catch (err: any) {
      console.error("Subscription error:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h3>{planName}</h3>
      <p>{price}</p>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <button onClick={handleSubscribeClick} disabled={isLoading} style={{ padding: "10px 15px", backgroundColor: isLoading ? "#ccc" : "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        {isLoading ? "Processing..." : "Subscribe"}
      </button>
    </div>
  );
}

