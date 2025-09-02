import React, { useState, useEffect } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Set up error boundary
    const handleError = (error: Error) => {
      console.error("Uncaught error:", error);
      setHasError(true);
      setError(error);
    };

    // Add global error listener
    const handleGlobalError = (event: ErrorEvent) => {
      handleError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(event.reason);
    };

    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-2xl"
          role="alert"
        >
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-4">
            {" We're sorry, but something went wrong. Please try refreshing the page."}
          </p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === "development" && (
            <details className="mt-4">
              <summary className="cursor-pointer font-bold">
                Error details
              </summary>
              <pre className="mt-2 text-sm overflow-auto">
                {error && error.toString()}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
