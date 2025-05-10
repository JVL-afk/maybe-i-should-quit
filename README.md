# AFFILIFY - Chatbot Version

This folder contains the updated AFFILIFY Next.js application, now featuring an integrated chatbot for website analysis and creation, along with a revamped dashboard and updated authentication flows.

## Overview of Changes and New Features

1.  **New Dashboard Structure:**
    *   A dedicated dashboard accessible after login (`/dashboard`).
    *   Sidebar navigation for accessing different sections: Dashboard Home, My Websites, My Analyses.
    *   Main dashboard page with quick actions: "CREATE A NEW WEBSITE" and "ANALYZE A WEBSITE".

2.  **Chatbot Integration:**
    *   **Reusable Chat Interface:** A core `ChatInterface.tsx` component for consistent chat interactions.
    *   **Analyze a Website (`/dashboard/analyze`):** Users can input a URL to get a (placeholder) analysis.
    *   **Create a New Website (`/dashboard/create-website`):** Users can describe a website or provide an affiliate link to initiate (placeholder) website creation. This flow includes steps for template selection and optional credential input (all placeholder logic for now).
    *   **Create from Analysis (`/dashboard/create-from-analysis`):** A page to start website creation based on (placeholder) data from a previous analysis.

3.  **Authentication Flow Updates:**
    *   **Signup (`/signup`):** Includes placeholder for email confirmation (logged to console). Redirects to login upon success.
    *   **Login (`/login`):** Redirects to `/dashboard` upon successful authentication.
    *   **Forgot Password (`/forgot-password`):** Initiates a password reset process. A (placeholder) reset token is logged to the console.
    *   **Reset Password (`/reset-password`):** Users can enter the reset token (from console/URL) and set a new password. Placeholder backend logic handles this.

4.  **Placeholder Pages:**
    *   `My Websites` (`/dashboard/my-websites`): Placeholder page to list user-created websites.
    *   `My Analyses` (`/dashboard/my-analyses`): Placeholder page to list user-performed analyses.

5.  **Styling:**
    *   The application generally follows a dark theme with orange and purple accents as discussed.

## Directory Structure Highlights

*   `affilify-chatbot-version/`
    *   `app/`
        *   `(auth)/`
            *   `forgot-password/page.tsx`
            *   `login/page.tsx`
            *   `reset-password/page.tsx`
            *   `signup/page.tsx`
        *   `api/auth/` (Backend API routes for authentication)
            *   `forgot-password/route.ts`
            *   `login/route.ts`
            *   `reset-password/route.ts`
            *   `signup/route.ts`
        *   `dashboard/`
            *   `analyze/page.tsx` (Chatbot for analysis)
            *   `create-from-analysis/page.tsx` (Chatbot for creation from analysis)
            *   `create-website/page.tsx` (Chatbot for direct creation)
            *   `my-analyses/page.tsx` (Placeholder)
            *   `my-websites/page.tsx` (Placeholder)
            *   `layout.tsx` (Dashboard specific layout with sidebar)
            *   `page.tsx` (Main dashboard page)
        *   `page.tsx` (Main marketing homepage - *Note: This was from the previous version, ensure it aligns with your overall site structure or update as needed*)
        *   `pricing/page.tsx` (*Note: This was from the previous version, API key feature confirmed removed*)
        *   `layout.tsx` (Root layout - *Ensure this is correctly set up for the whole application*)
    *   `components/`
        *   `ChatInterface.tsx` (Reusable UI for chatbot)
        *   `DashboardSidebar.tsx` (Sidebar navigation for the dashboard)
        *   `PricingPlan.tsx` (*From previous Stripe integration work*)
    *   `public/` (Static assets - *Ensure any images like hero images are correctly placed here*)
    *   `chatbot_ui_design.md` (Design document for the chatbot UI)
    *   Other configuration files (`package.json`, `tailwind.config.js`, `next.config.js`, `tsconfig.json` etc. - *These would need to be set up for a Next.js project*)

## Important Notes & Next Steps for Production

*   **Placeholder Logic:** The core AI functionalities for website analysis and generation, as well as backend processes like sending actual emails and managing user data persistently, are currently **placeholders**. These will need to be implemented with real AI services, email providers (e.g., SendGrid, Mailgun), and a proper database (e.g., PostgreSQL, MongoDB) for a production application.
*   **In-Memory Storage:** The current authentication system uses a simple in-memory array to store users and reset tokens. This is for demonstration only and will not persist data between server restarts or across multiple server instances. **A database is essential for production.**
*   **Security:** Passwords are not currently hashed. In a production environment, always hash passwords securely (e.g., using bcrypt or Argon2).
*   **Environment Variables:** For API keys (Stripe, email services, AI services), ensure these are managed via environment variables and **never hardcoded**.
*   **Error Handling & Validation:** While basic error handling is present, robust validation and more comprehensive error management should be implemented throughout the application.
*   **Styling & UI Refinements:** The current styling is foundational. Further refinements and testing across different devices and browsers are recommended.
*   **Dependencies:** You will need to have Node.js and npm/yarn installed. Run `npm install` (or `yarn install`) in the `affilify-chatbot-version` directory to install project dependencies (assuming a `package.json` is correctly set up).
*   **Running the Development Server:** Typically, `npm run dev` (or `yarn dev`) will start the Next.js development server.

## How to Use

1.  **Setup:**
    *   Ensure you have Node.js installed.
    *   Navigate to the `affilify-chatbot-version` directory in your terminal.
    *   Run `npm install` (or your package manager's install command) to install dependencies.
    *   (If not already present, you might need to initialize a `package.json` with `npm init -y` and install Next.js, React, TailwindCSS etc: `npm install next react react-dom tailwindcss postcss autoprefixer`)
2.  **Run:**
    *   Start the development server: `npm run dev`.
    *   Open your browser and navigate to `http://localhost:3000` (or the port specified by Next.js).
3.  **Explore:**
    *   Try the signup, login, and forgot password flows.
    *   Navigate to the dashboard after logging in.
    *   Interact with the "Analyze a Website" and "Create a New Website" chatbot features.

This version provides a strong foundation for the AFFILIFY platform with its core chatbot and dashboard structure. The next major phase would involve integrating the actual AI and backend services to bring the placeholder functionalities to life.

