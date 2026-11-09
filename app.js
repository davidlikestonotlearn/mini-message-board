const express = require("express")
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true })); // Middleware to recieve data

app.use("/", indexRouter)







app.listen(3000, () => console.log("Running on http://localhost:3000"));