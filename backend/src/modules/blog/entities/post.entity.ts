import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Category } from "./category.entity";
import { Tag } from "./tag.entity";

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  featuredImage: string;

  @Prop({ default: false })
  isPublished: boolean;

  @Prop({ default: 0 })
  viewCount: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Category" })
  category: Category;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "Tag" }])
  tags: Tag[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
