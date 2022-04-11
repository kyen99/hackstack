import useClient from './useClient'
import { Provider } from 'urql'

interface GraphqlProviderProps {}
// @ts-ignore
const GraphqlProvider: React.FC<GraphqlProviderProps> = ({ children }) => {
  const client = useClient()

  return <Provider value={client}>{children}</Provider>
}

export default GraphqlProvider
