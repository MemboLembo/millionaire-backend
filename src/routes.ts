import { Router } from 'express'
import { getQuestions as getQuestionsController } from 'controllers'
import { getRewards as getRewardsController } from 'controllers'

const router = Router()

/**
 * @api {get} /api/questions Get millionaire questions
 * @apiSampleRequest http://127.0.0.1:3000/api/questions
 * @apiName GetQuestions
 * @apiGroup Questions
 * @apiVersion 1.0.0
 * @apiParam {Number} limit=10 amount of questions to retreive
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Array} data
 * @apiSuccess {String} error
 * @apiSuccessExample Example data on success:
 * {
 *  success: true,
 *  data: [{
 *
 *      "question": "How many Suns do we have?",
 *      "answers": [
 *          { "label": "1", "isCorrect": true },
 *          { "label": "4", "isCorrect": false },
 *          { "label": "3", "isCorrect": false },
 *          { "label": "2", "isCorrect": false }
 *       ]
 *   },
 *   {
 *       "question": "Who is Klichko?",
 *       "answers": [
 *          { "label": "actor", "isCorrect": false },
 *          { "label": "president", "isCorrect": false },
 *          { "label": "mayor of Kyiv", "isCorrect": true },
 *          { "label": "tommorrow not everyone can look", "isCorrect": true }
 *       ]
 *   }],
 *  error: ""
 * }
 */
router.get('/questions', getQuestionsController)

/**
 * @api {get} /api/rewards Get millionaire rewards
 * @apiSampleRequest http://127.0.0.1:3000/api/rewards
 * @apiName GetRewards
 * @apiGroup Rewards
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Array} data
 * @apiSuccess {String} error
 * @apiSuccessExample Example data on success:
 * {
 *  success: true,
 *  data: [
      1000000,
      500000,
      250000,
      125000,
      64000,
      32000,
      16000,
      8000,
      4000,
      2000,
      1000,
      500
    ],
 *  error: ""
 * }
 */
router.get('/rewards', getRewardsController)

export default router
