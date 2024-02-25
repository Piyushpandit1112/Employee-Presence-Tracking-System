const mongoose=require('mongoose')

// const URI="mongodb://127.0.0.1:27017/mern_admin";

// const URI="mongodb+srv://8797pandit:Pandit@cluster0.mb0v9w5.mongodb.net/mern_admin?retryWrites=true&w=majority"

const URI=process.env.MONGODB_URI

const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
};


module.exports=connectDB;