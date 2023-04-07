import "dotenv/config";
import express, {NextFunction, Request,Response} from "express";
import postsRoutes from "./routes/posts"
import userRoutes from "./routes/users"
const app = express();

app.use(express.json());

app.use("/api/posts",postsRoutes);
app.use("/api/users",userRoutes);

app.use((error:unknown,req:Request,res:Response,next : NextFunction)=>{
    console.error;
    let errorMessage = "An unknown error occured";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({error:errorMessage});
})

export default app;