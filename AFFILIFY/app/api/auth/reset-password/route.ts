"use server";

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for users and reset tokens (for demonstration purposes only)
// These should be consistent with other auth routes or use a shared DB.
const users: any[] = []; 
const resetTokens: { email: string, token: string, expires: number }[] = []; // Populated by forgot-password route

export async function POST(req: NextRequest) {
  try {
    const { email, token, newPassword } = await req.json();

    if (!email || !token || !newPassword) {
      return NextResponse.json({ message: 'Email, token, and new password are required' }, { status: 400 });
    }

    // Find and validate the reset token
    const tokenIndex = resetTokens.findIndex(rt => rt.email === email && rt.token === token && rt.expires > Date.now());

    if (tokenIndex === -1) {
      return NextResponse.json({ message: 'Invalid or expired reset token. Please try again.' }, { status: 400 });
    }

    // Find the user (in a real app, query your database)
    const user = users.find(u => u.email === email);
    if (!user) {
      // This case should ideally not be hit if token was valid and linked to an email
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    // Update user's password (in a real app, hash the newPassword before saving)
    user.password = newPassword;

    // Remove the used token
    resetTokens.splice(tokenIndex, 1);

    console.log(`Placeholder: Password for ${email} has been reset.`);

    return NextResponse.json({ message: 'Password has been reset successfully! You can now login with your new password.' }, { status: 200 });

  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

