'use client';

import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';

type Props = {
  children?: React.ReactNode;
  serverSession?: Session | null;
};

export const AuthProvider = ({ children, serverSession }: Props) => {
  return <SessionProvider session={serverSession}>{children}</SessionProvider>;
};
