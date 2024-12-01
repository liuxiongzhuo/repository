const express=require('express')
const jsonwebtoken=require('jsonwebtoken')
const secretKey='asdfiuahsdofmiahsdofiu'
const router=express.Router()
router.post('/login',(req,res)=>{
    try {
        if (req.body.username=='lxz07'&&req.body.password=='aa753951') {
            res.json({status:0,data:jsonwebtoken.sign({id:0,role:0},secretKey,{expiresIn:'2d'})})
        }else{
            res.json({status:2})
        }
    } catch (error) {
        res.json({status:1,data:error})
    }
})
module.exports=router