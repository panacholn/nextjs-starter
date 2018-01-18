import { shallow } from 'enzyme'
import { Index } from '../../pages/index'

describe('[unit] index pages', () => {
  it('contain one <h1>', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
