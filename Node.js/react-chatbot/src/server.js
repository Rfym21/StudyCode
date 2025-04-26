const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const indexRoutes = require("./routes/index.js")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))
app.use("/v1", indexRoutes)

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000")
})

