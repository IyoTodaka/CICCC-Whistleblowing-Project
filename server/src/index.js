const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const multer = require('multer')

const app = express()
const userRoutes=require(`./routes/user`);
require('./utils/mongodb')
const config = require("./config")
const PORT = config.port || 8000

app.use(fileUpload())
// necessary to parse the req.body
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
}))


app.use('/api/user',userRoutes)

// app.post('report/upload', (req,res) =>{
//     if(req.files=== null){
//         return res.status(400).json({msg:"No file uploaded"})
//     }

//     const file = req.files.file;


// })


app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`)
})

