import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    // @InjectModel(User.name) private userModel:Model<User>
  ){}


  create(createUserDto: CreateUserDto) {
    return ""
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new NotFoundException(`Invalid Id.`);
    }
    
    // return  this.userModel.findById({_id:id})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
