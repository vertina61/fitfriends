import { GenderWorkoutType } from '../../../types/gender-workout-type.enum.js';
import { TrainingType } from '../../../types/training-type.enum.js';
import { UserLevelType } from '../../../types/user-level-type.enum.js';
import { Users } from '../../../types/users.type.js';

export class CreateWorkoutDto {
  public title: string;
  public image_for_page: string;
  public user_level: UserLevelType;
  public training_type: TrainingType;
  public training_time: string;
  public price: number;
  public callories: number;
  public description: string;
  public gender: GenderWorkoutType;
  public video: string;
  public rating: number;
  public userId: string;
  public user: Users;
}
