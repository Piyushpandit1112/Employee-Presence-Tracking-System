const express=require('express')
//Creating object of class of Router
const router=express.Router();

const authcontrollers=require('../controllers/auth-controller')

const signupSchema=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");

//1st method to route to the pages
// router.get('/',(req,res)=>{
//     res.status(200).send("Home Page in router")
// })

//2nd method
router.route('/').get(authcontrollers.home)

router.route('/register').post( validate(signupSchema) , authcontrollers.register)

router.route('/login').post(authcontrollers.login)


// router.route('/register').get((req,res)=>{
//     res.status(200).send("Registration from router page");
// })
module.exports=router