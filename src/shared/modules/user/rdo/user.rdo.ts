import { Expose } from 'class-transformer';
import { UserRolType } from '../index.js';
import { GenderType } from '../../../types/gender-type.enum.js';
import { LocationType } from '../../../types/location-type.enum.js';

export class UserRdo {
  @Expose()
  user_type: UserRolType;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  avatar: string;

  @Expose()
  pol: GenderType;

  @Expose()
  date_of_birth: Date;

  @Expose()
  about_me: string;

  @Expose()
  location: LocationType;

  @Expose()
  image_page: string;

}
