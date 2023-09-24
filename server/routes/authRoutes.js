const router = require("express").Router()
const controllers = require("../controllers")

router.route("/register").post(controllers.register)
router.route("/login").post(controllers.login)
router.route("/logout").post(controllers.logout)
router.route("/").get(controllers.checkauth, controllers.checkall)

module.exports = router