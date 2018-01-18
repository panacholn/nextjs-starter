import { gql } from 'react-apollo'

const exampleMutation = gql`
  mutation exampleMutation {
    exampleMutation(id: ID) {
      exampleField
    }
  }
`

export { exampleMutation }
