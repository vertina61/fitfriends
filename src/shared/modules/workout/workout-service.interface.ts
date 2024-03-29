import { CreateWorkoutDto } from './index.js';
import { DocumentType } from '@typegoose/typegoose';
import { WorkoutEntity } from './workout.entity.js';
import { DocumentExists } from '../../types/index.js';

export interface WorkoutService extends DocumentExists {
  create(dto: CreateWorkoutDto): Promise<DocumentType<WorkoutEntity>>;
  findById(workoutId: string, userId?: string): Promise<DocumentType<WorkoutEntity> | null>;
  find(): Promise<DocumentType<WorkoutEntity>[]>;
  deleteById(workoutId: string): Promise<DocumentType<WorkoutEntity> | null>;
  exists(documentId: string): Promise<boolean>;
  getDetailedWorkout(workoutId: string, userId?: string): Promise<DocumentType<WorkoutEntity> | null>;
}
