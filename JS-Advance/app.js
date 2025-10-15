//reverse string function that is function expression

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 


//function returns the largest number in an array

const largeNumber = function (array) {

   let large = array[0];

   for (let i = 0; i < array.length; i++){
      if(array[i] > large) {
         large = array[i];
      }
   }

   return large;
}

console.log(largeNumber([2,3,4,5,25,1,3,11,12,13]))

//myMap' function like Array.map


function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

let numbers = [1, 2, 3];
let doubled = myMap(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6]

// Function to check if a string is palindrome

function isPalindrome(string) {
  let reversed = string.split('').reverse().join('');
  return string === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));

// Function counts vowels in a string

function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Ramaswamy")); 

// ternary operator to check age > 18 and print 'Adult' or 'Minor'

const name = "Ram"
const age = 22;

if(age > 0 && age < 13){
  console.log(`${name} is a Minor`);
}else if(age >= 13 && age <= 22){
  console.log(`${name} is a Adult`);
}
//nested object and print inner property.

let person = {
  name: "Ram",
  address: {
    city: "Salem",
    pincode: 636007
  }
};

console.log(person.address.city);

//forEach to print all elements of an array

let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

//function that sums all numbers in array using reduce

function sumArray(array) {
  return array.reduce((total, num) => total + num, 1);
}

console.log(sumArray([1, 2, 3, 4])); 

//Combine two arrays using spread operator

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combined = [...array1, ...array2];
console.log(combined); 


