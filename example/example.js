/* yarn example/ */
import appshotIo from '../src'

(async () => {
  const res = await appshotIo({
    text: 'example',
  })
  console.log(res)
})()