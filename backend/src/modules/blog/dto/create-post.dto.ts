import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
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

  @IsNumber()
  readTime: number;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @IsMongoId()
  @IsOptional()
  categoryId?: string;

  @IsMongoId({ each: true })
  @IsOptional()
  tagIds?: string[];
}
