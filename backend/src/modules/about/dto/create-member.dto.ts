import { IsString, IsOptional, IsBoolean, IsObject } from "class-validator";

export class CreateMemberDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  @IsString()
  image: string;

  @IsObject()
  @IsOptional()
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
    instagram?: string;
    telegram?: string;
  };

  @IsBoolean()
  @IsOptional()
  isWorkingCommittee?: boolean;
}
