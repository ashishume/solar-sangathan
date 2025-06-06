import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateImportantInfoDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  noticeType: string;

  @IsString()
  @IsOptional()
  documentLink: string | null;
}

export class UpdateImportantInfoDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  noticeType: string;

  @IsString()
  @IsOptional()
  documentLink: string | null;
}
