import { testConnection } from "@/lib/supabase/queries";

export default async function TestSupabase() {
  const connectionTest = await testConnection();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Supabase Connection Test
      </h1>

      <div
        className={`p-6 rounded-lg border-2 mb-8 ${
          connectionTest.success
            ? "bg-green-50 border-green-300 text-green-800 dark:bg-green-900/20 dark:border-green-600 dark:text-green-300"
            : "bg-red-50 border-red-300 text-red-800 dark:bg-red-900/20 dark:border-red-600 dark:text-red-300"
        }`}
      >
        <h2 className="font-bold text-lg mb-3">
          {connectionTest.success
            ? "✅ Connection Successful!"
            : "❌ Connection Failed!"}
        </h2>
        <p className="text-sm">
          {connectionTest.success
            ? connectionTest.message
            : connectionTest.error}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Environment Variables Check
        </h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300 w-40">
              Supabase URL:
            </span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                process.env.NEXT_PUBLIC_SUPABASE_URL
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
              }`}
            >
              {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Missing"}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300 w-40">
              Supabase Anon Key:
            </span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
              }`}
            >
              {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
                ? "✓ Set"
                : "✗ Missing"}
            </span>
          </div>
        </div>
      </div>

      {!connectionTest.success && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">
            📋 Setup Instructions
          </h3>
          <div className="text-sm text-blue-700 dark:text-blue-400 space-y-2">
            <p>
              <strong>1. Go to Supabase Dashboard:</strong>{" "}
              <a
                href="https://supabase.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900 dark:hover:text-blue-200"
              >
                https://supabase.com/dashboard
              </a>
            </p>
            <p>
              <strong>2. Select your project</strong>
            </p>
            <p>
              <strong>3. Go to SQL Editor</strong> {">"}{" "}
              <strong>New query</strong>
            </p>
            <p>
              <strong>4. Copy and run the SQL from:</strong>{" "}
              <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">
                SETUP_SUPABASE_TABLE.sql
              </code>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
