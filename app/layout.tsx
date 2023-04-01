import Link from 'next/link';

import './globals.css';
import { Background } from '~/components/Background/Background';

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
      {/* TODO REMOVE */}
      <script src="https://cdn.tailwindcss.com"></script>
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
