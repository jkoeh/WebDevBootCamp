
var todosRoute = "api/todos/"
//list todos on page load
document.addEventListener("DOMContentLoaded", function () {
    axios.get(todosRoute)
        .then(addTodos)
        .catch(handleErr)

    document.querySelector('.list').addEventListener('click', function (e) {
        e.stopPropagation();
        if (e.target && e.target.nodeName == 'SPAN') {
            removeTodo(e)           
        }
    })

    document.querySelector("#todoInput").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            createTodo(e);
        }
    })
    document.querySelector('.list').addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == 'LI') {
            updateTodo(e);
        }
    })


});

function updateTodo(e){
    var id = e.target.todoId;
    var status = e.target.completed;
    axios.put(todosIdRoute(id), {completed: !status})
        .then(function(res){
            e.target.classList.toggle('done')
            e.target.completed = !status;
        })
        .catch(handleErr)

}
function createTodo(e) {
    axios.post(todosRoute, { name: e.target.value })
        .then(function (res) {
            e.target.value = "";
            addTodo(res.data)
        })
        .catch(handleErr)
}

function todosIdRoute(todoId) {
    return todosRoute + todoId
}
function removeTodo(e) {
    var id = e.target.parentElement.todoId;
    axios.delete(todosIdRoute(id))
        .then(e.target.parentElement.remove())
        .catch(handleErr)
}
function addTodos(todos) {
    todos.data.forEach(function (toDo) { addTodo(toDo) });
}

//add todo to list
function addTodo(todo) {
    var list = document.querySelector('.list');
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.appendChild(document.createTextNode('X'));
    li.todoId = todo._id;
    li.completed = todo.completed;
    li.setAttribute("class", "task");
    li.appendChild(document.createTextNode(todo.name));
    li.appendChild(span);
    list.appendChild(li);
    if (todo.completed) {
        li.classList.add("done");
    }

}
function handleErr(err) {
    console.log(err);
}