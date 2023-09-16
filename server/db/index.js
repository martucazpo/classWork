const mongoose = require("mongoose")

module.exports = (app) => mongoose.connect("mongodb://127.0.0.1/classylogin").then(() => {
    console.log("The goose is on the loose")
    app.listen(8000, () => console.log("Tiny ears now listen on 8000"))
}).catch(err => console.log(err))