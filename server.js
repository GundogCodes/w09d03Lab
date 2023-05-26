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
    console.log('connected to mongoDB')
})
app.get('/', (req,res) => {
    res.send(`<h1>Hello World</h1>`)
})

//INDEX
app.get('/vegetables', async (req,res) => {
    try{
        const foundVeges = await Vegetable.find({})
        res.render('vegetables/Index',{
            vegetables:foundVeges
        })
    } catch(error){
        res.status(400).send({message: error.message})
    }
})

//NEW 
app.get('/vegetables/new', (req,res) => {
    res.render('vegetables/New')
})

//SHOW
app.get('/vegetable/:id', async (req,res)=>{
    try{
        const foundVege = await Vegetable.findOne({_id: req.params.id})
        res.render('vegetables/Show',{

            vegetable:foundVege
        })
    } catch(error){
        res.status(400).send({message: error.message})
    }
})

//CREATE
app.post('/vegetables', async (req,res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    } 
    try{
        const createdVege =  await Vegetable.create(req.body)
        res.send(createdVege)
    } catch(error){
        res.status(400).send({message: error.message})
    }
})


app.listen(port, ()=>{
    console.log(`Listening on ${port} yoooo`)
})