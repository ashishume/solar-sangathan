import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Member, MemberDocument } from "./entities/member.entity";
import { CreateMemberDto } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<MemberDocument>
  ) {}

  create(createMemberDto: CreateMemberDto) {
    const createdMember = new this.memberModel(createMemberDto);
    return createdMember.save();
  }

  findAll() {
    return this.memberModel.find().exec();
  }

  findWorkingCommittee() {
    return this.memberModel.find({ isWorkingCommittee: true }).exec();
  }

  findOtherMembers() {
    return this.memberModel.find({ isWorkingCommittee: false }).exec();
  }

  findOne(id: string) {
    return this.memberModel.findById(id).exec();
  }

  async update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.memberModel
      .findByIdAndUpdate(id, updateMemberDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.memberModel.findByIdAndDelete(id).exec();
  }
}
