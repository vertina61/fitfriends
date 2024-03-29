import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { BaseUserEntity } from '../user/index.js';
import { UserLevelType } from '../../types/user-level-type.enum.js';
import { TrainingType } from '../../types/training-type.enum.js';
import { GenderWorkoutType } from '../../types/gender-workout-type.enum.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface WorkoutEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'workouts'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class WorkoutEntity extends defaultClasses.TimeStamps {

  @prop({ trim: true, required: true })
  public title!: string;

  @prop()
  public  image_for_page!: string;

  @prop({
    user_level: () => String,
    enum: UserLevelType
  })
  public user_level!: UserLevelType;

  @prop({
    training_type: () => String,
    enum: TrainingType
  })
  public training_type!: TrainingType;

  @prop()
  public training_time!: string;

  @prop()
  public price!: number;

  @prop()
  public callories!: number;

  @prop({trim: true})
  public description!: string;

  @prop({
    gender: () => String,
    enum: GenderWorkoutType
  })
  public gender!: GenderWorkoutType;

  @prop()
  public video!: string;

  @prop()
  public rating!: number;

  @prop({
    ref: BaseUserEntity,
    required: true
  })
  public userId!: Ref<BaseUserEntity>;
}

export const WorkoutModel = getModelForClass(WorkoutEntity);
