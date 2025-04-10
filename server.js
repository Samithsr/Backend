const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Sujan'
    })
})

app.listen(5000)