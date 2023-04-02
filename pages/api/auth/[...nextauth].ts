import GoogleProvider from 'next-auth/providers/google';
import NextAuth, { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      clientId: String(process.env.AUTH_GOOGLE_ID),
      clientSecret: String(process.env.AUTH_GOOGLE_SECRET),
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (
        account &&
        account.provider === 'google' &&
        process.env.AUTH_GOOGLE_EMAIL_DOMAIN
      ) {
        return Boolean(
          profile &&
            profile.email?.endsWith(process.env.AUTH_GOOGLE_EMAIL_DOMAIN),
        );
      }

      return true;
    },
    async jwt({ token }) {
      if (
        process.env.AUTH_ADMIN_EMAILS &&
        token.email &&
        process.env.AUTH_ADMIN_EMAILS.split(',').includes(token.email)
      ) {
        token.userRole = 'admin';
      }

      return token;
    },
  },
};
export default NextAuth(authOptions);
