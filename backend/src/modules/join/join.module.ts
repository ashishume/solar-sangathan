import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JoinService } from "./join.service";
import { JoinController } from "./join.controller";
import { Join, JoinSchema } from "./join.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Join.name, schema: JoinSchema }]),
  ],
  controllers: [JoinController],
  providers: [JoinService],
})
export class JoinModule {}
