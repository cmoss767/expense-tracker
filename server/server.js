const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config({path: "./config.env"})
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//db conn
const con = require('./db/connection')


//routes
app.use(require('./routes/route'))

con.then(db =>{
    if(!db) return process.exit(1)

    //listen to http server
    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    })

    app.on('error', err=> console.log(`failed to connect with http server : ${err}`))

}).catch(error=>{
    console.log(`connection failed...${error}`)
})

