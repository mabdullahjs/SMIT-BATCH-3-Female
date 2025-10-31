// console.log("hello world");

// CRUD

// Create
// read
// update
// delete []


const input = document.querySelector("#input");
const ol = document.querySelector("ol");
const allTodos = [];

function addTodo(){
    ol.innerHTML = ""
    allTodos.push(input.value);

    for(let i = 0; i < allTodos.length; i++){
        ol.innerHTML += `<li>${allTodos[i]}
        <button onclick="deleteTodo()">delete</button>
        <button onclick="editTodo()">edit</button>
        </li>`
    }
    



    input.value = ""
}


function deleteTodo(){
    console.log("todo deleted");
    
}
function editTodo(){
    console.log("todo edited");
    
}