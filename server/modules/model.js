const mongoose = require('mongoose')
const Schema = mongoose.Schema

//categories => field => [type, color]
const categoriesModel = new Schema({
    type:{type: String, default: 'Investment'},
    color: {type: String, default: '#FCBE44' }
})


//transactions => field => [name, type, amount, date]
const transactionModel = new Schema({
    name: {type: String, default: 'Anonymous'},
    type: {type: String, default: 'Investment'},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const Categories = mongoose.model('categories',categoriesModel)
const Transaction = mongoose.model('transaction',transactionModel)

exports.default = Transaction
module.exports={
    Categories,
    Transaction
}