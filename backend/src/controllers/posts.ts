import { RequestHandler,Response,Request } from "express";
import PostModel from "../models/post";

export const getPosts: RequestHandler = async (req,res,next)=>{
    try{
        const posts = await PostModel.find().exec();
        res.status(200).json(posts);
        console.log(res)
    }
    catch(error){
        next(error);
    }
   
}




interface updatePostBodyParams{
    postId:string,
}

interface updatePostBody{
    name?: string,
    username?:string,
    grosscoins?:number,
    netcoins?:number,
    leadcoins?:number,
    highestLeader?:string
}

export const valuationProcess: RequestHandler= async(req,res,next)=>{
  
  const postId = req.params.postId;
   const NewGrosscoins = req.body.grosscoins;
   const NewNetcoins = req.body.netcoins;
   const newLeadCoins = req.body.leadcoins;
   const newHighestLeader = req.body.highestLeader;

   
    try{
        const post = await PostModel.findById(postId).exec();
      if (post!=null){

          post.grosscoins = NewGrosscoins;
          post.netcoins = NewNetcoins;
          post.leadcoins = newLeadCoins;
          post.highestLeader = newHighestLeader;
          const updatedPost = await post.save();
          res.status(200).json(updatedPost)
      }}
      catch(error)
      {
        next(error)
      }

    
}