const mangoose = require('mongoose')
const Budget_Schema = new mangoose.Schema({
    title:{
        type: String,
        required: true,
    },
    budget:{
        type: Number,
        required: true,
    },
    color:{
        type: String,
        required: true,
        match: /^#[0-9A-Fa-f]{6}$/,
    }
},{collection: 'personalbudget'})

module.exports = mangoose.model('personalbudget', Budget_Schema)