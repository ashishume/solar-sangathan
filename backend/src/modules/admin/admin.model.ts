import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as bcrypt from "bcryptjs";

export type AdminDocument = Admin & Document;

@Schema({ timestamps: true })
export class Admin {
  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, minlength: 6 })
  password: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ enum: ["SUPER_ADMIN", "ADMIN"], default: "ADMIN" })
  role: "SUPER_ADMIN" | "ADMIN";
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

// Hash password before saving
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
