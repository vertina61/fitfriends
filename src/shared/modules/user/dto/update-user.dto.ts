import { GenderType } from "../../../types/gender-type.enum.js";
import { LocationType } from "../../../types/location-type.enum.js";

export class UpdateUserDto {

  name?: string;
  avatar?: string;
  pol?: GenderType;
  date_of_birth?: Date;
  about_me?: string;
  location?: LocationType;
  image_page?: string;

}
