import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./router.js";
import fileupload from "express-fileupload"
dotenv.config()

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI || "mongodb+srv://admin:admin@cluster0.qhlil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express()
app.use(express.json())
app.use(express.static("static"))
app.use(fileupload({}))
app.use('/api', router)

async function start() {
    try {
        await mongoose.connect(DB_URI)
        app.listen(PORT, () => console.log(`app start at port`, PORT))
    } catch (e) {
        console.log(e.message)
    }
}

start()
