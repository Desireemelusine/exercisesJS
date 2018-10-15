var x = 5;
var y = 4 ;
var z = x + y;
console.log(z);

var name, surname, fullName;

name = "John";
surname = "Yung";
fullName = name + " " + surname;
fullName += "!";
console.log(fullName);

var x = 5 + 2 + "3";
var y = "5" + 2 + 3 ;
console.log(x);  //string
console.log(y);  //string

var w = 5;
w += 5;
console.log(w);

var f = 5;
f ++;
console.log(f);
f --;
var i = f;
console.log(i);

// Array
 var a = ["A", "B", "C"];

 //Object and the 2 properties
 var ob = {
  firstName: "Maria",
  lastName: "Silva"
};
 ob = null; // object is empty( no value) now but still is an Object, good for when you want to clean your obj to get a new info data
 ob = undefined; // now  value and Object is undefined
