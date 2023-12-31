const express = require("express")
const app = express()
app.locals.auth = {}

const cors = require("cors")
const routes = require("./routes")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

require("./db")(app)