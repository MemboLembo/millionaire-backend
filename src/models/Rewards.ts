import { prop, getModelForClass } from '@typegoose/typegoose'

class Rewards {
  @prop({ required: true })
  public rewards!: number[]
}

export const RewardsModel = getModelForClass(Rewards)
