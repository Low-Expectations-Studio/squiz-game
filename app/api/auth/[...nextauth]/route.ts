import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { cert } from 'firebase-admin/app';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

import { env } from '~/env.mjs';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
      clientEmail: env.NEXT_PUBLIC_FIRESTORE_CLIENT_EMAIL,
      privateKey: env.NEXT_PUBLIC_FIRESTORE_CLIENT_PRIVATE_KEY,
    }),
  }),
  callbacks: {
    signIn({ account, profile }) {
      if (account && account.provider === 'google') {
        return Boolean(
          profile?.email &&
            env.AUTH_GOOGLE_AUTHORIZED_DOMAINS.includes(
              profile.email.split('@')[1],
            ),
        );
      }

      return true;
    },
    jwt({ token }) {
      return {
        ...token,
        role:
          token.email && env.AUTH_ADMIN_EMAILS.includes(token.email)
            ? 'admin'
            : '',
      };
    },
    session({ token, session }) {
      return {
        ...session,
        role:
          token.email && env.AUTH_ADMIN_EMAILS.includes(token.email)
            ? 'admin'
            : '',
      };
    },
  },
});

export { handler as GET, handler as POST };
