import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class ImportantInfo extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  noticeType: string;

  @Prop({ required: false, default: null })
  documentLink: string | null;
}

export const ImportantInfoSchema = SchemaFactory.createForClass(ImportantInfo);
