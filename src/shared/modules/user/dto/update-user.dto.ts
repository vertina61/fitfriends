import { GenderType } from "../../../types/gender-type.enum.js";
import { LocationType } from "../../../types/location-type.enum.js";
import { ABOUT_ME, NAME } from "../user-constant.js";
import { UpdateUserMessagesValid } from "./update-user.messages.js";
import { IsOptional, IsString, Length, IsEnum, IsDateString, MinLength, MaxLength} from "class-validator";

export class UpdateUserDto {

  @IsOptional()
  @IsString({ message: UpdateUserMessagesValid.name.invalid })
  @Length(NAME.MIN, NAME.MAX, { message: UpdateUserMessagesValid.name.lengthField })
  name?: string;

  @IsOptional()
  @IsString({ message: UpdateUserMessagesValid.avatar.invalidFormat })
  avatar?: string;

  @IsOptional()
  @IsString({ message: UpdateUserMessagesValid.pol.invalid })
  @IsEnum(GenderType, { message: UpdateUserMessagesValid.pol.invalid })
  pol?: GenderType;

  @IsOptional()
  @IsDateString({}, { message: UpdateUserMessagesValid.date_of_birth.invalidFormat })
  date_of_birth?: Date;

  @IsOptional()
  @MinLength(ABOUT_ME.MIN, { message: UpdateUserMessagesValid.about_me.minLength })
  @MaxLength(ABOUT_ME.MAX, { message: UpdateUserMessagesValid.about_me.maxLength })
  about_me?: string;

  @IsOptional()
  @IsString({ message: UpdateUserMessagesValid.location.invalid })
  @IsEnum(LocationType, { message: UpdateUserMessagesValid.location.invalidFormat })
  location?: LocationType;

  @IsOptional()
  image_page?: string;

}
