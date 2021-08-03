var express = require("express");
var bodyParser = require("body-parser"); // doc cac req tu nguoi dung
var morgan = require("morgan"); // log cac req
var app = express();
var port = process.env.PORT || 5000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json); 
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan("dev"));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index");
});
app.listen(port, function(){
    console.log("App listening on port: " + port);
})