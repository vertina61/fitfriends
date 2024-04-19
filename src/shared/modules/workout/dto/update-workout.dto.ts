import { GenderWorkoutType } from '../../../types/gender-workout-type.enum.js';
import { TrainingType } from '../../../types/training-type.enum.js';
import { UserLevelType } from '../../../types/user-level-type.enum.js';
import { Users } from '../../../types/users.type.js';
import { CALLORIES, DESCRIPTION, TITLE } from '../workout.constant.js';
import { MinLength, MaxLength, IsEnum, Min, Max, IsString, IsOptional } from 'class-validator';
import { UpdateWorkoutValidationMessage } from './update-workout-message.js';

export class UpdateWorkoutDto {

  @IsOptional()
  @MinLength(TITLE.MIN, { message: UpdateWorkoutValidationMessage.title.minLength })
  @MaxLength(TITLE.MAX, { message: UpdateWorkoutValidationMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  public image_for_page?: string;

  @IsOptional()
  @IsEnum(UserLevelType, { message: UpdateWorkoutValidationMessage.user_level.invalidFormat })
  public user_level?: UserLevelType;

  @IsOptional()
  @IsEnum(TrainingType, { message: UpdateWorkoutValidationMessage.training_type.invalidFormat })
  public training_type?: TrainingType;

  @IsOptional()
  public training_time?: string;

  @IsOptional()
  public price?: number;

  @IsOptional()
  @Min(CALLORIES.MIN, { message: UpdateWorkoutValidationMessage.callories.minValue })
  @Max(CALLORIES.MAX, { message: UpdateWorkoutValidationMessage.callories.maxValue })
  public callories?: number;

  @IsOptional()
  @IsString({ message: UpdateWorkoutValidationMessage.description.invalid })
  @MinLength(DESCRIPTION.MIN, { message: UpdateWorkoutValidationMessage.description.minLength })
  @MaxLength(DESCRIPTION.MAX, { message: UpdateWorkoutValidationMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  @IsString({ message: UpdateWorkoutValidationMessage.gender.invalid })
  @IsEnum(GenderWorkoutType, { message: UpdateWorkoutValidationMessage.gender.invalidFormat })
  public gender?: GenderWorkoutType;

  @IsOptional()
  @IsString({ message: UpdateWorkoutValidationMessage.video.invalid })
  public video?: string;

  @IsOptional()
  public rating: number;

  public userId: string;

  public user: Users;
}
