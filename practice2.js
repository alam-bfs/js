const getFirstThree = (str) => str.substr(0, 3);
const getLastThree = (str) => str.substr((str.length - 3), 3);
console.log(getFirstThree('newhellonew') + getLastThree('newhellonew'));

// using slice function to slice the string
const getNewString = (str) => str.length <= 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(getNewString('new old new'));

const getStringSlice = (str) => str.slice(-1);
console.log(getStringSlice('hello'));

const getReverseArray = (arr) => arr.reverse();
console.log(getReverseArray([1,2,3,4]));

// first half of string 
const getFirstHalf = (str) => str.slice(0, str.length / 2);
console.log(getFirstHalf('hello'));

// concat two strings except their first character
const addTwoString = (str1, str2) => str1.slice(1, str1.length) + str2.slice(1, str2.length);
console.log(addTwoString('hello', 'world'));



