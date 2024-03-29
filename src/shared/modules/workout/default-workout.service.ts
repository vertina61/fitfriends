import { inject, injectable } from 'inversify';
import { Component } from '../../types/index.js';
import { SortType } from '../../types/sort-type.enum.js';
import { Logger } from '../../libs/logger/index.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { WorkoutEntity } from './workout.entity.js';
import { CreateWorkoutDto } from './dto/create-workout.dto.js';
import { DEFAULT_WORKOUT_COUNT } from './workout.constant.js';
import { WorkoutService } from './workout-service.interface.js';

@injectable()
export class DefaultWorkoutService implements WorkoutService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.WorkoutModel) private readonly workoutModel: types.ModelType<WorkoutEntity>
  ) {}

  public async create(dto: CreateWorkoutDto): Promise<DocumentType<WorkoutEntity>> {
    const result = await this.workoutModel.create(dto);
    this.logger.info(`New workout created: ${dto.title}`);

    return result;
  }

  public async findById(workoutId: string): Promise<DocumentType<WorkoutEntity> | null> {
    return this.workoutModel.findById(workoutId).exec();
  }

  public async find(): Promise<DocumentType<WorkoutEntity>[]> {
    return this.workoutModel
      .find()
      .populate('userId')
      .limit(DEFAULT_WORKOUT_COUNT)
      .sort({ createdAt: SortType.Down })
      .exec();
  }

    public async deleteById(workoutId: string): Promise<DocumentType<WorkoutEntity> | null> {
    return this.workoutModel
      .findByIdAndDelete(workoutId)
      .exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.workoutModel
      .exists({_id: documentId})) !== null;
  }


  public async getDetailedWorkout(workoutId: string, userId?: string): Promise<DocumentType<WorkoutEntity> | null> {
    let result = await this.workoutModel.aggregate<DocumentType<WorkoutEntity>>([
      { $match: { $expr: { $eq: [workoutId, { $toString: '$_id'}] } } },
      {
        $lookup: {
          from: 'users',
          pipeline: [
            { $match: { $expr: { $eq: [userId, { $toString: '$_id'}] } } },
            { $project: {_id: false}}
          ],
          as: 'user'
        }
      },
      { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
      { $unset: 'user' },
    ]).exec();
    result = await this.workoutModel.populate(result, {path: 'userId'});
    const workout = result[0];
    return workout;
  }

}
