import { QuestionModel } from 'models/Question'
import { RewardsModel } from 'models/Rewards'

export const getQuestions = async (limit = 10) =>
  QuestionModel.aggregate([{ $sample: { size: limit } }])

export const getRewards = async () => RewardsModel.findOne()
