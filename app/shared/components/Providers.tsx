'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';

type Props = {
  children?: React.ReactNode;
  serverSession?: Session | null;
};

const queryClient = new QueryClient();

export const Providers = ({ children, serverSession }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={serverSession}>{children}</SessionProvider>
    </QueryClientProvider>
  );
};
