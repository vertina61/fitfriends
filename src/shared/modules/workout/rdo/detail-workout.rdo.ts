import { Expose } from 'class-transformer';
import { GenderWorkoutType } from '../../../types/gender-workout-type.enum.js';
import { TrainingType } from '../../../types/training-type.enum.js';
import { UserLevelType } from '../../../types/user-level-type.enum.js';
import { Users } from '../../../types/users.type.js';


export class DetailWorkoutRdo {

  @Expose()
  public title: string;

  @Expose()
  public image_for_page: string;

  @Expose()
  public user_level: UserLevelType;

  @Expose()
  public training_type: TrainingType;

  @Expose()
  public training_time: string;

  @Expose()
  public price: number;

  @Expose()
  public callories: number;

  @Expose()
  public description: string;

  @Expose()
  public gender: GenderWorkoutType;

  @Expose()
  public video: string;

  @Expose()
  public rating: number;

  @Expose()
  public userId: string;

  @Expose()
  public user: Users;
}
