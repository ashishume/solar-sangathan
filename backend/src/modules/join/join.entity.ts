import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type JoinDocument = Join & Document;

@Schema({ timestamps: true })
export class Join {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  occupation: string;

  @Prop({ required: true })
  interests: string;
}

export const JoinSchema = SchemaFactory.createForClass(Join);
