import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MemberDocument = Member & Document;

@Schema()
export class Member {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: Object, required: false })
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
    instagram?: string;
    telegram?: string;
  };

  @Prop({ required: false })
  contact: string;

  @Prop({ default: false })
  isWorkingCommittee: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
