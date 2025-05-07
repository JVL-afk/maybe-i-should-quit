// AFFILIFY/app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro"; // Helper to read the raw request body

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Get the webhook signing secret from environment variables
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// The `export const config` block for `bodyParser: false` is deprecated in Next.js App Router.
// Route Handlers now provide access to the raw request body by default when needed.

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    console.error("Stripe webhook secret is not set.");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    console.error("Missing stripe-signature header");
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Read the raw request body
    const buf = await buffer(request as any); // Cast needed for buffer
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  console.log(`Received Stripe event: ${event.type}`);
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Checkout session completed:", session.id);
      // Retrieve the userId from metadata
      const userId = session.metadata?.userId;
      if (!userId) {
        console.error("User ID missing from checkout session metadata");
        break; // Or handle appropriately
      }
      // Fulfill the purchase (e.g., grant access, update database)
      console.log(`Granting access for user: ${userId}`);
      // TODO: Implement your logic to update the user"s subscription status in your database
      // Example: await updateUserSubscription(userId, session.subscription);
      break;
    }
    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("Invoice payment succeeded:", invoice.id);
      // Handle recurring payment success (e.g., ensure continued access)
      const subscriptionId = invoice.subscription;
      const customerId = invoice.customer;
      // TODO: Find user by customerId or subscriptionId and update status if needed
      // Example: await ensureUserAccess(customerId, subscriptionId);
      break;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.error("Invoice payment failed:", invoice.id);
      // Handle failed payment (e.g., notify user, restrict access)
      const subscriptionId = invoice.subscription;
      const customerId = invoice.customer;
      // TODO: Find user and update status, potty notify them
      // Example: await handleFailedPayment(customerId, subscriptionId);
      break;
    }
    case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription deleted (cancelled):", subscription.id);
        // Handle subscription cancellation (e.g., revoke access at period end)
        // TODO: Update user status in your database
        break;
    }
    // ... handle other event types as needed (e.g., subscription updated)
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json({ received: true });
}

