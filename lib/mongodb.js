import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectMongo = async () => {

    if(mongoose.connections[0].readyState){
        console.log("Already conncected to Mongodb");
        return;
    }
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("monogoDB connected");
    }catch(err){
            console.log("MogoDB connection error:",err);
            throw new Error("Failed to connect to Mongodb");
    }
};

export default connectMongo;