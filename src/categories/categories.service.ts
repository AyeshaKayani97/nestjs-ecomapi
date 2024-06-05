import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categories } from 'src/schema/categories.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name)
    private readonly catModel: Model<Categories>,
    // private readonly userModel: Model<User>

    
  ){}

  async create(body: CreateCategoryDto) {
    // const isValidId = mongoose.Types.ObjectId.isValid(id);

    // if (!isValidId) {
    //   throw new NotFoundException(`Invalid Id.`);
    // }


    // const user = this.userModel.findById(id);
    // if(!user){
    //   throw new 

    // }
    const {name} = CreateCategoryDto;
    const cat = await this.catModel.create({
      name
    })
    return { cat}

  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
