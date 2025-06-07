import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsUrl()
  link: string;

  @IsNotEmpty()
  @IsUrl()
  documentUrl: string;
}
