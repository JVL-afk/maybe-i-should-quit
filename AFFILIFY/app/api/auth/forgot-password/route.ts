"use server";

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for users and reset tokens (for demonstration purposes only)
const users: any[] = []; // Should be shared with signup/login or use a DB
const resetTokens: { email: string, token: string, expires: number }[] = [];

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // In a real app, check if user exists in the database
    // const user = await db.users.findUnique({ where: { email } });
    // if (!user) {
    //   // Still return a generic message to prevent email enumeration
    //   return NextResponse.json({ message: 'If an account with that email exists, a password reset link has been sent.' }, { status: 200 });
    // }

    // Generate a pseudo-random token (in real app, use crypto.randomBytes)
    const token = Math.random().toString(36).substring(2, 10);
    const expires = Date.now() + 3600000; // Token expires in 1 hour

    // Store the token (in a real app, store in DB associated with user)
    resetTokens.push({ email, token, expires });

    // Placeholder for sending email with the token
    console.log(`Placeholder: Sending password reset email to ${email} with token: ${token}. Link: /reset-password?token=${token}&email=${encodeURIComponent(email)}`);
    // In a real app, use an email service: await sendPasswordResetEmail(email, token);

    return NextResponse.json({ message: 'If an account with that email exists, a password reset link (token in console for demo) has been sent.' }, { status: 200 });

  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

