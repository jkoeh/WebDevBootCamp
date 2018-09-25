
var todosRoute = "api/todos"
//list todos on page load
document.addEventListener("DOMContentLoaded", function () {
    fetch(todosRoute)
        .then(response => response.json())
        .catch(error => console.error('Error', error))
        .then(function (todos) {
            todos.forEach(addTodo)
        })
});
var taskInput = document.querySelector("#todoInput");

//create todo
taskInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        var payload = JSON.stringify({ name : taskInput.value })
        fetch(todosRoute, { method: 'POST', body: payload, headers: {"Content-Type": "application/json; charset=utf-8"}})
            .then(response => response.json())
            .catch(error => console.error('Error', error))
            .then(taskInput.value= "")
            .then(addTodo)
    }
})

//add todo to list
function addTodo(todo) {
    var list = document.querySelector('.list');
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.appendChild(document.createTextNode('X'));
    li.setAttribute("class", "task");
    li.appendChild(document.createTextNode(todo.name));
    li.appendChild(span);
    list.appendChild(li);

}
function handleErr(err) {
    console.log(err);
}