const {createPerformance} = require("../controller/performance")

const performanceRouter = require("express").Router()


// const {Router}= require("express")

performanceRouter.post("/user/:employeeId",createPerformance)


// router.post("/multiple",bulkuser)


module.exports = performanceRouter