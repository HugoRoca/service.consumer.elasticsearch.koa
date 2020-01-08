/* eslint-disable no-console */
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import docs from './utils/api.docs'
import config from './config'

const server = new Koa()

server.use(bodyParser()).use(docs)

server.listen(config.port, () => {
  console.log(`Server is up and running on port number ${config.port}`)
})
