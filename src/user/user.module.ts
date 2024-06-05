import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/auth/schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:User.name, schema:UserSchema
      }
    ])

  ],
  controllers: [UserController],
  providers: [UserService,JwtService],
})
export class UserModule {}