const router = require("express").Router()
const authRoutes = require("./authRoutes")
const todoRoutes = require("./todoRoutes")

router.use("/auth", authRoutes)
router.use("/todo", todoRoutes)

module.exports = router