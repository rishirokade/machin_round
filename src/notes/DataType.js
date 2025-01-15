/**
 * @example
    String	const name = "John";
    Number	const pi = 3.14;
    Boolean	const isValid = true;
    Null	const value = null;
    Undefined	let value;
    BigInt	const big = 12345678901234567890n;

    Symbol is a unique and immutable primitive data type introduced in ES6.
    It is used to create unique identifiers for object properties.
    Symbols are mainly used to avoid naming conflicts and ensure that property keys are unique.
        Symbol	const id = Symbol("unique");

    Object	const obj = { key: "value" };
    Array	const arr = [1, 2, 3];
    Date	const now = new Date();
 */

const test = (param) => {
    console.log(param);
};

// Using apply
test.apply(null, ["test test2"]);
