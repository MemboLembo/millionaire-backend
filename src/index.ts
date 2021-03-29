import path from 'path'
import express from 'express'
import config from 'config'
import morgan from 'morgan'
import log4js from 'log4js'
import mongoose from 'mongoose'
import appRoutes from 'routes'
import cors from 'cors'

log4js.configure(config.get('log4js'))
const log = log4js.getLogger('app')

;(async () => {
  try {
    const app = express()
    const mongoUri =
      process.env.MONGO_URI || (config.get('mongoose.uri') as string)
    await mongoose.connect(mongoUri)
    log.info(`Connected to mongo: ${mongoUri}`)

    app.use(morgan('common'))
    app.use(cors())
    app.use('/api', appRoutes)
    app.use('/doc', express.static(path.resolve(__dirname, '..', 'doc')))

    const port = process.env.PORT || config.get('port')
    app.listen(port, () => {
      log.info(`Server is listening on port ${port}`)
    })
  } catch (err) {
    log.error(err)
  }
})()
