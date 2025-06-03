import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AboutService } from "./about.service";
import { AboutController } from "./about.controller";
import { Member, MemberSchema } from "./entities/member.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  controllers: [AboutController],
  providers: [AboutService],
  exports: [AboutService],
})
export class AboutModule {}
