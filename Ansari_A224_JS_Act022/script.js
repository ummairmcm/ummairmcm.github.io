
const txtTodoItem = document.getElementById("txtTodoItem");
const btnAddTask = document.getElementById("txtAddTask");
const lstTodos = document.getElementById("lstTodos");
let todos = []


function display()
{
    let todoItems = ""
    for(let i=0;i<todos.length;i++)
    {
        console.log(todos[i])
        todoItems += "<li>" + todos[i] + "</li>"
    }
    lstTodos.innerHTML = todoItems

}
btnAddTask.addEventListener("click", ()=>{

    console.log(txtTodoItem.value)
    todos.push(txtTodoItem.value)
    console.log(todos)

    display()



})
