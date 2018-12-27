const assert = require('assert')
const Shariff = require('..')

describe('Shariff', () => {
  let div = null

  beforeEach(() => {
    div = document.createElement('div')
  })

  it('should construct a Shariff object', () => {
    assert.doesNotThrow(() => new Shariff(div))
  })

  describe('Defaults', () => {
    it('should use default services', () => {
      let s = new Shariff(div)
      assert.deepEqual(
        s.options.services,
        ['twitter', 'facebook', 'info']
      )
    })
  })
})
