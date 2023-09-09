const router = require("express").Router()
const authRouter = require("./authRoutes")

router.use("/auth", authRouter)

module.exports = router