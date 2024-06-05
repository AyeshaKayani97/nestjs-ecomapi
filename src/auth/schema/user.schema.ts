import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/models/role.enum";


@Schema({timestamps:true})

export class User{

    @Prop({required:true, unique:true, message:"username must be unique"})
    username:string;

    @Prop({required:true, unique:true, message:"Duplicated Email"})
    email:string;

    @Prop({required:true})
    password:string;


    @Prop({required:true})
    confirmPassword:string;

    @Prop({required:false, default:null})
    profileImg:string;

    @Prop({ default: null })
    forgotPasswordToken: string | null;

    @Prop({ type:String,enum:Role, default: Role.User })
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
