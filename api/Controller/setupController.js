var Todo = require("../Models/todoModels");

module.exports = function (app){

    app.get("/api/setupTodo", function (req,res){

        //setup seed data
        var seedTodo = [
            {
                text:"Hoc Node.js",
                isDone: false
            },
            {
                text:"Hoc Angular.js",
                isDone: false
            },
            {
                text:"Viet ung dung Todo",
                isDone: false
            }
        ];
        Todo.create(seedTodo, function(err, results){
            res.send(results);
        });
    });
}