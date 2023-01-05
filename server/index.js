import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('mongodb connected')
})

app.listen(PORT,()=>{
    console.log(`${PORT} port running`)
})