// In-memory store (shared with signup route - this is fragile in stateless environments, use a DB!)
let users = {}; // This will be empty unless signup is called in the same process instance

// Basic password hashing simulation (replace with bcrypt in production)
const simpleHash = (password) => {
  return `hashed_${password}`;
};

// Helper to repopulate users if the process restarts (for demo only)
const ensureUsersPopulated = () => {
  // In a real app, you'd fetch from a DB. Here we just log if it's empty.
  if (Object.keys(users).length === 0) {
    console.warn("User store is empty. Sign up first or ensure persistence.");
  }
};

export async function POST(request: Request) {
  ensureUsersPopulated(); // Check if users exist (for demo)
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required' }), { status: 400 });
    }

    const user = users[email];
    const providedPasswordHash = simpleHash(password);

    if (!user || user.passwordHash !== providedPasswordHash) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 }); // Unauthorized
    }

    console.log('User logged in:', email);

    // In a real app, you would generate and return a session token (e.g., JWT)
    // For this demo, we just return success
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}

