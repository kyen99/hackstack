import { useSession } from 'next-auth/react'
import { createClient } from '@urql/core'
import { useMemo } from 'react'

const useClient = (options?: RequestInit) => {
  const { data: session } = useSession()
  const token = session?.token

  return useMemo(
    () =>
      createClient({
        url: process.env.NEXT_PUBLIC_API_URL || '',
        fetchOptions: () => {
          return {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
              ...(options?.headers ? options.headers : {}),
            },
          }
        },
      }),
    [options, token]
  )
}

export default useClient
