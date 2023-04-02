import Link from 'next/link';

import AuthContext from '~/app/components/AuthContext';
import { getSession } from '~/app/lib/data';

import './globals.css';

export const metadata = {
  title: 'Squiz Game',
  description: 'Best Quiz game ever',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-black antialiased">
          <header>
            <Link href="/">Home</Link> | <Link href="/admin">Admin</Link> |{' '}
            <Link href="/quiz">Quiz</Link>
          </header>
          <AuthContext session={session}>{children}</AuthContext>
        </div>
      </body>
    </html>
  );
}
