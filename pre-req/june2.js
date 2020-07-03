let result; 

result = "Volvo" + 5 + 2;
console.log(result);

result = 5 + 2 + "Volvo";
console.log(result);

console.log("===============================");

let x;

x = 5;
console.log(typeof x);
console.log(x + 5 + 2);

x = "John ";
console.log(typeof x);
console.log(x + 5 + 2);

console.log("Boolean===============================");

let b = true;
console.log(typeof b);

b = 10;
console.log("What is the type of b:" + typeof b);

console.log("Array===============================");

let arr = []; //array
console.log(typeof arr);
arr.push("apple", "orange", "mango");

// arr.push("orange");
// arr.push("mango");

console.log(arr[1]);
console.log(arr.length);

console.log("Object===============================");

let obj = {} //object json, dictionary, key-value pair

obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

console.log("this is an object: " + obj.age);

obj = null; // empty out the object

console.log("this is an object: " + typeof obj);



















