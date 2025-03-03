const PORT = 2341

const express = require("express")
const cors = require("cors")
const router =require('./router/userRouter')
const performanceRouter =require('./router/perfomance')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/", router)
app.use("/api/v1/", performanceRouter)
app.listen (PORT, () => {
  console.log(`server is up and running ${PORT}`)
})