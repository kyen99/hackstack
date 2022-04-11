import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

const Index = () => (
  <Flex direction='column'>
    <Heading>Public page</Heading>
    <Flex>
      <Link href='/auth'>
        <a>Link to Auth page</a>
      </Link>
    </Flex>
  </Flex>
)

export default Index
