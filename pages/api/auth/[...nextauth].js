import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GIT_CLIENT,
      clientSecret: process.env.GIT_CLIENT_SECRET,
    }),
  ],
});
