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
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-black antialiased">
        <div className="flex h-full w-full items-center justify-center p-4">
          <div className="h-full w-full rounded-lg bg-gray-50 shadow-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
