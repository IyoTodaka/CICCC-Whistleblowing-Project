const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    // realname:{
    //     type:String
    // },
    // department:{
    //     type:String
    // },
    flagType:{
        type:String,
        default:"whistleblower"
    }

})

userSchema.statics.signup = async function (username,password) {

    if (!username || !password){
        throw Error("Username and password must be filled")
    }
    
    // if(!validator.isEmail(email)){
    //     throw Error("Email is not valid")
    // }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough")
    }
    

    const exists = await this.findOne({username})

    if(exists){
        throw Error ('Username is already registered. Try other username.')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
   
    // const user = await this.create({username,password:hash,realname,department})
    const user = await this.create({username,password:hash})

    return user
}

userSchema.statics.login = async function (username,password){
    if (!username || !password ){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({username})

    if(!user){
        throw Error("Incorrect credentials or User not found")
    }

    const match = await bcrypt.compare(password,user.password)
    if (!match){
        throw Error("Incorrect credentials")
    }

    return user
}

module.exports = mongoose.model('User', userSchema)