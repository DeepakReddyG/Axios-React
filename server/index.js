const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/insert', (request, response)=>{
    console.log("The client value are: ");
    console.log(request.body); 
})

app.listen(8081)

