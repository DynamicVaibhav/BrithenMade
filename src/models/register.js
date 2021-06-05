const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Name : {
        type: String,
        required : true
    },
    Email : {
        type: String,
        required : true,
        unique : true
    },
    Phone : {
        type: Number,
        required : true,
        unique : true
    },
    Password : {
        type : String,
          required : true
    },
    Age : {
        type : Number,
        required: true,
    }
})

const Register = new mongoose.model("Register", userSchema);
module.exports = Register;  