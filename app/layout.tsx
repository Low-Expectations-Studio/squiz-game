import { Background } from '~/components/Background/Background';

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
