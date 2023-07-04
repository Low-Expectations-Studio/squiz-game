import { getServerSession } from 'next-auth';

import '../globals.css';

export const metadata = {
  title: 'Squiz Game - Admin',
  description: 'Best Quiz game ever',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverSession = await getServerSession();

  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-black antialiased">
          <pre>{JSON.stringify(serverSession)}</pre>
          {children}
        </div>
      </body>
    </html>
  );
}
