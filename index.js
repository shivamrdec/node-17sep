const express = require('express');
const connect = require('./connection');
const student = require('./routes/student')
const app = express();
connect();
app.use(student)
app.use(express.json())




app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server is running on 3000')
    }
})