import {
  IsString,
  IsOptional,
  IsBoolean,
  IsObject,
  IsNumber,
} from "class-validator";

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

  @IsString()
  @IsOptional()
  contact?: string;

  @IsBoolean()
  @IsOptional()
  isWorkingCommittee?: boolean;

  @IsNumber()
  @IsOptional()
  order?: number;
}
