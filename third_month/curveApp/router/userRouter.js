const {createUser, bulkuser, getUserInfo} = require("../controller/user")

const router = require("express").Router()


// const {Router}= require("express")

router.post("/user",createUser)

router.get("/user/:id", getUserInfo)

router.post("/multiple",bulkuser)


module.exports = router