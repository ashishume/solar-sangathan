import type { Category } from "./category";
import type { Tag } from "./tag";

export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  content: string;
  category: Category;
  tags: Tag[];
  status: "Draft" | "Published";
  createdAt: Date;
  updatedAt: Date;
}
