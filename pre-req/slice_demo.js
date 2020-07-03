// console.log(process.env);

// start position = natural number position and 
// end position = index based position
/**
 * natural pos  = char = index
 *          1   =  t   =  0
 *          2   =  o   =  1
 *          3   =  d   =  2
 *          4   =  a   =  3
 *          5   =  y   =  4
 * 
 * so slice today to cut out first and last character will be today.slice(1, 4);
 * 
 * remove first character from a string
 * remove last character from a string
 * remove first and last chanacter from a string
 * display 3 last characters from a string
 * display 2 last characters from a string
 * display 1 last characters from a string
 * display 3 first characters from a string
 * display 2 first characters from a string
 * display 1 first characters from a string
 * 
 */
console.log('today'.slice());
console.log('today'.slice(0));
console.log('----------------');
console.log('today'.slice(0, 3));
console.log('today'.slice(0, 2));
console.log('today'.slice(0, 1));
console.log('today'.slice(-1)); 
console.log('today'.slice(-2)); 
console.log('today'.slice(-3)); 
console.log('----------------');
console.log('today'.slice(1, 0));
console.log('today'.slice(1, 5));
console.log('today'.slice(1, 4));  
console.log('today'.slice(1, 4)); 
console.log('today'.slice(4, 4)); 
console.log('today'.slice(3, 4)); 
console.log('today'.slice(0, 4));


const arr = ['001=john', '002=adam', '003=smith'];
arr.map(a => a.split('=')).reduce((arg, [k, v]) => k);

