// In-memory store for demo purposes. Replace with a database in production.
let users = {};

// Basic password hashing simulation (replace with bcrypt in production)
const simpleHash = (password) => {
  return `hashed_${password}`;
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required' }), { status: 400 });
    }

    if (users[email]) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 }); // Conflict
    }

    // Store the new user (with simulated hashed password)
    users[email] = { passwordHash: simpleHash(password) };

    console.log('User signed up:', email);
    console.log('Current users:', users); // Log users for debugging

    // In a real app, you might generate a session token here
    return new Response(JSON.stringify({ message: 'Signup successful' }), { status: 201 }); // Created

  } catch (error) {
    console.error('Signup error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}

