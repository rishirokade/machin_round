/**
 * @closure
 * A closure is a function that has access to its own scope, the outer (enclosing) function's scope,
 * and the global scope, even after the outer function has finished executing.
 * Closures allow functions to "remember" variables from their lexical scope even when the function is invoked outside of that scope.
 */

/**
 * Why are Closures Important?
    Data Encapsulation: Closures allow private variables and functions.
    State Preservation: A closure can "remember" the state of the outer function.
    Higher-Order Functions: Used in callbacks, event handlers, and functional programming.
    Memory Management: They keep specific data alive only when needed.
 */

// 1
function fetchData(url) {
    let cachedData = null; // State preserved in closure

    return async function () {
        if (cachedData) {
            console.log("Returning cached data:", cachedData);
        } else {
            console.log("Fetching new data...");
            const response = await fetch(url);
            cachedData = await response.json();
            console.log("Fetched Data:", cachedData);
        }
    };
}

const getUserData = fetchData("https://jsonplaceholder.typicode.com/users");

getUserData(); // Fetches new data
getUserData(); // Returns cached data

// 2
function outerFunction() {
    let counter = 0; // Variable in the outer function's scope

    return function innerFunction() {
        counter++; // Inner function accesses 'counter'
        console.log(counter);
    };
}

const increment = outerFunction();

increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3

// 3
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            return count;
        },
    };
}

const counter = createCounter();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
console.log(counter.getCount()); // Output: 1
console.log(counter.count); // undefined (count is private)
