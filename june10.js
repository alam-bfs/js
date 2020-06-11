
// returns a value, either True or False

// holding the return value in a variable
let val = Boolean(5 > 10);
console.log("value of val = " + val);

// without holding the return value in a variable
console.log(Boolean(['a'].length === ['a'].length));

// benifit of holding the return value in a variable is that you can use the variable for later operations
if (val === false){
  console.log("I found the val value");
}

// varaible value is 0 the Boolean() function returns False
let x = 0;
console.log("return expression of x: " + Boolean(x));

// varaible value is not 0 the Boolean() function returns True
x = 5;
console.log("return expression of x: " + Boolean(x));

// for undefined Boolean returns False
let y;
console.log("return expression of y: " + Boolean(y));

// for not a number Booelan returns False
let z = 10 / "apple";
console.log("value of z: " + Boolean(z));


x = 5.20;
console.log("decimal number x: " + Boolean(x));


// strict type and losely type

let d = false;
let b = new Boolean(false);

console.log("type of d: " + typeof d);
console.log("type of b: " + typeof b);

// strict type ===
console.log("Strict type: " + Boolean(d === b));

// losely type ==
console.log("Losely type: " + Boolean(d == b));


// Logical Operators
/*
  T and T = T
  T and F = F
  F and T = F
  F and F = F

  T or T = T
  T or F = T
  F or T = T
  F or F = F

*/

let day = "Monday";
let dayInWeek = "weekday";

if (day === "Monday" && dayInWeek === "Weekday"){
  console.log("It is a weekday!!!");
}else{
  console.log("It is not a weekday");
}

// ternary operators

let result = (day === "Monday" && dayInWeek === "weekday") ? "IT IS A WEEKDAY" : "IT IS NOT A WEEKDAY";
console.log(result);


// Date function
console.log(Date().toString());

let dd = new Date();
console.log(dd.getMonth());


console.log("=======For Loop==============================");

let greet = "Good morning";

for(let i=0; i<5; i++){
  console.log(i + " = " +greet);
}

let arr = ["apple", "orange", "mango", "banana"];

for(let i=0; i < arr.length; i++){
  console.log(arr[i]);
}

console.log("==============================================");
for(let f in arr){
  console.log(arr[f]);
}
console.log("==============================================");
let obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
for(let k in obj){
  console.log(obj[k])
}


