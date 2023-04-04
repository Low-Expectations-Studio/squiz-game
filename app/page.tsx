import Link from 'next/link';

import { Background } from '~/components/Background/Background';

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <Background />
      <main className="flex flex-col items-center justify-center gap-4 rounded-md bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-5xl text-white">Squiz Game</h1>
        <header className="text-xl text-white">
          <Link href="/">Home</Link> | <Link href="/admin">Admin</Link> |{' '}
          <Link href="/quiz">Quiz</Link>
        </header>
      </main>
    </div>
  );
}
