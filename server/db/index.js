//const config = require("../config")
const { MONGO_URI, PORT } = require("../config")
const mongoose = require("mongoose")


module.exports = (app) =>{
    mongoose.connect(MONGO_URI).then(app.listen(PORT, ()=>console.log("Tiny ears now listen.")))
}