import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col justify-center items-center px-6">
      <Image
        src="/images/404.svg"
        alt="404 illustration"
        width={400}
        height={400}
        priority
      />
      <h2 className="text-2xl font-bold text-[#007EA7] mb-4">Page Not Found</h2>
      <Link
        href="/"
        className="px-4 py-2 bg-[#007EA7] text-white rounded hover:bg-[#00A8E8] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
