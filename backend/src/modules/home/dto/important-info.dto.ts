import { IsString, IsNotEmpty } from "class-validator";

export class CreateImportantInfoDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  noticeType: string;
}

export class UpdateImportantInfoDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  noticeType: string;
}
