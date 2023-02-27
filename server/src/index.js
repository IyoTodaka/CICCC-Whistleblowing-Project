const express = require('express')
const cors = require('cors')

const app = express()

require('./utils/mongodb')
const config = require("./config")


app.use(cors())

app.use("/api", (req, res) => res.json({message: "Health check"}))

const PORT = config.port || 8000
app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`)
})