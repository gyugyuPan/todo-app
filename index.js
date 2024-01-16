const express=require("express");
//init app
const app=express();
//view engine
app.set("view-engine", "ejs");

//listen to the server
const Port=8000;
app.listen(Port, ()=>{console.log(`App running on port ${Port}`)});