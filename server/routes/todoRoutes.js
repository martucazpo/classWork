const router = require("express").Router()
const controllers = require("../controllers")

router.route("/add").post(controllers.addtodo)
router.route("/getall").post(controllers.getalltodos)

module.exports = router