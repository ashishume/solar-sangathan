import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import { BlogService } from "../services/blog.service";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
// import { CreateCategoryDto } from "../dto/create-category.dto";
// import { UpdateCategoryDto } from "../dto/update-category.dto";
// import { CreateTagDto } from "../dto/create-tag.dto";
// import { UpdateTagDto } from "../dto/update-tag.dto";

@Controller("api/blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // Post endpoints
  @Post("posts")
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.blogService.createPost(createPostDto);
  }

  @Get("posts")
  findAllPosts() {
    return this.blogService.findAllPosts();
  }

  @Get("posts/search")
  searchPosts(@Query("q") query: string) {
    return this.blogService.searchPosts(query);
  }

  @Get("posts/:id")
  findPostById(@Param("id") id: string) {
    return this.blogService.findPostById(id);
  }

  @Put("posts/:id")
  updatePost(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.blogService.updatePost(id, updatePostDto);
  }

  @Delete("posts/:id")
  deletePost(@Param("id") id: string) {
    return this.blogService.deletePost(id);
  }

  // Popular content endpoints
  @Get("popular/posts")
  getPopularPosts(@Query("limit") limit?: number) {
    return this.blogService.getPopularPosts(limit);
  }

  @Get("popular/tags")
  getPopularTags(@Query("limit") limit?: number) {
    return this.blogService.getPopularTags(limit);
  }

  @Get("categories/:categoryId/posts")
  findPostsByCategory(@Param("categoryId") categoryId: string) {
    return this.blogService.findPostsByCategory(categoryId);
  }
}
