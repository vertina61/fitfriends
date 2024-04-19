import { inject, injectable } from 'inversify';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { WorkoutEntity } from './workout.entity.js';
import { CreateWorkoutDto } from './dto/create-workout.dto.js';
import { DEFAULT_WORKOUT_COUNT } from './workout.constant.js';
import { WorkoutService } from './workout-service.interface.js';
//import { BaseUserEntity } from '../user/base-user.entity.js';

@injectable()
export class DefaultWorkoutService implements WorkoutService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.WorkoutModel) private readonly workoutModel: types.ModelType<WorkoutEntity>,
    //@inject(Component.UserModel) private readonly userModel: types.ModelType<BaseUserEntity>
  ) {}

  public async create(dto: CreateWorkoutDto): Promise<DocumentType<WorkoutEntity>> {
    const result = await this.workoutModel.create(dto);
    this.logger.info(`New workout created: ${dto.title}`);

    return result;
  }

  public async findById(workoutId: string): Promise<DocumentType<WorkoutEntity> | null> {
    return this.workoutModel
    .findById(workoutId)
    .populate(['userId'])
    .exec();
  }

  public async find(): Promise<DocumentType<WorkoutEntity>[]> {
    return this.workoutModel
      .find()
      .populate('userId')
      .limit(DEFAULT_WORKOUT_COUNT)
      .exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.workoutModel
      .exists({_id: documentId})) !== null;
  }


 }
