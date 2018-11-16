import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import appshotIo from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof appshotIo, 'function')
  },
  async 'calls package without error'() {
    await appshotIo()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await appshotIo({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T