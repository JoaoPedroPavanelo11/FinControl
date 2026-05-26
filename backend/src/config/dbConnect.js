import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "dns";

dotenv.config();

if (process.env.DNS_SERVERS) {
    dns.setServers(process.env.DNS_SERVERS.split(",").map((server) => server.trim()));
}

async function dbConnect(){
    await mongoose.connect(
        process.env.DB_CONECTION_STRING,
        { serverSelectionTimeoutMS: 10000 }
    );
    return mongoose.connection;
}

export default dbConnect;
