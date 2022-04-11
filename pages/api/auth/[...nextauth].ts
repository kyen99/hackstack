import NextAuth from 'next-auth'
import { JWTEncodeParams, JWTDecodeParams } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'
import { HasuraAdapter } from '@skillrecordings/next-auth-hasura-adapter'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'none',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'none',
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.HASURA_GRAPHQL_ENDPOINT || '',
    adminSecret: process.env.HASURA_ADMIN_SECRET || '',
  }),
  session: { strategy: 'jwt' },
  jwt: {
    encode: async ({ secret, token }: JWTEncodeParams) => {
      const jwtClaims = {
        sub: token?.sub,
        name: token?.name,
        email: token?.email,
        state: token?.state,
        picture: token?.picture,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token?.sub,
        },
      }
      return jwt.sign(jwtClaims, secret, { algorithm: 'HS256' })
    },
    // @ts-ignore
    decode: async ({ secret, token }: JWTDecodeParams) =>
      jwt.verify(token || '', secret, { algorithms: ['HS256'] }),
  },
  callbacks: {
    async session({ session, token }) {
      const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || '', {
        algorithm: 'HS256',
      })
      session.id = token.id
      session.token = encodedToken
      return session
    },
  },
})
