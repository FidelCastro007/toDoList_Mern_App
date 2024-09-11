const mongoose = require('mongoose')
require('dotenv').config

const ConnectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log('Connected to MongoDB')
    } catch (err){
        console.error("Error Connecting to MongoDb:", err)
        process.exit(1); // Exit with process failure
    }
}

module.exports = ConnectDB