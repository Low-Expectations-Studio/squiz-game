import { getServerSession } from 'next-auth';

import { LoginButton } from '~/(quiz)/components/auth/LoginButton';
import { LogoutButton } from '~/(quiz)/components/auth/LogoutButton';
import { Providers } from '~/shared/components/Providers';

import '../globals.css';

export const metadata = {
  title: 'Squiz Game',
  description: 'Best Quiz game ever',
};

export default async function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverSession = await getServerSession();

  return (
    <html lang="en">
      <body>
        <Providers serverSession={serverSession}>
          <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-black antialiased">
            <header className="flex justify-end">
              {serverSession ? <LogoutButton /> : <LoginButton />}
            </header>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
