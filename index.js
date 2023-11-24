const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(3000,()=>{
    console.log("Server listening at port 3000")
})