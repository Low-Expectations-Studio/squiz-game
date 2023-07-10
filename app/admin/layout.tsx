import { getServerSession } from 'next-auth';

import { AuthProvider } from '~/shared/components/auth/AuthProvider';

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
      <body className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-black antialiased">
        <AuthProvider serverSession={serverSession}>
          <div className="flex h-full w-full items-center justify-center p-4">
            <div className="h-full w-full rounded-lg bg-gray-50 shadow-xl">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
