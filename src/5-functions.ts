/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
// function add(x, y) {
//     return x + y;
// }
function add(x: number, y:number, z? :number) : number {
  return x + y;
}

console.log(add(2,3));

// function expression
// const addEx = function (x, y) {
//     return x + y;
// };

const addEx = function(x: number, y:number) : number {
  return x + y;
}

// arrow function
// const addArrow = (x, y) => x + y;
const addArrow = (x: number, y: number) : number => x + y;

console.log(addArrow(2,3))

// function with no return value
// const hello = (name) => console.log("hello " + name)
const hello = (name : string) : void => console.log("hello" + name);
// function with callback
// function request(url,cb){
  hello("ayam");

// }
type Greet = (message: string) => void;

function request(url: string, cb: Greet) {
  cb(url)
}

let fn = (str: string) => console.log(str);

request("www.google.com", fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/

type Contact = {
  firstName: string;
  lastName: string;
   languange: string;
   gender? : string
}

function submitContact(firstName: string, lastName: string, languange = "English", gender? : string) :Contact {
  return {
    firstName,
    lastName,
    languange,
    ...(gender && { gender})
  }
}

let res = submitContact("ay","b", "eng");
console.log(res);



/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);


/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
function CT(param: string | number) : string | number {
  return param
}


function CT2<T>(param: T) : T {
  return param;
}

CT2<string>("hello");