import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1","8.8.8.8"]);
async function dbConnect(){
    await mongoose.connect("mongodb+srv://Joaopedropavanelo123:joaopedropavanelo@dbfincontrol.enr0ddc.mongodb.net/")

    return mongoose.connection
};

export default dbConnect;