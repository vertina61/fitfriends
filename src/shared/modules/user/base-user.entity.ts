import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { Users } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';
import { GenderType } from '../../types/gender-type.enum.js';
import { UserRolType } from '../../types/user-rol.type.js';
import { LocationType } from '../../types/location-type.enum.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface BaseUserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging

export class BaseUserEntity extends defaultClasses.TimeStamps implements Users {

  @prop({ required: true, default: '' })
  public name: string;

  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true, default: '' })
  private password?: string;

  @prop()
  public avatar: string;

  @prop({ required: true,
    pol: () => String,
    enum: GenderType
  })
  public pol!: GenderType;

  @prop()
  public date_of_birth!: Date;

  @prop({ required: true,
    user_type: () => String,
  })
  public user_type!: UserRolType;

  @prop({trim: true})
  public about_me!: string;

  @prop({required: true,
    location: () => String,
    enum: LocationType
  })
  public location!: LocationType;

  @prop({ required: true})
  public image_page!: string;


  constructor(userData: Users) {
    super();

    this.name = userData.name;
    this.email = userData.email;
    this.avatar = userData.avatar;
    this.pol = userData.pol;
    this.date_of_birth = userData.date_of_birth;
    this.user_type = userData.user_type;
    this.about_me = userData.about_me;
    this.location = userData.location;
    this.image_page = userData.image_page;

  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }
}

export const UserModel = getModelForClass(BaseUserEntity);
