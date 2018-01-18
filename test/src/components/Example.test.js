import { shallow } from 'enzyme'
import Example from '../../../src/components/Example'

describe('[unit] test Example component', () => {
  it('contain one <h1>', () => {
    const wrapper = shallow(<Example />)
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
