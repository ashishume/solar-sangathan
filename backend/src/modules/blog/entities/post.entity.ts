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
  excerpt: string;

  @Prop()
  coverImage: string;

  @Prop({
    type: {
      name: String,
      avatar: String,
    },
  })
  author: {
    name: string;
    avatar: string;
  };

  @Prop()
  publishedAt: Date;

  @Prop()
  readTime: number;

  @Prop()
  status: string;

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
