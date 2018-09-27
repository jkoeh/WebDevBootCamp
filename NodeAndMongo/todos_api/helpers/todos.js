var db = require('../models');

//put all method under class exports
exports.getTodos = function (req, res) {
    db.Todo.find()
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.status(400);
            res.send(err);
        })
}
exports.createTodos = function (req, res) {
    db.Todo.create(req.body)
        .then(function (newToDo) {
            res.status(201).json(newToDo);
        })
        .catch(function (err) {
            res.status(400);
            res.send(err);
        })
}
exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (foundToDo) {
            res.json(foundToDo);
        })
        .catch(function (err) {
            res.status(400);
            res.send(err)
        })
}
exports.updateTodo = function (req, res) {
    //new true indicate that response will send back the updated object instead of the old object
    db.Todo.findOneAndUpdate({ _id: 　req.params.todoId }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.status(400);
            res.send(err)
        })
}
exports.deleteTodo = function (req, res) {
    db.Todo.findByIdAndDelete(req.params.todoId)
        .then(function () {
            res.json({ message: "deleted" });
        })
        .catch(function (err) {
            res.status(400);
            res.send(err)
        })
}


module.exports = exports;