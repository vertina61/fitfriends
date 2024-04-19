import { GenderWorkoutType } from '../../../types/gender-workout-type.enum.js';
import { TrainingType } from '../../../types/training-type.enum.js';
import { UserLevelType } from '../../../types/user-level-type.enum.js';
import { CALLORIES, DESCRIPTION, TITLE } from '../workout.constant.js';
import { MinLength, MaxLength, IsEnum, Min, Max, IsString } from 'class-validator';
import { CreateWorkoutValidationMessage } from './create-workout.message.js';
import { Users } from '../../../types/users.type.js';

export class CreateWorkoutDto {

  @MinLength(TITLE.MIN, { message: CreateWorkoutValidationMessage.title.minLength })
  @MaxLength(TITLE.MAX, { message: CreateWorkoutValidationMessage.title.maxLength })
  public title: string;

  public image_for_page: string;

  @IsEnum(UserLevelType, { message: CreateWorkoutValidationMessage.user_level.invalidFormat })
  public user_level: UserLevelType;

  @IsEnum(TrainingType, { message: CreateWorkoutValidationMessage.training_type.invalidFormat })
  public training_type: TrainingType;


  public training_time: string;

  public price: number;

  @Min(CALLORIES.MIN, { message: CreateWorkoutValidationMessage.callories.minValue })
  @Max(CALLORIES.MAX, { message: CreateWorkoutValidationMessage.callories.maxValue })
  public callories: number;

  @IsString({ message: CreateWorkoutValidationMessage.description.invalid })
  @MinLength(DESCRIPTION.MIN, { message: CreateWorkoutValidationMessage.description.minLength })
  @MaxLength(DESCRIPTION.MAX, { message: CreateWorkoutValidationMessage.description.maxLength })
  public description: string;

  @IsString({ message: CreateWorkoutValidationMessage.gender.invalid })
  @IsEnum(GenderWorkoutType, { message: CreateWorkoutValidationMessage.gender.invalidFormat })
  public gender: GenderWorkoutType;

  @IsString({ message: CreateWorkoutValidationMessage.video.invalid })
  public video: string;

  public rating: number;

  public userId: string;

  public user: Users;

}
