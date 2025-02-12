import { connect } from "mongoose";
import envUtil from "./env.util.js";

async function dbConnect() {
    try {
        console.log("Connecting to MongoDB: ",process.env.MONGO_LINK);
        connect(process.env.MONGO_LINK)        
    } catch (error) {
        console.log(error);        
    }
}

export default dbConnect