import { Flex, Grid, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Index = () => (
  <Flex direction='column'>
    <Heading>Public page</Heading>
    <Flex>
      <Link as={NextLink} href='/auth' pr={4}>
        <a>Link to Auth page</a>
      </Link>
      <Link as={NextLink} href='/admin'>
        <a>Link to Admin page</a>
      </Link>
    </Flex>
  </Flex>
)

export default Index
