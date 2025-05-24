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
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CreateTagDto } from "../dto/create-tag.dto";
import { UpdateTagDto } from "../dto/update-tag.dto";

@Controller("blog")
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

  // Category endpoints
  @Post("categories")
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.blogService.createCategory(createCategoryDto);
  }

  @Get("categories")
  findAllCategories() {
    return this.blogService.findAllCategories();
  }

  @Get("categories/:id")
  findCategoryById(@Param("id") id: string) {
    return this.blogService.findCategoryById(id);
  }

  @Put("categories/:id")
  updateCategory(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return this.blogService.updateCategory(id, updateCategoryDto);
  }

  @Delete("categories/:id")
  deleteCategory(@Param("id") id: string) {
    return this.blogService.deleteCategory(id);
  }

  // Tag endpoints
  @Post("tags")
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.blogService.createTag(createTagDto);
  }

  @Get("tags")
  findAllTags() {
    return this.blogService.findAllTags();
  }

  @Get("tags/:id")
  findTagById(@Param("id") id: string) {
    return this.blogService.findTagById(id);
  }

  @Put("tags/:id")
  updateTag(@Param("id") id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.blogService.updateTag(id, updateTagDto);
  }

  @Delete("tags/:id")
  deleteTag(@Param("id") id: string) {
    return this.blogService.deleteTag(id);
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
}
