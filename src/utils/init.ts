import log4js from 'log4js'
import config from 'config'
import mongoose from 'mongoose'
import questions from './questions.json'
import rewards from './rewards.json'
import { QuestionModel } from '../models/Question'
import { RewardsModel } from '../models/Rewards'

log4js.configure(config.get('log4js'))
const log = log4js.getLogger('app')

;(async () => {
  try {
    await mongoose.connect(
      config.get('mongoose.uri'),
      config.get('mongoose.options')
    )
    await QuestionModel.deleteMany()
    await QuestionModel.insertMany(questions as any)

    await RewardsModel.deleteMany()
    await RewardsModel.create({ rewards })

    log.info('Successfully initialized database')
  } catch (err) {
    log.error(`Error while init database, ${err}`)
  } finally {
    await mongoose.disconnect()
  }
})()
