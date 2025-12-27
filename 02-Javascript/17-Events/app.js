// function triggerEvent (){
//     console.log("hello event triggered");
    
// }


// const h1 =  document.querySelector("#heading");

// // h1.addEventListener("click" , triggerEvent)

// h1.addEventListener('click' , ()=>{
//     console.log("hello callback");
    
// })

// click
// onmouseover
// onmouseout
// onchange
// submit


// const btn = document.querySelector("#btn");
// btn.addEventListener("mouseover" , function (){
//     console.log("mouseover triggered");
    
// })
// btn.addEventListener("mouseout" , function (){
//     console.log("mouseout triggered");
    
// })


// const img = document.querySelector("#img");

// img.addEventListener("mouseover" , ()=>{
//     img.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940171g57vp25a8k.png"
// })



// img.addEventListener("mouseout" , ()=>{
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2WAnExtUFXg74jTjfvC7aReqFGm5TFdZ4g&s"
// })



// const form = document.querySelector("#form");
// const fullname = document.querySelector("#fullname");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");


// form.addEventListener("submit" , (event)=>{
//     event.preventDefault()
//     console.log(fullname.value);
//     console.log(email.value);
//     console.log(password.value);
    
// })

// bubbling
// capturing

// const ul = document.querySelector(".images");
// const li2 = document.querySelector("#image-2");
// const a1 = document.querySelector("#link-1");
// ul.addEventListener("click" , (event)=>{
//     if(event.target.parentNode.tagName === "LI"){
//         event.target.parentNode.remove()
//         return 
//     }
    
//     console.log("console after if");
    
    
// } , false)
// // li2.addEventListener("click" , (event)=>{
// //     event.stopPropagation()
// //     console.log("li clicked");
    
// // } , false)

// a1.addEventListener("click" , (event)=>{
//     event.preventDefault()
//     console.log("anchor clicked");
    
// })



