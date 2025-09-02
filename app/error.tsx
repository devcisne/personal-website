'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col justify-center items-center px-6">
      <h2 className="text-2xl font-bold text-[#007EA7] mb-4">Something went wrong!</h2>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-[#007EA7] text-white rounded hover:bg-[#00A8E8] transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
