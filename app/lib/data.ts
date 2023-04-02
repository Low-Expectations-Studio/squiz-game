import 'server-only';
import { type Session } from 'next-auth';
import { headers } from 'next/headers';

export async function getSession(): Promise<Session> {
  const response = await fetch(
    `${process.env.AUTH_LOCAL_URL}/api/auth/session`,
    {
      headers: {
        cookie: headers().get('cookie') ?? '',
      },
    },
  );

  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
}
