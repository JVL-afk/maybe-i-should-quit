"use server";

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for users (for demonstration purposes only - use a database in production)
// This should be consistent with the one in signup/route.ts
// For a real app, this would be a shared database instance.
const users: any[] = []; // This will be empty unless signup is called in the same runtime instance.
                         // This highlights the limitation of in-memory stores for multi-request flows.

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing email or password' }, { status: 400 });
    }

    // Find user (this relies on the users array being populated by signup in the same session, which is not robust)
    // In a real app, you would query your database here.
    const user = users.find(u => u.email === email && u.password === password); // In a real app, compare hashed passwords

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials or user not found. Please ensure you have signed up and confirmed your email (placeholder).' }, { status: 401 });
    }

    // Placeholder: In a real app, you would create a session token (e.g., JWT)
    // and return it to the client to be stored (e.g., in an HttpOnly cookie).
    // For this demo, we'll just confirm login and the frontend will handle redirect.

    return NextResponse.json({ 
      message: 'Login successful! Redirecting to dashboard...', 
      user: { email: user.email, name: user.name, id: user.id, plan: user.plan }, // Send some user data back
      redirectTo: 
'/dashboard'
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error during login' }, { status: 500 });
  }
}

