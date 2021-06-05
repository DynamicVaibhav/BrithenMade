const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BrithenMade",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
} ).then(() => {
    console.log("You have connect sucesfully");
}).catch((err) => {
    console.log("be panic")
})