import { useSession, signIn, signOut } from 'next-auth/react'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { useQuery } from 'urql'
import Link from 'next/link'

const QUERY = `
  query {
    accounts {
      provider
      expires_at
    }
    users {
      id
      name
      email
    }
  }
`

const Auth = () => {
  const { data: session } = useSession()
  const [result, _reexecuteQuery] = useQuery({
    query: QUERY,
  })

  const { data } = result

  return (
    <Flex direction='column'>
      <Heading>Auth Page</Heading>
      <Link href='/'>
        <a>Link to Public Page</a>
      </Link>
      <Flex direction='column'>
        {session ? (
          <>
            Signed in as {session.user?.email} <br />
            <Button colorScheme='red' w='100px' onClick={() => signOut()}>
              Sign out
            </Button>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        ) : (
          <>
            Not signed in <br />
            <Button colorScheme='blue' w='100px' onClick={() => signIn()}>
              Sign in
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Auth
