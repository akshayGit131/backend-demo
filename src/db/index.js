import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try{
        console.log("in db",process.env.MONGODB_URI)
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Db is connected on Host ${connectionIntance.connection.host}`)

    } catch(err){
        console.log("connection db err", err);
        process.exit(1)
    }
};

export default connectDB;