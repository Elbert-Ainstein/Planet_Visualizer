'use client';

import dynamic from 'next/dynamic';

const StellarMap = dynamic(() => import('./components/StellarMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <StellarMap />
    </main>
  );
}
