const {login} =require("../middleware/adminAuthService")


const loginController = async(req,res,next)=>{
    const loginService = await login(req.body)
    console.log("LoginControllerやぞ")
    console.log(loginService)

    return res.json(loginService)
} 


module.exports={
    loginController
}
