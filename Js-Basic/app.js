//'Hello World' in console 
console.log('Hellow World');

//aleat box 
console.log('Im a danger');

// 3 variables difference
//var is a function scope
//var is old methdod
var name = "Ram";
//let is moredern and changeable 
//let is block scope 
let age = 22;
// const is cannot be changed
//const is block scope
const city = "Salem"
console.log(name);
console.log(age);
console.log(city);

//numbers add,sub,multiple,division
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//sring to num and num to string
// convert num to string
let numText = "50";
let realNumber = Number(numText);
console.log(realNumber+5);

//convert string to num
let num = 22;
let ageText = String(num);
console.log('Age is ' +ageText)

//object (name, age, hobby) 
let person = {
    name: "Ram",
    age: 22,
    hooby: "coding",
};
console.log(person);
console.log(person.name);

//array with 5 fruits and print the 3rd fruit.
let fruits =[ 'Apple', 'Banana', 'Mango','Grapes'];
console.log(fruits[2]);

//function name, greeting message
function greet(name){
    console.log('Today is a great day!');
}
greet(name);

// if, else  check if a number is positive, negative or zero

let number = 10;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
 //switch case  print day of week based on number 

 let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
}

//loop to print numbers 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

