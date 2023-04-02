'use client';

import { type ClientSafeProvider, signIn } from 'next-auth/react';

export function SignInButton({ provider }: { provider: ClientSafeProvider }) {
  return (
    <button onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </button>
  );
}
