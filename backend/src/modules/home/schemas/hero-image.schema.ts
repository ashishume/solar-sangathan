import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class HeroImage extends Document {
  @Prop({ required: true })
  url: string;
}

export const HeroImageSchema = SchemaFactory.createForClass(HeroImage);
