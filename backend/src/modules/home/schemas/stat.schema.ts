import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Stat extends Document {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  value: string;
}

export const StatSchema = SchemaFactory.createForClass(Stat);
