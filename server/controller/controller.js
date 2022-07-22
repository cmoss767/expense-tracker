const model = require('../modules/model')


//post
async function createCategories(req,res){
    const Create = new model.Categories({
        type: 'Savings',
        color: '#1F3B5C'
    })

    await Create.save(function(err){
        if(!err) return res.json(Create)
        return res.status(400).json({message: `Error while creating categories ${err}`})
    })
}

//get
async function getCategories(res, req){
    let data = await model.Categories.find({})

    let filter = await data.map(v=>Object.assign({}, {type: v.type, color: v.color}))

    return res.json(filter)
}

//post transaction
async function createTransaction(req, res){
    if(!req.body) return res.status(400).json(`Post http data not provided`)
    let {name, type, amount} = req.body

    const create = await new model.Transaction({
        name,
        type,
        amount,
        date: new Date()
    })
    create.save(function(err){
        if(!err) return res.json(create)
        return res.status(400).json({message: `Err while creating transaction ${err}`})
    })
}

//get transaction
async function getTransaction(req,res){
    let data = await model.Transaction.find({})
    return res.json(data)
}

//delete transaction
async function deleteTransaction(req, res){
    if(!req.body) return res.status(400).json({message: `Request boyd not found`})
    await model.Transaction.deleteOne(req.body, function(err){
        if(!err) res.json('Record deleted')
    }).clone().catch(function(err){res.json('error while deleting transation Record')})
}

module.exports = {
    createCategories,
    getCategories,
    createTransaction,
    getTransaction,
    deleteTransaction
}