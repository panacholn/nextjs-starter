import { gql } from 'react-apollo'

const exampleQuery = gql`
  query exampleQuery {
    exampleType {
      exampleField
    }
  }
`

export { exampleQuery }
