const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:' Sujan are  asdyvasdyaskudvuyasvdkyasit teams?'
    })
})
 
app.listen(5000)