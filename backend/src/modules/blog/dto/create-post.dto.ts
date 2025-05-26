import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsMongoId,
  IsNumber,
  IsDate,
  ValidateNested,
  IsObject,
} from "class-validator";
import { Type } from "class-transformer";

class AuthorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  excerpt: string;

  @IsString()
  @IsNotEmpty()
  coverImage: string;

  @IsObject()
  @ValidateNested()
  @Type(() => AuthorDto)
  author: AuthorDto;

  @IsDate()
  @Type(() => Date)
  publishedAt: Date;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  readTime: number;

  @IsMongoId()
  @IsOptional()
  categoryId?: string;

  @IsMongoId({ each: true })
  @IsOptional()
  tagIds?: string[];
}
