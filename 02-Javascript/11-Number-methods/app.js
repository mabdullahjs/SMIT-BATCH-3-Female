// console.log("hello world");



// round
// ceil
// floor
// random
// tofixed
// parseint
// parsefloat
// convert string to number


// let num = 10.9
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));




// console.log(Math.ceil(Math.random()*5));
// console.log(Math.ceil(Math.random()*10));



// let num = 10.34534534
// console.log(num.toFixed(2));



// let num = "34.3424"
// // console.log(typeof Number(num));
// // console.log(typeof num);

// console.log(Number(num));
// console.log(+num);
// console.log(parseInt(num));
// console.log(parseFloat(num));

// // Nan not a number



// 1 matlb masjid
// 2 matlb chand

const para = document.querySelector("#result");
const img = document.querySelector("img");
function toss(userInput){
    console.log(userInput);
    let randomNumber = Math.ceil(Math.random()*2)
    console.log(randomNumber);

    if((userInput === "masjid" && randomNumber === 1) || (userInput === "chand" && randomNumber === 2)){
        console.log("user toss jeet gayaa");
        para.innerHTML = "You won the toss!"
        
    }else {
        console.log("user toss haar gaya");
        para.innerHTML = "You loss the toss!"
        
    }



    if(randomNumber === 1){
        img.src = "https://i.ebayimg.com/images/g/KQYAAOSwUf5hoOxr/s-l400.jpg"
    } else {
        img.src = "https://i.ebayimg.com/images/g/7gcAAOSw6A1hoOxs/s-l1200.jpg"
    }
    
}



