
const router = require("express").Router();


router.get("/check", (req, res) => res.json({message: "admin check"}))

module.exports = router;