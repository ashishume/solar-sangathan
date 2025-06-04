import { IsString, IsEmail } from "class-validator";

export class CreateContactDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  message: string;
}
