// Pass by value example
let num = 10;
function changeNum(value) {
    value = 20;
    console.log(value); // Output: 20
}
changeNum(num);
console.log(num); // Output: 10

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Pass by reference example
let arr = [1, 2, 3];
function addToArr(value) {
    value.push(4);
    console.log(value); // Output: [1, 2, 3, 4]
}

addToArr(arr);
console.log(arr); // Output: [1, 2, 3, 4]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * for-in Loop
The for-in loop iterates over the keys (property names) of an object.
 It enumerates all the enumerable properties of an object,
 including those inherited through the prototype chain (unless filtered with hasOwnProperty()).
 */

const user = {
    name: "John",
    age: 30,
    country: "USA",
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Output:
// name: John
// age: 30
// country: USA

for (let key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(key);
    }
}

// Output:
// ownProperty

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * for-of Loop
    The for-of loop iterates over the values of iterable objects (like arrays, strings, maps, sets, etc.).
    It directly accesses the values rather than the keys.
 */

const numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}

// Output:
// 10
// 20
// 30

const message = "Hello";

for (let char of message) {
    console.log(char);
}

// Output:
// H
// e
// l
// l
// o

/**
 * Use for-in when working with object properties.
 * Use for-of when working with iterable objects like arrays, strings, maps, or sets. */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 *@Pure_function
 */
function greeting(name) {
    return `Hello ${name}`;
}
console.log(greeting("Saikrishna Nangunuri")); //same result all time

/**
 *@Impure_function
 */
let message1 = "good morning";
function greeting1(name) {
    return `Hello ${name} , ${message1}`;
}
console.log(greeting1("Saikrishna Nangunuri")); //result changes when call

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
