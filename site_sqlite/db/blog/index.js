const sqlite3=require('sqlite3')
const path=require('path')
const db=new sqlite3.Database(path.join(__dirname,'db.sqlite3'),sqlite3.OPEN_READWRITE|sqlite3.OPEN_CREATE,(err)=>{
    if (err) {
        console.log(err);        
    }else{
        console.log('Connect to the database.');
    }
})
function run(sql,params=[]) {
    return new Promise((resolve,reject)=>{
        db.all(sql,params,(err,rows)=>{
            if (err) {
                console.log(err);
                reject(err)
            }else{
                resolve(rows)
            }
        })
    })
}
// function all(sql,params=[]) {
//     return new Promise((resolve,reject)=>{
//         db.all(sql,params,(err,rows)=>{
//             if (err) {
//                 console.log(err);
//                 reject(err)
//             }else{
//                 resolve(rows)
//             }
//         })
//     })
// }
// function get(sql,params=[]) {
//     return new Promise((resolve,reject)=>{
//         db.get(sql,params,(err,row)=>{
//             if (err) {
//                 console.log(err);
//                 reject(err)
//             }else{
//                 resolve(row)
//             }
//         })
//     })
// }
// function close(sql,params=[]) {
//     return new Promise((resolve,reject)=>{
//         db.close((err)=>{
//             if (err) {
//                 console.log(err);
//                 reject(err)
//             }else{
//                 console.log('Database is closed.');
//                 resolve()
//             }
//         })
//     })
// }
module.exports={
    run
}