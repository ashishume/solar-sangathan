import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "../entities/post.entity";
import { Category } from "../entities/category.entity";
import { Tag } from "../entities/tag.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CreateTagDto } from "../dto/create-tag.dto";
import { UpdateTagDto } from "../dto/update-tag.dto";

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<Post>,
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,
    @InjectModel(Tag.name)
    private tagModel: Model<Tag>
  ) {}

  // Post operations
  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const post = new this.postModel(createPostDto);
    if (createPostDto.categoryId) {
      post.category = await this.categoryModel.findById(
        createPostDto.categoryId
      );
    }
    if (createPostDto.tagIds) {
      post.tags = await this.tagModel.find({
        _id: { $in: createPostDto.tagIds },
      });
    }
    return post.save();
  }

  async findAllPosts(): Promise<Post[]> {
    return this.postModel.find().populate("category").populate("tags").exec();
  }

  async findPostById(id: string): Promise<Post> {
    return this.postModel
      .findById(id)
      .populate("category")
      .populate("tags")
      .exec();
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postModel.findById(id);
    if (updatePostDto.categoryId) {
      post.category = await this.categoryModel.findById(
        updatePostDto.categoryId
      );
    }
    if (updatePostDto.tagIds) {
      post.tags = await this.tagModel.find({
        _id: { $in: updatePostDto.tagIds },
      });
    }
    Object.assign(post, updatePostDto);
    return post.save();
  }

  async deletePost(id: string): Promise<void> {
    await this.postModel.findByIdAndDelete(id);
  }

  // Category operations
  async createCategory(
    createCategoryDto: CreateCategoryDto
  ): Promise<Category> {
    const category = new this.categoryModel(createCategoryDto);
    return category.save();
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findCategoryById(id: string): Promise<Category> {
    return this.categoryModel.findById(id).exec();
  }

  async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<Category> {
    return this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .exec();
  }

  async deleteCategory(id: string): Promise<void> {
    await this.categoryModel.findByIdAndDelete(id);
  }

  // Tag operations
  async createTag(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = new this.tagModel(createTagDto);
    return tag.save();
  }

  async findAllTags(): Promise<Tag[]> {
    return this.tagModel.find().exec();
  }

  async findTagById(id: string): Promise<Tag> {
    return this.tagModel.findById(id).exec();
  }

  async updateTag(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    return this.tagModel
      .findByIdAndUpdate(id, updateTagDto, { new: true })
      .exec();
  }

  async deleteTag(id: string): Promise<void> {
    await this.tagModel.findByIdAndDelete(id);
  }

  // Popular posts and tags
  async getPopularPosts(limit: number = 5): Promise<Post[]> {
    return this.postModel
      .find()
      .sort({ viewCount: -1 })
      .limit(limit)
      .populate("category")
      .populate("tags")
      .exec();
  }

  async getPopularTags(limit: number = 10): Promise<Tag[]> {
    return this.tagModel.find().sort({ usageCount: -1 }).limit(limit).exec();
  }
}
