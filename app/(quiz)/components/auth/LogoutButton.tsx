'use client';

import { signOut, useSession } from 'next-auth/react';

export const LogoutButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-3">
      <p>Hi {session?.user?.name}</p>
      <button className="mr-2" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};
