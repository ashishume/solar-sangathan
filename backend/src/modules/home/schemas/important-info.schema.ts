import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class ImportantInfo extends Document {
  @Prop({ required: true })
  content: string;
}

export const ImportantInfoSchema = SchemaFactory.createForClass(ImportantInfo);
