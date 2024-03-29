import { TrainingType } from "../../../types/training-type.enum.js";
import { UserLevelType } from "../../../types/user-level-type.enum.js";
import { CreateUserDto } from "./create-user.dto.js";

export class CreateCustomerUserDto extends CreateUserDto {
  public userId: string;
  public training_level: UserLevelType;
  public training_type: TrainingType;
  public training_time: string;
  public callories: number;
  public callories_in_day: number;
}
