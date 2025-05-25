import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RateCardDocument = RateCard & Document;

@Schema({ timestamps: true })
export class RateCard {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  features: string[];

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isPopular: boolean;

  @Prop()
  buttonText: string;

  @Prop()
  buttonLink: string;
}

export const RateCardSchema = SchemaFactory.createForClass(RateCard);
