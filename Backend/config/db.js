import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'TodoList'
        });
        console.log('Mongo connected', con.connection.host);
    } catch (error) {
        
        console.log(`error : ${error.message}`);
        process.exit(1);
    }
}


export default connectDB