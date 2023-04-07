import {InferSchemaType,model, Schema} from "mongoose";

const userSchema = new Schema({
    name : {type: String, required : true},
    username :{type:String, required:true},

},{timestamps:true})

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User",userSchema)
