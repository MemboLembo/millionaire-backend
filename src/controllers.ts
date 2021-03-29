import { Response, Request } from 'express'
import log4js from 'log4js'
import { getQuestions as getQuestionsService } from 'services'
import { getRewards as getRewardsService } from 'services'

const log = log4js.getLogger('app')

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

export const getQuestions = async (req: Request, res: Response) => {
  interface GetQuestionsResponse {
    success: boolean
    data: ThenArg<ReturnType<typeof getQuestionsService>>
    error: string
  }
  const response: GetQuestionsResponse = {
    success: false,
    data: [],
    error: '',
  }

  try {
    let { limit = 10 } = req.params
    limit = +limit

    response.data = await getQuestionsService(limit)
    response.success = true
    return res.status(200).json(response)
  } catch (err) {
    log.error(err)
    response.error = 'Something went wrong'
    return res.status(500).json(response)
  }
}

export const getRewards = async (_: Request, res: Response) => {
  interface GetRewardsResponse {
    success: boolean
    data: number[]
    error: string
  }
  const response: GetRewardsResponse = {
    success: false,
    data: [],
    error: '',
  }

  try {
    const rewards = await getRewardsService()
    if (!rewards) {
      response.error = 'No rewards found'
      return res.status(404).json(response)
    }
    response.data = rewards.rewards.sort((a, b) => a - b)
    response.success = true
    return res.status(200).json(response)
  } catch (err) {
    log.error(err)
    response.error = 'Something went wrong'
    return res.status(500).json(response)
  }
}
