import example from '../../../src/reducers/example'

describe('[unit] test example reducer', () => {
  const initialState = ''

  it('return corect state when action is EXAMPLE_ACTION', () => {
    const payload = 'example string'
    const actual = example(initialState, { type: 'EXAMPLE_ACTION', payload })
    expect(actual).toEqual(payload)
  })

  it('return corect state when action is OTHER_ACTION', () => {
    const payload = ''
    const actual = example(initialState, { type: 'OTHER_ACTION', payload })
    expect(actual).toEqual(payload)
  })

  it('return corect initial state', () => {
    const payload = ''
    const actual = example(undefined, { type: 'OTHER_ACTION', payload })
    expect(actual).toEqual(payload)
  })
})
