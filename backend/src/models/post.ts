import {InferSchemaType,model, Schema} from "mongoose";

const postSchema = new Schema({
    name : {type: String, required : true},
    username :{type:String, required:true},
    grosscoins:{type:Number, required:true},
    netcoins:{type:Number, required:true},
    leadcoins:{type:Number,required:true},
    highestLeader:{type: String, required : true}
},{timestamps:true})

type Post = InferSchemaType<typeof postSchema>;

export default model<Post>("Post",postSchema)
