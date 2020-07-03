// write a program to pick lucky number. Continue picking number until you get the lucky number

let luckyNumber = Math.floor(Math.random() * Math.floor(8));

while(luckyNumber != 7){
  console.log(`you picked ${luckyNumber} please try again`);
  luckyNumber = Math.floor(Math.random() * Math.floor(8));
}
console.log("lucky number is:" + luckyNumber);


// in do ..while loop, block of code must execute once before checking the conditions 

let x = 100;
do {
  console.log("value of x = " + x);  
} while( x === 5);


// if ... else statements
// write a program to say too long name if number of letter in firstname is more than 5
let firstName = "Mohammad";

if(firstName.length > 5){
  console.log(`Too long first name: ${firstName}`);
}else{
  console.log(`Accepted: ${firstName}`);
}

// if ... else if ... else
if (firstName.length < 5) {
  console.log(`Too long first name: ${firstName}`);
} else if([...firstName][0] === "M"){
  console.log(`Found: ${firstName}`);
}else{
  console.log("Name not found");
}


// switch program 
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
}


// write a program that will display Fizz if number is divided by 3 and Buzz if number is divided by 5
// and Fizz Buzz if number is divided by 3 and 5

// from 1 ... 20

for(let i = 1; i<21; i++){ 
    // i is divided by 3 or 5 = ture
    if(i % 3 === 0 || i % 5 === 0){
      // ------> i is divided by 3 and 5
      if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz: " + i);
      }   
      // ------> i is divided by 3
      else if (i % 3 === 0) {
        console.log("Fizz: " + i);
      }   
      // ------> i is divide by 5
      else if (i % 5 === 0) {
        console.log("Buzz: " + i);
      }
    }
    // exit
}


