import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Categories } from "./categories.schema";

@Schema({timestamps:true})

export class Products{
    @Prop({required:true, unique:true})
    title:string;

    @Prop({required:true, unique:true})
    desc:string;

    @Prop({required:true})
    img:string;

    @Prop({type:mongoose.Types.ObjectId, ref:"Categories"})
    cat_id:Categories[]

    @Prop({required:true})
    price:number;

    @Prop()
    size:string;

    @Prop()
    color:string;

}

export const ProductsSchema = SchemaFactory.createForClass(Products)