//Task 1

let user = {
    city: "Minsk",
    country: "Belarus",
    population: 2049000,
    stadium: true
}

//Task 2

let height = 40;
let width = 70;
let result = height * width;
console.log(result)

//Task 3

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let result = time * (speedOfFirst + speedOfSecond);
console.log(result)

//Task 4

const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber < 20) {
    console.log("randomNumber меньше 20") 
}else if(randomNumber > 50) {
console.log("randomNumber больше 50")
}else{
console.log("randomNumber больше 20, и меньше 50") 
}

//Task 5

switch(randomNumber) {
    case randomNumber < 20:
     console.log("randomNumber меньше 20");
     break;
    case randomNumber > 50:
     console.log("randomNumber больше 50");
     break;
default:
        console.log("randomNumber больше 20, и меньше 50"); 
        break;
}