import "dotenv/config";
import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT;


mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
.then(()=>{
    console.log("Mongoose Connected");
    app.listen(port,()=>{
        console.log("server running on "+port);
    });
    
})
.catch(console.error);



