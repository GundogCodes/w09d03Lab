const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Vegetable = require('./models/vegetables') //veg object
require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()



app.use(express.urlencoded({extended: true}))
//This is called middleware, which needed to get req.body when we processing forms (build a server side render (ssr) website, sending html files)

//setting up the view Engine
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

//connect mongoeDB
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open',()=>{
    console.log('connected to mongoose')
})
app.get('/', (req,res) => {
    res.send(`<h1>Hello World</h1>`)
})

//INDEX
app.get('/vegetables', async (req,res) => {
    try{
        const foundVeges = await Vegetable.find({})
        res.render('./views/Index.jsx',{
            vegetables:foundVeges
        })
    } catch(error){
        res.status(400).send({message: error.message})
    }
})


app.listen(port, ()=>{
    console.log(`Listening on ${port} yoooo`)
})