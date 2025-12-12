// console.log("hello world");

// javascript ka undar har aik cheez aik object ha.

// console.log(typeof ["hello"]);

// collection of keys and properties

// let fruits = ["apple" , "banana" , "orange"];
// console.log(fruits[1]);

// key / property

// const user = {
//     username: "Abdullah",
//     age: 22,
//     city: "Karachi",
//     isLoggedIn: true
// }

// console.log(user);
// console.log(user.username);
// console.log(user['username']);

// const user = {
//     fullName: "Muhammad Abdullah khan",
//     age: 22,
//     isLoggedIn: true,
//     hobbies: ["swimming" , "cricket" , "sleeping"],
//     greetUser: function (){
//         console.log("this inside object.." , this);

//         return `hello ${this.fullName}`

//     }

// }
// user.greetUser()
// // console.log(user.greetUser());
// console.log(this);

// // window.alert("hello")
// // window.console.log("hello world")

// const user = {
//     fullName: "Abdullah",
//     age: 22,
//     email: "mabdullah@gmail.com",
//     isLoggedIn: true
// }

// user.fullName = "Muhammad Abdullah"
// user.newProp = "new property"
// delete user.email
// console.log(user);

// this keyword
// object delete update add krni properties

//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${fullname}'

// const city = {
//     name: "karachi",
//     population: 200000,
//     province: "Sindh",
//     cityGreeting: function (){
//         return `hello ${this.lastname}`
//     }
// }

// city.fullname = "kolachi"
// city.lastname = "hello"
// delete city.name
// console.log(city);

// console.log(city.cityGreeting());

// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi

// let user = {
//     fullName: "Muhammad Abdullah",
//     email: "mabdullah@gmail.com",
//     age: 21,
//     isLoggedIn: true,
//     greetUser : function (){
//         return `hello ${this.fullName}`
//     }
// }

// console.log(user.greetUser());
// console.log(user.age);
// console.log(user['age']);

// const username = document.querySelector("#username");
// const useremail = document.querySelector("#useremail");
// const userage = document.querySelector("#userage");
// const usercity = document.querySelector("#usercity");

// function getVal(){
//     // console.log(username.value);
//     // console.log(useremail.value);
//     // console.log(userage.value);
//     // console.log(usercity.value);

//     const obj = {
//         user: username.value,
//         email: useremail.value,
//         age: userage.value,
//         city: usercity.value
//     }

//     console.log(obj);

// }

// array of object

// [{} , {} , {}]

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     email: "alice@example.com"
//   },
//   {
//     id: 2,
//     name: "Bob",
//     email: "bob@example.com"
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     email: "charlie@example.com"
//   }
// ];

// // console.log(users[0]);
// const div = document.querySelector(".container");

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
//     div.innerHTML += `<p>${users[i].name}</p>`

// }

// const employees = [
//   { name: "John", salary: 55000 },
//   { name: "Maya", salary: 48000 },
//   { name: "Karan", salary: 65000 },
//   { name: "Reena", salary: 70000 },
//   { name: "Dev", salary: 52000 },
//   { name: "Hina", salary: 45000 },
//   { name: "Vishal", salary: 75000 },
//   { name: "Rita", salary: 35000 },
//   { name: "Amit", salary: 90000 },
//   { name: "Sunil", salary: 60000 },
// ];

// const div = document.querySelector(".container");

// let total = 0;
// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i]);
//   total += employees[i].salary;
//   if (employees[i].salary >= 50000) {
//     div.innerHTML += `<div class="children">
//     <h1>Employee Name: ${employees[i].name}</h1>
//     <h3>Employee Salary: ${employees[i].salary}</h3>
//     </div>`;
//   }
// }

// const users = [
//   { name: "Ali", email: "ali@gmail.com" },
//   { name: "Rita", email: "rita@gmail.com" },
//   { name: "Dev", email: "dev@yahoo.com" },
//   { name: "Meera", email: "meera@gmail.com" },
//   { name: "Raj", email: "raj@outlook.com" },
//   { name: "Tina", email: "tina@gmail.com" },
//   { name: "Karan", email: "karan@gmail.com" },
//   { name: "Simran", email: "simran@yahoo.com" },
//   { name: "Pooja", email: "pooja@gmail.com" },
//   { name: "Vikas", email: "vikas@gmail.com" }
// ];

// const players = [
//   { name: "Rohit", score: 50 },
//   { name: "Virat", score: 80 },
//   { name: "Dhoni", score: 70 },
//   { name: "Hardik", score: 60 },
//   { name: "Gill", score: 55 },
//   { name: "Surya", score: 75 },
//   { name: "Iyer", score: 65 },
//   { name: "Pant", score: 58 },
//   { name: "Rahul", score: 72 },
//   { name: "Bumrah", score: 40 }
// ];

// const items = [
//   { item: "Pen", quantity: 20, price: 10 },
//   { item: "Notebook", quantity: 5, price: 50 },
//   { item: "Bag", quantity: 2, price: 300 },
//   { item: "Bottle", quantity: 10, price: 40 },
//   { item: "Pencil", quantity: 30, price: 5 },
//   { item: "Marker", quantity: 15, price: 15 },
//   { item: "Eraser", quantity: 25, price: 3 },
//   { item: "Sharpener", quantity: 18, price: 6 },
//   { item: "Calculator", quantity: 4, price: 200 },
//   { item: "File", quantity: 12, price: 20 }
// ];

// const courses = [
//   { title: "Math" },
//   { title: "Computer Science" },
//   { title: "Web Development" },
//   { title: "Electrical Engineering" },
//   { title: "Data Structures" },
//   { title: "Artificial Intelligence" },
//   { title: "Machine Learning" },
//   { title: "Cloud Computing" },
//   { title: "Cyber Security" },
//   { title: "Human Computer Interaction" }
// ];

// nested object

// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// console.log(nestedData[0].subcategories[0].products[2].model);
// console.log(nestedData[1].subcategories[0].products[0].item);



// // https://drive.google.com/file/d/1ePUVgnOhU-x9LZn-bekfqAA0Afe9jCVK/view?usp=sharing

//hoisting
