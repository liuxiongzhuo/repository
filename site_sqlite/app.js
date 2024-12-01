const https=require('https')
const fs=require('fs')
const express=require('express')
const app=express()
const cors=require('cors')
const mainRouter=require('./routes')
const bodyParser=require('body-parser')
// const options={
//     key:fs.readFileSync('/var/lxz/ssl/0031400/certkey.pem'),
//     cert:fs.readFileSync('/var/lxz/ssl/0031400/fullchain.pem')
// }
// app.use((req, res, next) => {
//     res.setHeader(
//         'Content-Security-Policy',
//         "default-src 'self'; style-src 'self' 'unsafe-inline';"
//     );
//     next();
// });
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use('/',mainRouter)
app.get('*',(req,res)=>{
    res.redirect('/')
})
app.listen(80,()=>{
    console.log('The server is listening on port 80.');
    
})
// app.listen(3000,()=>{
//     console.log('The server is listening on port 3000.');
    
// })
// https.createServer(options,app).listen(443,()=>{
//     console.log('server is running on 443');
// })