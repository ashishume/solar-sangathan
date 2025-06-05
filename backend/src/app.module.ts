import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { BlogModule } from "./modules/blog/blog.module";
import { HomeModule } from "./modules/home/home.module";
import { RateCardsModule } from "./rate-cards/rate-cards.module";
import { TagsModule } from "./tags/tags.module";
import { CategoriesModule } from "./modules/categories/categories.module";
import { AboutModule } from "./modules/about/about.module";
import { JoinModule } from "./modules/join/join.module";
import { ContactModule } from "./modules/contact/contact.module";
import { AdminModule } from "./modules/admin/admin.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get("MONGO_DB_URI"),
      }),
      inject: [ConfigService],
    }),
    BlogModule,
    HomeModule,
    RateCardsModule,
    TagsModule,
    CategoriesModule,
    AboutModule,
    ContactModule,
    JoinModule,
    AdminModule,
    AuthModule,
  ],
})
export class AppModule {}
