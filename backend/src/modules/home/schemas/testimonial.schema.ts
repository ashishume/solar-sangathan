import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Testimonial extends Document {
  @Prop({ required: true })
  quote: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  image: string;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
