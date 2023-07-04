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
  callbacks: {
    async signIn({ account, profile }) {
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
    async jwt({ token }) {
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
