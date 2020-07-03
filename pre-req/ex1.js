const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(50, 50));

const getFileExtension = (filename) => filename.slice(filename.lastIndexOf('.'));
console.log(getFileExtension('hello.html'));

const moveCharForward = (string) => { return string.split('').map( ch => String.fromCharCode(ch.charCodeAt(0) + 1))}
console.log(moveCharForward("abcd"));

const getCharValue = () => ['a', 'b', 'c'].map(ch => String.fromCharCode(ch.charCodeAt(0)));
console.log(getCharValue());


const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();

  console.log(`${days}/${months}/${years}`);

  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}
console.log(formatDate());


const getNewValue = (string) => string.startsWith('new') ? string : 'new '.concat(string);
console.log(getNewValue('new hello'));

const addNew = (str) => str.indexOf('New') === 0 ? str : `New ${str}`;
console.log(addNew('New Offers'));

const getIndexValue = (str, word) => str.indexOf(word);
console.log(getIndexValue('Hello, today is wednesday. I am learning JavaScript', 'e'));

const getAllIndexValue = (str) => str.split('').map(n => (n === 'l') ? n : 'p');
console.log(getAllIndexValue('hello'));

