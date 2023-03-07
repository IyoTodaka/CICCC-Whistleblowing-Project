const mongoose = require("mongoose"); 
const bcrypt = require('bcryptjs')
const {jwtSecret, salt} = require("../config")


const userSchema = new mongoose.Schema({

    userName:{
        type: String,
        required:true,
        trim: true,
        maxlength:30,
    },
    password:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required:false,
        trim: true,
        maxlength:30,
    },
    lastName:{
        type: String,
        required:false,
        trim: true,
        maxlength:30,
    },
    departament:{
        type: String,
        required:false,
        trim: true,
        maxlength:30,
    },

   
})


userSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})


module.exports = mongoose.model("User" , userSchema);