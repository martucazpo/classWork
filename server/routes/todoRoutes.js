const router = require("express").Router()
const controllers = require("../controllers")

router.route("/add").post(controllers.addtodo)
router.route("/getall").post(controllers.getalltodos)
router.route("/delete").post(controllers.deletetodo)
router.route("/edit").post(controllers.edittodo)

module.exports = router