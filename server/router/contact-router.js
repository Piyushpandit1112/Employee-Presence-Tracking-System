const express=require('express')
//Creating object of class of Router
const router=express.Router();

const contactForm=require('../controllers/contact-controller');

router.route("/contact").post(contactForm);

module.exports=router;