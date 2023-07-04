'use client';

import { signIn } from 'next-auth/react';

export const LoginButton = () => {
  return (
    <button className="mr-2" onClick={() => signIn()}>
      Sign in
    </button>
  );
};
