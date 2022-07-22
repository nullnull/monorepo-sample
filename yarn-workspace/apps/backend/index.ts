import express from 'express'
import { functionA } from '@monorepo-sample/a'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const x = functionA()
  res.send(`Hello World! ${x}`)
})

app.listen(port, () => {
  functionA()
  console.log(`Example app listening on port ${port}`)
})
