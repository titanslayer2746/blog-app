import mongoose from "mongoose"

const Connection = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error while connecting to database", error)
    }
}


export default Connection;