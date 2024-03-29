import { GenderType } from "./gender-type.enum.js";
import { LocationType } from "./location-type.enum.js";
import { UserType } from "./user-type.enum.js";

export type Users = {
    name: string;
    email: string;
    avatar: string;
    gender: GenderType;
    date_of_birth: Date;
    user_type: UserType;
    description: string;
    location: LocationType;
    image_for_page: string;
  }
