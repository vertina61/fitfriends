import { Container } from 'inversify';
import { WorkoutService } from './workout-service.interface.js';
import { Component } from '../../types/index.js';
import { DefaultWorkoutService } from './default-workout.service.js';
import { WorkoutEntity, WorkoutModel } from './workout.entity.js';
import { types } from '@typegoose/typegoose';

export function createWorkoutContainer() {
  const workoutContainer = new Container();

  workoutContainer.bind<WorkoutService>(Component.WorkoutService).to(DefaultWorkoutService);
  workoutContainer.bind<types.ModelType<WorkoutEntity>>(Component.WorkoutModel).toConstantValue(WorkoutModel);

  return workoutContainer;
}
