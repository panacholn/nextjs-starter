import { example } from '../../../src/actions/example'

describe('[unit] test example action', () => {
  it('action creator returns correct action', () => {
    const payload = 'example string'
    const expected = { type: 'EXAMPLE_ACTION', payload }
    const actual = example(payload)

    expect(actual).toEqual(expected)
  })
})
