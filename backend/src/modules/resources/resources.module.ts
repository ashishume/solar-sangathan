import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ResourcesController } from "./controllers/resources.controller";
import { ResourcesService } from "./services/resources.service";
import { Resource, ResourceSchema } from "./entities/resource.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resource.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService],
  exports: [ResourcesService],
})
export class ResourcesModule {}
