
const router = require("express").Router();

const {
    loginController,
}=require("../controller/adminAuthController")


router.get("/check", (req, res) => res.json({message: "admin check"}))
// /login当てに
router.post("/login",loginController)




module.exports = router;