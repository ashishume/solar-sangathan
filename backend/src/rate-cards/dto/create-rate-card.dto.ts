import {
  IsString,
  IsNumber,
  IsArray,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
} from "class-validator";

export class CreateRateCardDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsArray()
  @IsString({ each: true })
  features: string[];

  @IsBoolean()
  @IsOptional()
  isActive: boolean = true;

  @IsBoolean()
  @IsOptional()
  isPopular: boolean = false;

  @IsString()
  @IsOptional()
  buttonText?: string;

  @IsString()
  @IsOptional()
  buttonLink?: string;
}
