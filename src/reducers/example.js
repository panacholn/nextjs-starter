import { EXAMPLE_ACTION } from '../constants/actionTypes'

const example = (state = '', { type, payload }) => {
  switch (type) {
    case EXAMPLE_ACTION:
      return payload
    default:
      return state
  }
}

export default example
