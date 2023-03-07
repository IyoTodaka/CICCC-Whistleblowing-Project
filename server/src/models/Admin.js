const mongoose = require("mongoose"); 
const bcrypt = require('bcryptjs')
const {jwtSecret, salt} = require("../config")


const adminSchema = new mongoose.Schema({

    loginName:{
        type: String,
        required:true,
        trim: true,
        maxlength:30,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    role:{
        type: String,
        required:true,
    
    },
   
})


adminSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})


module.exports = mongoose.model("Admin" , adminSchema);