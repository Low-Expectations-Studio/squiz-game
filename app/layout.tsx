import Link from 'next/link';

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
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-black antialiased">
          <header>
            <Link href="/">Home</Link> | <Link href="/admin">Admin</Link> |{' '}
            <Link href="/quiz">Quiz</Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
