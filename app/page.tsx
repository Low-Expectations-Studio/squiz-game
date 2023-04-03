import Link from 'next/link';

import { Background } from '~/components/Background/Background';

export default function Home() {
  return (
    <main className="center flex h-full flex-col items-center justify-center gap-4">
      <Background />
      <h1 className="text-5xl text-white">Squiz Game</h1>
      <header className="text-xl text-white">
        <Link href="/">Home</Link> | <Link href="/admin">Admin</Link> |{' '}
        <Link href="/quiz">Quiz</Link>
      </header>
    </main>
  );
}
