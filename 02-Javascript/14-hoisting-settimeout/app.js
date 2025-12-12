// console.log("hello world");
// var username;

// hoisting

// console.log(username); // undefined
// console.log(city); // error

// var username = "abdullah"
// let city = "karachi";
// const age = 22;

// greetUser()
// function greetUser() {
//   console.log("hello abdullah");
// }

// function ka reference pass krna

// setTimeout(greetUser , 1000)
// let timeout = setTimeout(function () {
//   console.log("console after 2 seconds");
// }, 2000);

// let time = 1;
// let interval = setInterval(function () {
//   console.log(`after ${time} second`);
//   time += 1;
// }, 1000);

// function stopInterval() {
//   clearInterval(interval);
// }
// function stopTimeout() {
//   clearTimeout(timeout);
// }

const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minute");

let timer;
let second = 0;
let minute = 0;

function startWatch() {
  console.log("start watch");

  timer = setInterval(function () {
    if (second === 59) {
      second = 0;
      minute += 1;
      minutes.innerHTML = "0" + minute;
    } else {
      second += 1;
    }
    if (second < 10) {
      seconds.innerHTML = "0" + second;
    } else {
      seconds.innerHTML = second;
    }
  }, 500);
}

function stopWatch() {
  clearInterval(timer);
}

function resetWatch() {
  second = 0;
  minute = 0;

  clearInterval(timer);
  seconds.innerHTML = "00";
  minute.innerHTML = "00";
}

// let age = 22; // global variable
// function stopWatch(){
//     let username = "abdullah" // local variable
//     console.log(username , age);
// }

// // console.log(username);
// stopWatch()
// console.log(age);
