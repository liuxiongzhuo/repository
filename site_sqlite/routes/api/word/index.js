const express=require('express')
const router=express.Router()
const baicizhan=require('../../../data/word/baicizhan.json')
const dictionaryapi=require('../../../data/word/dictionaryapi.json')
const example=require('../../../data/word/example.json')
router.get('/baicizhan',(req,res)=>{
    res.json({status:0,data:baicizhan[req.query.word]})
})
router.get('/dictionaryapi',(req,res)=>{
    res.json({status:0,data:dictionaryapi[req.query.word]})
})
router.get('/example',(req,res)=>{
    res.json({status:0,data:example[req.query.word]})
})
module.exports=router