import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Video extends Document {
  @Prop({ required: false })
  title: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ required: true })
  thumbnailUrl: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
