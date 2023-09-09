const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>res.sendFile(__dirname+ "/public/index.html"))

app.listen(3000, ()=>console.log("Client is super engaged!"))