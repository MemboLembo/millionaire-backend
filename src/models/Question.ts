import { prop, getModelForClass } from '@typegoose/typegoose'

export interface Answer {
  label: string
  isCorrect: boolean
}

export type Answers = Answer[]

class Question {
  @prop({ required: true })
  public question!: string

  @prop({ required: true })
  public answers!: Answers
}

export const QuestionModel = getModelForClass(Question)
