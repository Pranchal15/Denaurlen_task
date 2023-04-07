import { RequestHandler,Response,Request } from "express";
import UserModel from "../models/user"


export const createUser: RequestHandler = async(req,res,next)=>{
    const username = req.body.username;
    const name = req.body.name;
    
       try{
           const newUser = await UserModel.create({
               username:username,
               name:name,
           });
           res.status(201).json(newUser)
       }
       catch(error){
           next(error);
       }
   }

   export const getUsers: RequestHandler = async (req,res,next)=>{
    try{
        const users = await UserModel.find().exec();
        res.status(200).json(users);
        console.log(res)
    }
    catch(error){
        next(error);
    }
   
}