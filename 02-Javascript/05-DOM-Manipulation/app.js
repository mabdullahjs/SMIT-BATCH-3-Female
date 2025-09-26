// console.log("Hello world");

// const head = document.querySelector("#head");
// head.innerHTML = "Hello Pakistan";

// const para = document.querySelector("#para");
// para.innerHTML = "changed through javascript."

// function greetUser(){
//     console.log("hello abdullah");

// }

// const para = document.querySelector("#para");

// para.innerHTML = "testing"
// para.style.backgroundColor = "red"
// para.style.color = "white"
// para.style.padding = "20px"

// function changeStyle() {
//   para.style.backgroundColor = "red";
//   para.style.color = "white";
//   para.style.padding = "20px";
// }


// const head = document.querySelector("#head");
// function changeText(){
//     console.log(head.innerHTML);
//     if(head.innerHTML === "Hello world"){
//         head.innerHTML = "Hello Pakistan"
        
//     }else {
//         head.innerHTML = "Hello world"

//     }
// }

// const body = document.querySelector("body")
// const head = document.querySelector("#color-head")
// function changeColor(color){
//     console.log("color changed" , color);
//     body.style.backgroundColor = color
//     head.innerHTML = color
//     if(color === "white"){
//         head.style.color = "black"
//     }else {
//         head.style.color = "white"

//     }
    
// }



const input = document.querySelector("#fullname");
const h1 = document.querySelector("#result");
// console.log(input.value);

function getVal(){
    console.log(input.value);
    h1.innerHTML = "Hello " + input.value
    
    input.value = ""
    
}

function clearHead(){
    h1.innerHTML = ""
}