const dotenv=require('dotenv')
dotenv.config()
const express=require('express')


const Connectdb=require('./config/db')


Connectdb()
const app=express()
app.use(express.json())
const routes=require('./routes/routes')
app.use('/student',routes)

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('connected')
})