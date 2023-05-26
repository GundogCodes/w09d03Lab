// creating a schema for the vegetables
//we need mongoose

const mongoose =  require('mongoose')

//blueprint for object
const vegetablesSchema = mongoose.Schema({
    name:{type:String, require: true},
    color:{type:String, require: true},
    readyToEat:Boolean
})

// creating a model from blueprint
const Vegetable = mongoose.model('Vegetable',vegetablesSchema)

module.exports = Vegetable