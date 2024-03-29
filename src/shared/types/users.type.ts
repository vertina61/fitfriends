import { UserRolType } from "./user-rol.type.js";
import { GenderType } from "./gender-type.enum.js";
import { LocationType } from "./location-type.enum.js";


export type Users = {
    name: string;
    email: string;
    avatar: string;
    pol: GenderType;
    date_of_birth: Date;
    user_type: UserRolType;
    about_me: string;
    location: LocationType;
    image_page: string;
  }
