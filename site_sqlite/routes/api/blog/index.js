const express = require('express')
const router = express.Router()
const db = require('../../../db/blog')
const jsonwebtoken = require('jsonwebtoken')
const secretKey = 'asdfiuahsdofmiahsdofiu'
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (jsonwebtoken.verify(token, secretKey)) {
        next()
    } else {
        res.json({ status: 2 })
    }
}
router.get('/list', async (req, res) => {
    try {
        const results = await db.run('SELECT id,title,brief,date FROM posts WHERE category = ?', [req.query.category])
        results
        res.json({ status: 0, data: results })
    } catch (error) {
        res.json({ status: 1,data:error  })
    }
})
router.get('/query', async (req, res) => {
    try {
        const results = await db.run('SELECT * FROM posts WHERE id = ?', [req.query.id])
        res.json({ status: 0, data: results })
    } catch (error) {
        res.json({ status: 1,data:error })
    }
})
router.post('/newPost', authenticateToken, async (req, res) => {
    try {
        const date = new Date()
        const id = parseInt((await db.run('SELECT * FROM config WHERE title = ?', ['postsNum']))[0].content)
        await db.run('INSERT INTO posts (title,brief,content,date,category,id) VALUES (?,?,?,?,?,?)', [req.body.title, req.body.brief, req.body.content, `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 0, id])
        await db.run('UPDATE config SET content = ? WHERE title = ?', [id + 1, 'postsNum'])
        res.json({ status: 0 })
    } catch (error) {
        res.json({ status: 1, data: error })
    }
})
router.get('/deletePost', authenticateToken, async (req, res) => {
    try {
        const id = req.query.id
        const results =await db.run('SELECT * FROM posts WHERE id = ?',[id]) 
        if (!results.length) {
            res.json({status:1,data:'id not exists.'})
            return
        }
        await db.run('DELETE FROM posts WHERE id = ?', [id])
        res.json({ status: 0 })
    } catch (error) {
        res.json({ status: 1, data: error })
    }
})
router.post('/updatepost', authenticateToken, async (req, res) => {
    try {
        let results=await db.run('SELECT * FROM posts WHERE id = ?',[req.body.id])
        if (!results.length) {
            console.log(req.body.id);
            res.json({status:1,data:'id not exists.'})
            return
        }
        await db.run('UPDATE posts SET (title,brief,content,date,category) = (?,?,?,?,?) WHERE id = ?', [req.body.title, req.body.brief, req.body.content, req.body.date, req.body.category, req.body.id])
        res.json({ status: 0 })
    } catch (error) {
        res.json({ status: 1, data: error })
    }
})
module.exports = router