// write a program that will alarm your daily tasks

const notifyTask = function(task, duration, taskDuration){

  const currentTime = new Date().getHours();

  if (currentTime >= taskDuration[0] && currentTime < taskDuration[1]) {
    console.log(`it's your ${task} time.`);
    console.log(`i will take ${duration} seconds to finish ${task}`);
    setTimeout(() => { console.log(`i have finished ${task}`) }, duration);
  }
}

const breakfast = [8, 9];
const lunch = [12, 14];
const dinner = [19, 21];

const breakfastDirationInSeconds = 2000;
const lunchDirationInSeconds = 3000;
const dinnerDirationInSeconds = 5000;

console.log('what are you doing?');
console.log('i am watching tv');

notifyTask('breakfast', breakfastDirationInSeconds, breakfast);
notifyTask('lunch', lunchDirationInSeconds, lunch);
notifyTask('dinner', dinnerDirationInSeconds, dinner);

// wrtire a program to iterate over list of items from array
console.log('==========================================================')
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
daysInWeek.forEach( (d)=> { console.log(d) });

// wrtire a program to find odd number from given list of numbers
console.log('==========================================================')
const givenNumberList = [3, 2, 6, 5, 9];
const oddNumberList = givenNumberList.filter( (n)=> n % 2 );
const evenNumberList = givenNumberList.filter((n) => n % 2 === 0);

console.log('given number list:', givenNumberList);
console.log('odd number list:', oddNumberList);
console.log('even number list:', evenNumberList);

