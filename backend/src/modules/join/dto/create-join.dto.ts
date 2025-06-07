import { IsString, IsEmail } from "class-validator";

export class CreateJoinDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  occupation: string;

  @IsString()
  interests: string;

  @IsString()
  selectedRateCard: string;
}
