import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
    })],
})

export { handler as GET, handler as POST }