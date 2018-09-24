var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');


// router.get('/', function (req, res) {
//     db.Todo.find()
//         .then(function (todo) {
//             res.json(todo);
//         })
//         .catch(function (err) {
//             res.send(err);
//         })
// });
// router.post('/', function (req, res) {
//     db.Todo.create(req.body)
//         .then(function (newToDo) {
//             console.log(newToDo)
//             res.status(201).json(newToDo);
//         })
//         .catch(function (err) {
//             console.log(newToDo)
//             res.send(err);
//         })
// });

//when two routes only differ by action such as get an post, we can combined them into a single routing.
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)
// router.get('/:todoId', function (req, res) {
//     db.Todo.findById(req.params.todoId)
//         .then(function (foundToDo) {
//             res.json(foundToDo);
//         })
//         .catch(function (err) {
//             res.send(err)
//         })
// });
// router.put('/:todoId', function (req, res) {
//     //new true indicate that response will send back the updated object instead of the old object
//     db.Todo.findOneAndUpdate({ _id: 　req.params.todoId }, req.body, { new: true })
//         .then(function (todo) {
//             res.json(todo);
//         })
//         .catch(function (err) {
//             res.send(err)
//         })
// });
// router.delete('/:todoId', function (req, res) {
//     db.Todo.findByIdAndDelete(req.params.todoId)
//         .then(function () {
//             res.json({ message: "deleted" });
//         })
//         .catch(function (err) {
//             res.send(err)
//         })
// });
module.exports = router;