import { ApolloClient, InMemoryCache } from '@apollo/client'
import React, { useState, useEffect, useMemo } from 'react'
import { Admin, Resource, DataProvider } from 'react-admin'
import buildHasuraProvider from 'ra-data-hasura'
import authProvider from '../lib/adminAuthProvider'
import { useSession } from 'next-auth/react'

import { UserEdit, UserList } from '../components/admin/user'
import { AccountList } from '../components/admin/account'

const AdminPage = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  )
  const { data: session } = useSession()
  const token = session?.token

  const clientWithAuth = useMemo(
    () =>
      new ApolloClient({
        uri: 'http://localhost:8080/v1/graphql',
        cache: new InMemoryCache(),
        headers: {
          // Authorization: `Bearer ${token}`,
          'x-hasura-admin-secret': '28482b18bfede7c19c149ea8e0691836',
        },
      }),
    []
  )

  useEffect(() => {
    if (!token) return
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        client: clientWithAuth,
      })
      setDataProvider(() => dp)
    }
    buildDataProvider()
  }, [token, clientWithAuth])

  if (!dataProvider) return <p>Loading...</p>

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name='users' list={UserList} edit={UserEdit} />
      <Resource name='accounts' list={AccountList} />
    </Admin>
  )
}

export default AdminPage
