const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Samith And Sachin Sujan are it teams'
    })
})
 
app.listen(5000)