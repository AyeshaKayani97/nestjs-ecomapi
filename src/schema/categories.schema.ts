import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({timestamps:true})

export class Categories{
    @Prop({required:true, unique:true})
    name:string;

    

}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);