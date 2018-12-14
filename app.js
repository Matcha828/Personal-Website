var express = require("express"),
     bodyParser = require("body-parser"),
     mongoose = require("mongoose");



var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",function (req,res) {
   res.render("landing");
});

app.listen(process.env.PORT||3000,process.env.IP,function () {
    console.log("Server is running");
});