var inp = document.getElementById("inp");
var list = document.getElementById("list");
var todoList = [];

function addTodo() {
    if (inp.value == "") {
        alert("Please ENter value or Text");
        return;
    }
    todoList.push(inp.value);
    inp.value = "";
    render(); 
}
function render() {
    list.innerHTML = "";
    for (var i = 0; i < todoList.length; i++) {
        list.innerHTML += `<li class="lia">${todoList[i]} <button onclick="editTodo(${i})" ><i class=" fa-solid fa-pen-to-square "></i></button>
        <button onclick="deletetodo(${i})"><i class="fa-solid fa-delete-left"></i></button> </li>`;
    }
}
function editTodo(indexNum) {
    todoList[indexNum] = prompt("enter your new value");
    render();
}
function deletetodo(indexNum) {
    todoList.splice(indexNum, 1);
    render();
}
function Reset() {
    todoList = [];
    list.innerHTML = "";
}