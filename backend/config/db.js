const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        //console.log("MongoDB URI:", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
       // console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;