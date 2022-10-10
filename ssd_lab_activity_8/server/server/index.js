const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userModel = require("./models/user");
const QueryModel = require("./models/Query");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://bbarhate14:Momislove456@cluster0.gloyx9s.mongodb.net/mernTutorial?retryWrites=true&w=majority")

app.get("/getUser", (req,res) =>{
    userModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
app.get("/getQuery", (req,res) =>{
    QueryModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
app.post("/createUser", async(req,res) =>{
    const user = req.body;
    const newUser = userModel(user);
    await newUser.save();
    res.json(user);

});
app.post("/createQuery", async(req,res) =>{
    const Query = req.body;
    const newQuery = QueryModel(Query);
    await newQuery.save();
    res.json(Query);

});



app.listen(3001, () => {
    console.log("Server listening on port 3001");
});