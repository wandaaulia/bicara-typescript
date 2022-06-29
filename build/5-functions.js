"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z) {
    return x + y;
}
console.log(add(2, 3));
const addEx = function (x, y) {
    return x + y;
};
const addArrow = (x, y) => x + y;
console.log(addArrow(2, 3));
const hello = (name) => console.log("hello" + name);
hello("ayam");
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request("www.google.com", fn);
function submitContact(firstName, lastName, languange = "English", gender) {
    return {
        firstName,
        lastName,
        languange,
        ...(gender && { gender })
    };
}
let res = submitContact("ay", "b", "eng");
console.log(res);
function fruitsCollection(item, ...restItems) {
    return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);
function CT(param) {
    return param;
}
function CT2(param) {
    return param;
}
CT2("hello");
