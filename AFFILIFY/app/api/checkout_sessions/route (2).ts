// AFFILIFY/app/api/checkout_sessions/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key from environment variables
// Ensure you have STRIPE_SECRET_KEY in your .env.local
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10", // Use the latest API version
});

export async function POST(request: NextRequest) {
  try {
    const { priceId, userId } = await request.json(); // Get price ID and user ID from the request body

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
    }

    // TODO: Get user email from your database/auth system using userId
    // This is important for associating the Stripe customer with your user
    const userEmail = "user@example.com"; // Replace with actual user email lookup

    // Optional: Check if the user already exists as a Stripe customer
    // let customerId;
    // const existingCustomers = await stripe.customers.list({ email: userEmail, limit: 1 });
    // if (existingCustomers.data.length > 0) {
    //   customerId = existingCustomers.data[0].id;
    // } else {
    //   // Create a new Stripe customer
    //   const customer = await stripe.customers.create({ email: userEmail });
    //   customerId = customer.id;
    // }

    // Define the success and cancel URLs
    const successUrl = `${request.nextUrl.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${request.nextUrl.origin}/pricing`; // Or wherever you want to redirect on cancellation

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Add other methods like "paypal" if configured
      line_items: [
        {
          price: priceId, // The Price ID from your Stripe Dashboard
          quantity: 1,
        },
      ],
      mode: "subscription", // Specify "subscription" mode
      // customer: customerId, // Associate with existing or new Stripe customer
      // customer_email: userEmail, // Alternatively, prefill email (Stripe might create a customer)
      success_url: successUrl,
      cancel_url: cancelUrl,
      // Pass metadata to link the session to your internal user ID
      metadata: {
        userId: userId || "anonymous", // Include your internal user ID
      },
      // If you need to collect billing address
      // billing_address_collection: "required",
    });

    // Return the session ID or URL
    if (session.url) {
      // If using redirect, return the URL
      // return NextResponse.redirect(session.url, 303);
      // Or return the session ID for frontend handling
      return NextResponse.json({ sessionId: session.id, url: session.url });
    } else {
      throw new Error("Stripe session URL not found");
    }

  } catch (error: any) {
    console.error("Stripe session creation error:", error);
    return NextResponse.json({ error: error.message || "Failed to create Stripe session" }, { status: 500 });
  }
}

