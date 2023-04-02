import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }

      return !!token;
    },
  },
});

export const config = { matcher: ['/admin', '/quiz'] };
