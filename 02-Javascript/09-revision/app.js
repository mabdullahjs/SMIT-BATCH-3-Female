// console.log("hello world");

// let username = "abdullah";
// username = "Ammar"
// console.log(username);

// const username = "mabdullah"
// console.log(username);

// string "hello" "1231" '434#$@'
// number 23 23.534
// boolean true / false
// array ["apple" , 21 , true]

// let username = ["Abdullah" , "usman"];
// console.log(typeof(username));

// function testing() {
//   console.log("hello world 1");
//   console.log("hello world 2");
//   console.log("hello world 3");
// }

// testing()
// testing()

// parameter
// argument

// function greetUser(username){
//     return `hello ${username}`
// }

// console.log(greetUser("abdullah"));
// console.log(greetUser("usman"));

// for(let i = 1; i <= 1000; i++){
//     console.log(`29 * ${i} = ${29*i}`);

// }

// let fruit = ['apple' , 'banana' , 'orange' , 'mango'];

// length 4
// index 0-3

// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);

// for(let i = 0 ; i < fruit.length; i++){
//     console.log(fruit[i]);

// }

// user ki age 18 ya 18 sa bari ha to usko gym ma admission miljayega. 15 sa 17 tk ha to 1000 extra pay krka admission milaiga. 15 sa choti ha to admission nahi milaiga.

// let age = 17;

// if(age >= 18){
//     console.log("welcome to my gym");

// } else if(age >= 15){
//     console.log("1000 rs do kisi ko btana mat.");

// } else {
//     console.log("dafa hojao");

// }

// DOM manipulation

// html element ko js ka through change krna

// input sa value lena
// btn click pa js func call krwana
// array ko screen pa render krna.

// const heading = document.querySelector("#heading");
// const para = document.querySelector("#para");

// console.log(heading.innerHTML);
// console.log(para.innerHTML);

// function changetext() {
//   heading.innerHTML = "change through js";
//   para.innerHTML = "change lorem ipsum";
// }



// const list = document.querySelector("#list");

// list.innerHTML = `
// <li>home</li>
// <li>about</li>
// <li>contact</li>

// `


const input = document.querySelector("#input");
const ol = document.querySelector("#list");

function renderTodo(){
    ol.innerHTML = ""
    for(let i = 0; i < allTodos.length; i++){
        ol.innerHTML += `<li>${allTodos[i]} 
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
}


const allTodos = []
function getVal(){
    allTodos.push(input.value);
    renderTodo()
    input.value = "";
    
}


function deleteTodo(index){
    console.log("todo deleted" , index);
    allTodos.splice(index , 1)
    renderTodo()
    
}
function editTodo(index){
    console.log("todo edited" , index);
    const updatedVal = prompt("enter updated value");
    allTodos[index] = updatedVal
    renderTodo()
    
}

// let fruit = ['apple' , 'banana' , 'orange'];
// console.log(fruit);
// fruit[1] = "updated"
// console.log(fruit);