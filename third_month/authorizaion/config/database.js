const mongoose = require("mongoose")
const DB = process.env.DATABASE_URI

mongoose.connect(DB)
.then(() => {
    console.log("Connection to database successful")
})
.catch((Error) => {
    console.log("error connecting to database" + Error.messge);
    
})