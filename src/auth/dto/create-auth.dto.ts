import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { Role } from "src/models/role.enum"

export class CreateAuthDto {

    @IsNotEmpty()
    @IsString()
    username:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsString()
    password:string

    @IsNotEmpty()
    @IsString()
    confirmPassword:string
    

    @IsOptional()
    @IsString()
    profileImg?:string

    @IsString()
    @IsOptional()
    // @IsIn(["user", "admin"], {message:"userType must be either user or  admin"})
    @IsIn([Role.Admin, Role.User], {message:"userType must be either user or  admin"})
    role:Role
}
