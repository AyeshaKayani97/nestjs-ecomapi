import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategoriesSchema } from 'src/schema/categories.schema';
import { User, UserSchema } from 'src/auth/schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Categories.name, schema:CategoriesSchema},
      {name:User.name, schema:UserSchema}
    ])
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
