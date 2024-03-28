import { GenderType } from "../../../types/gender-type.enum.js";
import { LocationType } from "../../../types/location-type.enum.js";
import { UserRolType } from "../../../types/user-rol.type.js";

export class CreateUserDto {
  user_type: UserRolType;
  name: string;
  email: string;
  avatar: string;
  gender: GenderType;
  date_of_birth: Date;
  description: string;
  location: LocationType;
  image_for_page: string;
  password: string;
}
