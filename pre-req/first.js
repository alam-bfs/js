/* 
const greet = (name) => { return `Hello ${name}` };
console.log(greet('Kaiser'));
*/

// to declare a variable, you can use 
// var, let or const
// for const, once you assign the value to the variable, you cannot reassign values.

let firstname = 'John';

const foo = (firstname)=>{
  let firstName = 'Bar';
  return firstname;
}

console.log(foo('Smith'));