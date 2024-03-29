import { GenderType } from "../../../types/gender-type.enum.js";
import { LocationType } from "../../../types/location-type.enum.js";
import { UserRolType } from "../../../types/user-rol.type.js";

export class CreateUserDto {
  user_type: UserRolType;
  name: string;
  email: string;
  avatar: string;
  pol: GenderType;
  date_of_birth: Date;
  about_me: string;
  location: LocationType;
  image_page: string;
  password: string;
}
