import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Channel extends Document {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: false })
  color: string;

  @Prop({ required: false })
  icon: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
