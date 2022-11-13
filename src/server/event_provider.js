const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: '123Rabbit',
    database: 'creative_business',
})

app.get('/home/event', (req, res) => {
    const sqlGet =
        'SELECT id, title, firstImageUrl FROM creative_business.events ORDER BY id DESC LIMIT 0,3'
    db.query(sqlGet, (error, result) => {
        res.send(result)
    })
})

// list event based on recently added
app.get('/event/get', (req, res) => {
    const sqlGet =
        'SELECT id, title, firstImageUrl FROM creative_business.events ORDER BY id DESC;'
    db.query(sqlGet, (error, result) => {
        res.send(result)
    })
})

app.get('/event/get/:id', (req, res) => {
    const { id } = req.params
    const sqlGet = 'SELECT * FROM creative_business.events WHERE id=?'
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})

app.listen(5001, (err) => {
    if (!err) {
        console.log('event_provider server is running on port 5001')
    } else {
        console.log('Database connection failed for event_provider')
    }
})
