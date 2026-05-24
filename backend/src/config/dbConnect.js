import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();
async function dbConnect(){
    await mongoose.connect(
        process.env.DB_CONECTION_STRING
    );
    return mongoose.connection;
}

export default dbConnect;