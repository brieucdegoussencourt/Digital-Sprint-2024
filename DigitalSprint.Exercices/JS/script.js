
/* change HTML element */

document.getElementById("myParagraph").innerHTML = "What the fuck";

/* display variable in console*/

let myName = "Henrique"; 
console.log(myName);

let exchangeRate = 0.93;
console.log(50 * exchangeRate);
console.log(132 * exchangeRate);

/* switch values between variable */

/* var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code here :

/* var c = b
var d = a

a = c
b = d */

/***********Do not change the code below 👇*******/

/// console.log("a is " + a);
/// console.log("b is " + b);

/* call variable type */

let num1 = 57;

console.log(typeof num1); // returns number

let name1 = "Henrique";
typeof name1; // returns string
console.log(typeof name1);

/* call variable length */

const myString = "I am a super hero!";
console.log(myString.length);

/* string method exercices DEV DREAMER #15
 */

const x = "I am wathching Dev Dreamer";
const upperX = x.toUpperCase();
console.log(upperX);

const exp = /Dev Dreamer/;
let result = x.match(exp);
console.log(result);

//string method - template literals - DEV DREAMER #14

let firstname = "Brieuc"
let course = "JavaScript"
let channel = "Dev Dreamer"

let info = `${firstname} is learning ${course} with ${channel}`

console.log(info)

//string method - Exercice # 05B Henrique

const message = "    TASTE THE RAINBOW!  ";
whisper = message.trim().toLowerCase()
console.log (whisper)

const word = "skateboard";
let letterIndex = word.length
console.log (letterIndex)
console.log (word.charAt(9));

let board = word.slice(5, 10)
let beard = board.replace ("o", "e")

console.log (beard)

////Numbers - Exercice # 6 Henrique

let y = Math.floor(Math.random()*20)+1;
console.log (y);

/// Variable - Exercices # 7 Henrique

const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(
  temperature
)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

/* const name = prompt("What is your name?");
const age = prompt("What is your age?");
const place = prompt("Where do you live?");
alert(`Welcome ${name} from ${place}, happy ${age} years old!`); */

/* let vat = prompt("what is your price vat exl?");
console.log(vat*1.21); */

// question A
true && !false;

// question B
false && true;

// question C
!false && !false;

// question D
5 > 3 && !(2 > 1);

// question E
true && !(1 == "1");

// question F
5 !== "5" || false;

// QUESTION 1
!0 && true;

// QUESTION 2

const a = null;
const b = undefined;
const c = 4;

(!a && b) || c;

// QUESTION 3

a == b && c;

// QUESTION 4

!b && "Hello" && c;

console.log((!a && b) || c);