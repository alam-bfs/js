const x = 5;

if (x == 5){
  console.log(typeof x);
}else{
  console.log("x don't have true value");
  console.log(typeof x);
}

var str = "locate Please locate where locate occurs! locate";
var pos = str.indexOf("locate");
console.log("first occurance of locate===", pos);

var pos = str.lastIndexOf("locate");
console.log("last occurance of locate===", pos);
