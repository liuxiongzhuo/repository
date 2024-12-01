const express=require('express')
const router=express.Router()
const wordRouter=require('./word')
const blogRouter=require('./blog')
const authenRouter=require('./authen')
router.use('/word',wordRouter)
router.use('/blog',blogRouter)
router.use('/authen',authenRouter)
module.exports=router