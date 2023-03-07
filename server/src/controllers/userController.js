const User = require('../models/userModal')
const jwt = require('jsonwebtoken')
require(`dotenv`).config();

 const createToken = (_id) =>{
    return jwt.sign({_id},process.env.JWT_SECRET_USER,{expiresIn:'1d'})
}


const loginUser = async (req,res) =>{
    const {username,password} = req.body;

    try{
        const user = await User.login(username,password);

        const token = createToken(user._id)

        const stringId = (user._id)

        res.status(200).json({username,token,stringId})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

const signUpUser = async (req,res) =>{
    const {username,password,realname,department} = req.body

    try{
        const user = await User.signup(username,password,realname,department);

        const token = createToken(user._id)

        const stringId = (user._id)

        res.status(200).json({username,token,stringId})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports={loginUser,signUpUser}