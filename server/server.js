require('dotenv').config()


const express=require('express')
const app=express()

const authRoute=require('./router/auth-router')
const contactRoute=require("./router/contact-router");
//It helps in parsing the json data from the request

const connectDB=require("./utils/db")
const errorMiddleware = require('./middlewares/error-middleware')

app.use(express.json())
app.use('/api/auth',authRoute);
app.use('/api/form',contactRoute);

app.get('/',(req,res)=>{
    res.status(200).send("Hello World")
})

// app.get('/register',(req,res)=>{
//     res.status(200).send("Welcome to registration page")
// })

app.use(errorMiddleware);


const PORT=3000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App started at the server ${PORT}`)
    })

})
