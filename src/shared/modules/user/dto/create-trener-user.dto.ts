import { TrainingType } from "../../../types/training-type.enum.js";
import { UserLevelType } from "../../../types/user-level-type.enum.js";
import { CreateUserDto } from "./create-user.dto.js";

export class CreateTrenerUserDto extends CreateUserDto {
  public userId: string;
  public training_level: UserLevelType;
  public trainings_type: TrainingType;
  public certificates: string;
  public merits: string;
}
