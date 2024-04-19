import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { BaseController, HttpMethod, PrivateRouteMiddleware,ValidateDtoMiddleware } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/index.js';
import { WorkoutService } from './workout-service.interface.js';
import { fillDTO } from '../../helpers/index.js';

import { CreateWorkoutRequest } from './type/create-workout-request.type.js';

import { CreateWorkoutDto } from './dto/create-workout.dto.js';
import { DetailWorkoutRdo } from './index.js';


@injectable()
export class WorkoutController extends BaseController {
  constructor(
    @inject(Component.Logger) protected logger: Logger,
    @inject(Component.WorkoutService) private readonly workoutService: WorkoutService,
  ) {
    super(logger);

    this.logger.info('Register routes for WorkoutController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });

    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create, middlewares: [
      new PrivateRouteMiddleware(),
      new ValidateDtoMiddleware(CreateWorkoutDto)] });

 }

  public async index(_req: Request, res: Response) {
    const workouts = await this.workoutService.find();
    this.ok(res, fillDTO(DetailWorkoutRdo, workouts));
  }

  public async create({ body, tokenPayload }: CreateWorkoutRequest, res: Response): Promise<void> {
    const result = await this.workoutService.create({...body, userId: tokenPayload.id});
    const workout = await this.workoutService.findById(result.id);
    this.created(res, fillDTO(DetailWorkoutRdo, workout));
  }


}
