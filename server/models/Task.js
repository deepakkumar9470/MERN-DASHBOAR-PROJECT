const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const TaskSchema = new mongoose.Schema({
    title  : {
        type: String,
        
    },
    desc  : {
        type: String,
        
    },
   
  
},{timestamps : true})





module.exports = mongoose.model('Task', TaskSchema)
