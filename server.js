const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
require('dotenv').config()
const port = 3000
const app = express()

app.get('/', (req,res) => {
    res.send(`<h1>Hello World</h1>`)
})

app.listen(port, ()=>{
    console.log(`Listening on ${port} yoooo`)
})