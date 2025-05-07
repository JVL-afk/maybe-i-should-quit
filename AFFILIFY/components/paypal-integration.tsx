'use client';

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

interface PayPalIntegrationProps {
  plan: string;
  price: string;
}

const PayPalIntegration: React.FC<PayPalIntegrationProps> = ({ plan, price }) => {
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!paypalClientId) {
    console.error("PayPal Client ID is not set in environment variables. Please set NEXT_PUBLIC_PAYPAL_CLIENT_ID.");
    return <p className="text-red-500">PayPal integration is currently unavailable. Configuration missing.</p>;
  }

  const createOrder = (data: any, actions: any) => {
    console.log("Creating PayPal order for plan:", plan, "price:", price);
    return actions.order.create({
      purchase_units: [
        {
          description: `Affilify Subscription - ${plan} Plan`,
          amount: {
            currency_code: "USD", // Assuming USD, make dynamic if necessary
            value: price,
          },
        },
      ],
      intent: "CAPTURE", // Added based on previous context to avoid runtime errors
    });
  };

  const onApprove = async (data: any, actions: any) => {
    console.log("PayPal order approved:", data);
    try {
      const details = await actions.order.capture();
      console.log("Payment successful:", details);
      // TODO: Replace alert with actual post-payment logic
      // For example, call your backend to update subscription, redirect to a success page, etc.
      alert(`Payment successful for ${plan} plan! Transaction ID: ${details.id}`);
    } catch (error) {
      console.error("Error capturing PayPal payment:", error);
      alert("An error occurred during payment capture. Please try again or contact support.");
    }
  };

  const onError = (err: any) => {
    console.error("PayPal Checkout onError", err);
    alert("An error occurred with the PayPal payment process. Please try again or contact support.");
  };

  const onCancel = (data: any) => {
    console.log("PayPal Checkout onCancel", data);
    alert("Payment was cancelled.");
  };

  return (
    <PayPalScriptProvider options={{ "client-id": paypalClientId, currency: "USD" }}>
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        onCancel={onCancel}
        key={plan + price} // Add a key to re-render if plan/price changes
      />
    </PayPalScriptProvider>
  );
};

export default PayPalIntegration;

