import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogController } from "./controllers/blog.controller";
import { BlogService } from "./services/blog.service";
import { Post, PostSchema } from "./entities/post.entity";
import { Category, CategorySchema } from "./entities/category.entity";
import { Tag, TagSchema } from "./entities/tag.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Tag.name, schema: TagSchema },
    ]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [BlogService],
})
export class BlogModule {}
