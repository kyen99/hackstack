import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import GraphqlProvider from '../lib/GraphqlProvider'
import type { AppProps } from 'next/app'
import theme from '../theme'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <GraphqlProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </GraphqlProvider>
    </SessionProvider>
  )
}
