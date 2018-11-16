import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import appshotIo from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await appshotIo({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts