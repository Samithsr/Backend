const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Samith And Sachin Sujan are it?'
    })
})
 
app.listen(5000)