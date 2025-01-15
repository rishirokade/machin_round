function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable (function-scoped)
        console.log(x); // 20
    }
    console.log(x); // 20 (No block scope)
}

varExample();

var a = 5;
var a = 10; // No error
console.log(a); // 10

function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable (block-scoped)
        console.log(y); // 20
    }
    console.log(y); // 10 (Block scope respected)
}

letExample();

//   let b = 5;
// let b = 10; // Error: Identifier 'b' has already been declared
b = 10; // Allowed (update)
console.log(b); // 10

function constExample() {
    const z = 30;
    // z = 40; // Error: Assignment to constant variable
    if (true) {
        const z = 50; // Different variable (block-scoped)
        console.log(z); // 50
    }
    console.log(z); // 30 (Block scope respected)
}

constExample();

function scopeTest() {
    if (true) {
        var x = 10; // Function-scoped
        let y = 20; // Block-scoped
        const z = 30; // Block-scoped
    }
    console.log(x); // 10
    // console.log(y); // Error: y is not defined
    // console.log(z); // Error: z is not defined
}
scopeTest();

console.log(a); // undefined
var a = 5;

// console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;

// console.log(c); // Error: Cannot access 'c' before initialization
const c = 15;

var d = 10;
var d = 20; // Allowed
console.log(d); // 20

let e = 10;
// let e = 20; // Error
e = 20; // Allowed
console.log(e); // 20

const f = 10;
// const f = 20; // Error
// f = 20; // Error
console.log(f); // 10
