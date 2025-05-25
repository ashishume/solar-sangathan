import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Brand extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  logo: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
