import { GenderType } from "../../../types/gender-type.enum.js";
import { LocationType } from "../../../types/location-type.enum.js";
import { UserRolType } from "../../../types/user-rol.type.js";
import { ABOUT_ME, NAME, PASSWORD } from "../user-constant.js";
import { CreateUserMessagesValid } from "./create-user-messages.js";
import { IsString, Length, IsEmail, IsDateString, IsEnum, MaxLength, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {

  public user_type: UserRolType;

  @IsString({ message: CreateUserMessagesValid.name.invalid })
  @Length(NAME.MIN, NAME.MAX, { message: CreateUserMessagesValid.name.lengthField })
  public name: string;

  @IsString({ message: CreateUserMessagesValid.email.invalid })
  @IsEmail({}, { message: CreateUserMessagesValid.email.invalidFormat })
  public email: string;

  @IsOptional()
  @IsString({ message: CreateUserMessagesValid.avatar.invalidFormat })
  public avatar: string;

  @IsString({ message: CreateUserMessagesValid.pol.invalid })
  @IsEnum(GenderType, { message: CreateUserMessagesValid.pol.invalid })
  public pol: GenderType;

  @IsOptional()
  @IsDateString({}, { message: CreateUserMessagesValid.date_of_birth.invalidFormat })
  public date_of_birth: Date;

  @MinLength(ABOUT_ME.MIN, { message: CreateUserMessagesValid.about_me.minLength })
  @MaxLength(ABOUT_ME.MAX, { message: CreateUserMessagesValid.about_me.maxLength })
  public about_me: string;

  @IsString({ message: CreateUserMessagesValid.location.invalid })
  @IsEnum(LocationType, { message: CreateUserMessagesValid.location.invalidFormat })
  public location: LocationType;

  public image_page: string;

  @IsString({ message: CreateUserMessagesValid.password.invalid })
  @Length(PASSWORD.MIN, PASSWORD.MAX, { message: CreateUserMessagesValid.password.lengthField })
  public password: string;
}
