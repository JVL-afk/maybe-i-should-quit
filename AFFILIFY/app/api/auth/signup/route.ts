"use server";

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for users (for demonstration purposes only - use a database in production)
const users: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ message: 'Missing email, name, or password' }, { status: 400 });
    }

    // Check if user already exists
    if (users.find(user => user.email === email)) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Create new user (in a real app, hash the password)
    const newUser = { id: Date.now().toString(), email, password, name, plan: 'free' }; // Default to free plan
    users.push(newUser);

    // Placeholder for sending confirmation email
    console.log(`Placeholder: Sending confirmation email to ${email}`);
    // In a real app, you would integrate an email service here (e.g., SendGrid, Mailgun)
    // await sendConfirmationEmail(email, verificationToken);

    // Respond with success and a message to check email (even though it's a placeholder)
    // The actual redirect to login/dashboard will be handled by the frontend after this response.
    return NextResponse.json({ 
      message: 'Signup successful! Please check your email for a confirmation link (placeholder). You will be redirected to login.', 
      user: { email: newUser.email, name: newUser.name } 
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal server error during signup' }, { status: 500 });
  }
}

