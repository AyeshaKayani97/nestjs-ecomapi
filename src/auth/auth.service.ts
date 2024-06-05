import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)  private userModel:Model<User>,
    private jwtService:JwtService
  
  ){}

  //Register User 

  async create(createAuthDto: CreateAuthDto){
    const {username, email, password, confirmPassword, role} = createAuthDto;

    const isEmailExist = await this.userModel.findOne({email:email})

    if(isEmailExist){
      throw new UnauthorizedException("User with this email already exist")

    }

    const isUserNameExist = await this.userModel.findOne({username:username});

    if(isUserNameExist){
      throw new UnauthorizedException("User with this username already exist");

    }
    if (password !== confirmPassword){
      throw new UnauthorizedException("Both Password do not match")

    }
    const hashedPassword = await bcrypt.hashSync(password,10)
    const user = await this.userModel.create({
      username,
      email,
      password: hashedPassword,
      confirmPassword,
      role
      
    }
    )
    const token = this.jwtService.sign({id:user._id})

    return {user, token}
    



  }

  // Login 

  async login(body:LoginDto){
    const {  username, password: plaintextPassword } = body;
    // Checking whether user with this email exists or not
    const user = await this.userModel.findOne({username:username})


    if(!user){
      throw new UnauthorizedException("Invalid Username Or Password");
    }
    // compare: This is a method provided by bcrypt for comparing a plaintext password with a hashed password. It takes two arguments:
// The first argument is the plaintext password (password) that the user provided during authentication.
// The second argument is the hashed password retrieved from your database (user.password).
    const isPasswordMatched = await bcrypt.compare(plaintextPassword, user.password);

    if(!isPasswordMatched){
      throw new UnauthorizedException("Invalid Username Or Password")
    }
    const token = this.jwtService.sign({
      id:user._id,
      usernaname:user.username,
      role:user.role
    });

    const { password,confirmPassword,profileImg,forgotPasswordToken, __v, ...responseUser }: any =
        user.toObject();
    return {...responseUser,  token}  
      
      }
    

  // async generateJwtToken(userId:string,role:string){
   
  //     return  await this.jwtService.sign({userId,role}),
        
   
  // }



  


  

  

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
