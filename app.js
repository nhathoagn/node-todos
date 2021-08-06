var express = require("express");
var bodyParser = require("body-parser"); // doc cac req tu nguoi dung
var morgan = require("morgan"); // log cac req
var mongoose = require("mongoose");
 var setupController = require("./api/Controller/setupController");
 var todoController = require("./api/Controller/todoController");
const config = require("./config");
var app = express();
var port = 5000 ;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan("dev"));

app.set("view engine", "ejs");

setupController(app);
todoController(app);
//db info 
console.log(config.getDBConnectionString());
mongoose.connect(config.getDBConnectionString());

app.get("/", function(req,res){
    res.render("index");
});
app.listen(port, function(){
    console.log("App listening on port: " + port);
})