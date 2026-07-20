/* 
task A — "use strict"
1.Without strict mode, create a function that assigns a value to a variable without
declaring it(var/let/const). Call the function, then print that variable outside the function. What happened?
2.Rewrite the previous function with "use strict" inside it. Use try/catch
and print the errormessage.
3.Inside a strict-mode function, declare var localVar = "test", then try
delete localVar. Catchthe error and print it. After that, create an object with one property and successfully delete thatproperty.
*/

// solution task A:

// 1

function assignWithoutDeclaration() {
    undeclaredVar = "I am global"; // No var/let/const
}

assignWithoutDeclaration();
console.log(undeclaredVar); // Works in non-strict mode, creates global variable

// 2
function assignWithStrictMode() {
    "use strict";
    try {
        strictDeclaredVar = "I am global";
    } catch (error) {
        console.log(error.message);
    }
}
assignWithStrictMode();

// 3
function deleteVariable() {
    "use strict";
    var localVar = "test";
    try {
        delete localVar;
    } catch (error) {
        console.log(error.message);
    }
    var obj = { prop: "test" };
    delete obj.prop;
}
deleteVariable();

/*
Task B — Hoisting
4.Predict the output, then run the code:
console.log(x);var x = 10;console.log(x);
5.Predict what happens in each case, then explain the difference:
// Case 1sayHi();function sayHi() { console.log("Hi");}// Case 2sayBye();var sayBye = function () { console.log("Bye");};
6.Predict the output of this code and explain using the TDZ idea:
console.log(a);let a = 5;
7.Predict the output:
var n = 1;function demo() { console.log(n); var n = 2; console.log(n);}demo();console.log(n);
*/

// solution task B:

// 4
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// 5
// Case 1
sayHi(); // Hi
function sayHi() {
    console.log("Hi");
}
// Case 2
sayBye(); // ReferenceError: sayBye is not defined
var sayBye = function () {
    console.log("Bye");
};

// 6
console.log(a); // ReferenceError: a is not defined
let a = 5;

// 7
var n = 1;
function demo() {
    console.log(n); // 1
    var n = 2;
    console.log(n); // 2
}
demo();
console.log(n); // 1

/* 
Task C — var vs let vs const
8.
Write one example that proves
var
is
function-scoped
(use an
if
or a
for
loop inside afunction).
9.
Write one example that proves
let
/
const
are
block-scoped
.
10.
Show the difference between re-declaration with
var
and with
let
(comment the line that causesan error).
11.
Create a
const
object named
student
with
name
,
age
, and
city
. Then:
change
age
add a new property
grade
delete
city
try to reassign the whole object (
student = {...}
) and catch the error
Print the object after each successful change.
12.
Create a
const
array
nums = [1, 2, 3]
. Use
push
, change index
0
, then try to reassign thearray. What is allowed and what is not?
13.
Which of these is valid? Test and write the result for each:
var a;let b;const c;
14.
In the browser console, create:
var g1 = "var global"
,
let g2 = "let global"
,
const g3 ="const global"
. Check
window.g1
,
window.g2
, and
window.g3
. Write what you see.
15.
Fix this bug by changing only
var
to
let
, then explain why it works:
const handlers = {};for (var i = 0; i < 3; i++) { handlers["fn" + i] = function () { return "index: " + i; };}
console.log(handlers.fn0());console.log(handlers.fn2());
*/

// solution task C:

// 8
var x = 10;
if (x === 10) {
    var x = 20;
    console.log(x); // 20
}
console.log(x); // 10

// 9
let y = 10;
if (y === 10) {
    console.log(y); // 10
    let y = 20;
    console.log(y); // 20
}
console.log(y); // 10

// 10
var a = 10;
let b = 10;
var a = 20; // Valid - re-declaration allowed
// let b = 20; // Error: Identifier 'b' has already been declared

// 11
const student = { name: "John", age: 20, city: "New York" };
student.age = 21;
delete student.city;
try {
    student = { name: "Alice", age: 22, grade: 95 };
    console.log(student); // TypeError: Assignment to constant variable.
} catch (error) {
    console.log(error.message); // TypeError: Assignment to constant variable.
}
console.log(student); // { name: 'Alice', age: 22, grade: 95 }

// 12
const nums = [1, 2, 3];
nums.push(4);
nums[0] = 10;
try {
    nums = [5, 6, 7];
    console.log(nums); // TypeError: Assignment to constant variable.
} catch (error) {
    console.log(error.message); // TypeError: Assignment to constant variable.
}
console.log(nums); // [10, 2, 3, 4]

// 13
var a;
let b;
const c;
console.log(a); // undefined
console.log(b); // undefined
console.log(c); // TypeError: Cannot access 'c' before initialization

// 14
window.g1 = "var global";
window.g2 = "let global";
window.g3 = "const global";
console.log(window.g1); // var global
console.log(window.g2); // let global
console.log(window.g3); // const global

// 15
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
// why it works with let ? because let is block-scoped
// why it doesn't work with var ? because var is function-scoped
console.log(handlers.fn0()); // index: 0
console.log(handlers.fn2()); // index: 2

/* 
Task D — Arrow Functions & Template Literals
16.
Convert this function to an arrow function that returns a string in one line:
function welcome(name) { return "Welcome, " + name + "!";}
Use a template literal in the arrow version.
17.
Create an arrow function
fullInfo(first, last, age)
that returns:
"Ali Hassan is 25 yearsold"
using template literals (with your own values).
18.
Write an arrow function
multiply(a, b)
that returns the product. Then write another arrowfunction with a block body that prints both numbers and returns their sum.
*/

// solution Task D:

// 16
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("John")); // Welcome, John!

// 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25)); // Ali Hassan is 25 years old

// 18
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

const sumAndPrint = (a, b) => {
    console.log(a, b);
    return a + b;
};
console.log(sumAndPrint(2, 3)); // 5

/* 
Task E — Destructuring, Default, Rest, Spread
19.
Using object destructuring, extract
title
,
price
, and
inStock
from:
const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell"};
Print the three extracted variables.
20.
Using array destructuring on
["HTML", "CSS", "JS", "React"]
, store the first two items invariables and print them.
21.
Create a function
greet(name = "Guest", message = "Hello")
that returns
"Hello, Guest!"
style text. Call it three times: with both args, with only name, and with no args.
22.
Write a function
sumAll(...numbers)
that returns the sum of any count of numbers. Test it with
sumAll(1, 2, 3)
and
sumAll(10, 20, 30, 40)
.
23.
Using spread:
merge
[1, 2]
and
[3, 4, 5]
into one array
make a copy of
[10, 20, 30]
, push
40
into the copy only, then print both arrays
24.
Merge these two objects with spread, then print the result:
const user = { name: "Sara", age: 22 };const contact = { email: "sara@nti.com", age: 23 };
Which
age
wins? Why?
25.
Pass array values as function arguments using spread:
const values = [2, 4, 6, 8];function total(a, b, c, d) { return a + b + c + d;}
Call
total
using spread and print the result.
*/

// solution Task E:

// 19
const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell" };
const { title, price, inStock } = product;
console.log(title); // Laptop
console.log(price); // 15000
console.log(inStock); // true

// 20
const arr = ["HTML", "CSS", "JS", "React"];
const [first, second] = arr;
console.log(first); // HTML
console.log(second); // CSS

// 21
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Alice", "Hi")); // Hi, Alice!
console.log(greet("Bob")); // Hello, Bob!
console.log(greet()); // Hello, Guest!

// 22
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

// 23
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5]

const arr4 = [10, 20, 30];
const arr5 = [...arr4];
arr5.push(40);
console.log(arr4); // [10, 20, 30]
console.log(arr5); // [10, 20, 30, 40]

// 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const merged = { ...user, ...contact };
console.log(merged); // { name: 'Sara', age: 23, email: 'sara@nti.com' }

// 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values)); // 20

/*
Task F — Memory & Copying
26.
Predict and explain:
let person1 = { name: "Ali", child: { age: 5 } };let person2 = person1;person2.name = "Omar";console.log(person1.name);
27.
Create a shallow copy of this object using spread:
const original = { name: "Mona", details: { city: "Cairo" }};
Change
name
on the copy, then change
details.city
on the copy. Print both objects and explainwhat changed in the original and why.
28.
Using the same
original
object, create a deep copy with
structuredClone
(or
JSON.parse(JSON.stringify(...))
). Change the nested
city
on the deep copy and prove theoriginal did not change.
29.
Save this object to
localStorage
under the key
"userdata"
:
{ name: "Ahmed", age: 26, city: "Alex" }
Then read it back, parse it, print its type and its values, and finally remove the key.
*/

// solution Task F:

// 26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name); // Omar

// 27
const original = { name: "Mona", details: { city: "Cairo" } };
const copy = { ...original };
copy.name = "Ahmed";
copy.details.city = "Alex";
console.log(original); // { name: 'Mona', details: { city: 'Alex' } }
console.log(copy); // { name: 'Ahmed', details: { city: 'Alex' } }

// 28
const original = { name: "Mona", details: { city: "Cairo" } };
const copy = structuredClone(original);
copy.name = "Ahmed";
copy.details.city = "Alex";
console.log(original); // { name: 'Mona', details: { city: 'Cairo' } }
console.log(copy); // { name: 'Ahmed', details: { city: 'Alex' } }

// 29
const userdata = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(userdata));
const retrieved = JSON.parse(localStorage.getItem("userdata"));
console.log(typeof retrieved); // object
console.log(retrieved); // { name: 'Ahmed', age: 26, city: 'Alex' }
localStorage.removeItem("userdata");

/*
Task G — Challenge Mix
30.
Build a small
APP_CONFIG
using
const
with:
name
,
version
, and nested
api: { baseUrl,timeout }
. Change
timeout
, add a feature string into a
features
array, and try reassigning
APP_CONFIG
(catch the error).
31.
Create a function
createCard(title, price = 0, ...tags)
that returns an object using:
default parameter for
price
rest for
tags
template literal for a
label
property like
"Laptop - 15000 EGP"
Then create two cards and print them.
32.
You have:
const students = [ { name: "Omar", grade: 80 }, { name: "Mona", grade: 90 }, { name: "Ali", grade: 70 }];
Using destructuring inside a loop (or
map
), print each student as:
"Omar scored 80"
.
*/

// solution Task G:

// 30
const APP_CONFIG = {
    name: "My App",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 3000
    },
    features: ["feature1", "feature2"]
};
console.log(APP_CONFIG); // { name: 'My App', version: '1.0.0', api: { baseUrl: 'https://api.example.com', timeout: 3000 }, features: [ 'feature1', 'feature2' ] }

// 31
function createCard(title, price = 0, ...tags) {
    return {
        label: `${title} - ${price} EGP`,
        tags
    };
}
const card1 = createCard("Laptop", 15000, "laptop", "electronics");
const card2 = createCard("Phone", 8000, "phone", "electronics", "mobile");
console.log(card1); // { label: 'Laptop - 15000 EGP', tags: [ 'laptop', 'electronics' ] }
console.log(card2); // { label: 'Phone - 8000 EGP', tags: [ 'phone', 'electronics', 'mobile' ] }

// 32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}

// ------------------------------------------------------------------------

/*
Task A — for...in vs for...of
1.
Using this array
const fruits = ["apple", "banana", "cherry"]
:
use
for...in
to print each
index
and its value
use
for...of
to print each
value
only
2.
Using
fruits.entries()
with
for...of
and destructuring, print each item as:
0 → apple
,
1 →banana
, ...
3.
For the string
"NTI"
:
use
for...in
to print indexes and characters
use
for...of
to print characters only
Write one sentence explaining the difference.
4.
Predict what happens, then try it:
const user = { name: "Ali", age: 25 };for (const x of user) { console.log(x);}
Fix it using
Object.entries
so you can print each key and value.
5.
Using
for...of
on
[1, 2, 3, 4, 5, 6]
: skip number
3
with
continue
, stop before printing
5
with
break
. What numbers are printed?
*/

// solution Task A:

// 1
const fruits = ["apple", "banana", "cherry"];
for (const index in fruits) {
    console.log(index); // 0, 1, 2
    console.log(fruits[index]); // apple, banana, cherry
}
for (const value of fruits) {
    console.log(value); // apple, banana, cherry
}

// 2
for (const [index, value] of fruits.entries()) {
    console.log(`${index} → ${value}`); // 0 → apple, 1 → banana, 2 → cherry
}

// 3
for (const index in "NTI") {
    console.log(index); // 0, 1, 2
}
for (const char of "NTI") {
    console.log(char); // N, T, I
}

// 4
const user = { name: "Ali", age: 25 };
for (const x of user) {
    console.log(x); // TypeError: user is not iterable
}
const entries = Object.entries(user);
for (const [key, value] of entries) {
    console.log(`${key}: ${value}`); // name: Ali, age: 25
}

// 5
const numbers = [1, 2, 3, 4, 5, 6];
for (const number of numbers) {
    if (number === 3) {
        continue;
    }
    if (number === 5) {
        break;
    }
    console.log(number); // 1, 2, 4, 6
}

/*
Task B — Map
6.
Create an empty
Map
. Add these entries using
set
:
"name"
→
"Ahmed"
100
→
"ID"
an object
{ id: 1 }
as a key →
"UserObject"
Then print
typeof
the map and its
size
.
7.
On the same map: get the value of
"name"
, check if key
"age"
exists with
has
, delete key
100
,then print
size
again.
8.
Loop over the map three ways and print results:
all entries with
for...of
(key + value)
keys only with
map.keys()
values only with
map.values()
9.
Write 3 short reasons (from the lecture) why you might use a
Map
instead of a plain object.
10.
Call
clear()
on your map and print the size after clearing.
*/

// solution Task B:

// 6
const map = new Map();
map.set("name", "Ahmed");
map.set(100, "ID");
map.set("UserObject", { id: 1 });
console.log(typeof map); // object
console.log(map.size); // 3

// 7
console.log(map.get("name")); // Ahmed
console.log(map.has("age")); // false
map.delete(100);
console.log(map.size); // 2

// 8
for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // name: Ahmed, UserObject: { id: 1 }
}
for (const key of map.keys()) {
    console.log(key); // name, UserObject
}
for (const value of map.values()) {
    console.log(value); // Ahmed, { id: 1 }
}

// 9
// 1. It is a collection of key-value pairs.
// 2. It is a collection of keys.
// 3. It is a collection of values.

// 10
map.clear();
console.log(map.size); // 0

/* 
Task C — Set
11.
Create a
Set
, add:
10, 21, 2, 3, 2, 10
. Print the set and its
size
. Why is the size not 6?
12.
On that set: check if it has
2
, delete
3
, then print whether
3
still exists.
13.
Print all values using
for...of
on
set.values()
, then print all entries using
set.entries()
.What is special about Set entries (keys vs values)?
14.
Remove duplicates from this array using
Set
+ spread:
const nums = [1, 2, 2, 3, 4, 4, 5];
Print the unique array.
15.
Write 3 short differences between
Set
and a normal array.
*/

// solution Task C:

// 11
const set = new Set([10, 21, 2, 3, 2, 10]);
console.log(set); // Set { 10, 21, 2, 3 }
console.log(set.size); // 4

// 12
console.log(set.has(2)); // true
set.delete(3);
console.log(set.has(3)); // false

// 13
for (const value of set.values()) {
    console.log(value); // 10, 21, 2
}
for (const [key, value] of set.entries()) {
    console.log(`${key}: ${value}`); // 10: 10, 21: 21, 2: 2
}

// 14
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // [1, 2, 3, 4, 5]

// 15
// 1. Sets automatically remove duplicate values
// 2. Sets maintain insertion order
// 3. Sets provide built-in methods like has(), add(), delete(), and clear()

/*
Task D — Enhanced Object Literals
16.
You have:
const name = "Ahmed";const age = 25;
Create the same object twice: once the old way (
name: name
), and once with shorthand propertynames. Print both.
17.
Create a
calculator
object using shorthand methods:
add(a, b)
and
multiply(a, b)
. Test bothmethods and print the results.
18.
Using computed property names, build this object:
const key1 = "email";const key2 = "phone";
so the result looks like:
{ email: "...", phone: "...", user_99: "special user" }
19.
Write a function
buildPayload(type, value)
that returns an object with:
shorthand properties:
type
,
value
createdAt
(current ISO date string)
shorthand method
print()
that logs
`${type}: ${value}`
computed property:
[type + "_flag"]: true
Call it with
("order", 12345)
, print the object, and call
print()
.
*/

// solution Task D:

// 16
const obj1 = { name: "Ahmed", age: 25 };
const obj2 = { name, age };
console.log(obj1); // { name: "Ahmed", age: 25 }
console.log(obj2); // { name: "Ahmed", age: 25 }

// 17
const calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
};
console.log(calculator.add(2, 3)); // 5
console.log(calculator.multiply(2, 3)); // 6

// 18
const key1 = "email";
const key2 = "phone";
const obj = {
    [key1]: "...",
    [key2]: "...",
    ["user_" + 99]: "special user",
};
console.log(obj); // { email: "...", phone: "...", user_99: "special user" }

// 19
function buildPayload(type, value) {
    const now = new Date().toISOString();
    return {
        type,
        value,
        createdAt: now,
        print() {
            console.log(`${type}: ${value}`);
        },
        [type + "_flag"]: true,
    };
}
const payload = buildPayload("order", 12345);
payload.print(); // order: 12345
console.log(payload); // { type: 'order', value: 12345, createdAt: '2023-03-31T09:59:39.000Z', order_flag: true }

/*
Task E — Memory: Value vs Reference
20.
Predict the output and explain (stack / value copy):
let a = 10;let b = a;b++;console.log(a, b);
21.
Predict the output and explain (heap / reference):
const person1 = { name: "SSS", child: { age: 5 } };const person2 = person1;person2.name = "AAA";console.log(person1.name);
22.
Using this object:
const original = { x: 1, nested: { y: 2 } };
Make a shallow copy with spread. Change
x
on the copy, then change
nested.y
on the copy. Print
original
and explain what changed and why.
23.
Repeat the shallow-copy idea using
Object.assign({}, original)
and change
nested.y
. Doesthe original change?
24.
Create a deep copy of:
const deepSrc = { n: 1, d: new Date(), arr: [1, { k: 2 }], set: new Set([1, 2, 3])};
using
structuredClone
. Change
deepClone.arr[1].k
to
999
, then prove
deepSrc
was notaffected.
25.
Predict the output:
const arr1 = [1, [2, 3]];const arr3 = [...arr1];arr1[1][0] = 99;console.log(arr3[1][0]);
Then fix it with
structuredClone
so changing the nested array does not affect the other copy.
*/

// solution Task E:

// 20
let a = 10;
let b = a;
b++;
console.log(a, b); // 10 11

// 21
const person1 = { name: "SSS", child: { age: 5 } };
const person2 = person1;
person2.name = "AAA";
console.log(person1.name); // AAA

// 22
const original = { x: 1, nested: { y: 2 } };
const copy = { ...original };
copy.x = 10;
copy.nested.y = 20;
console.log(original); // { x: 1, nested: { y: 20 } }
console.log(copy); // { x: 10, nested: { y: 20 } }

// 23
const copy2 = Object.assign({}, original);
copy2.nested.y = 30;
console.log(original); // { x: 1, nested: { y: 30 } }
console.log(copy2); // { x: 1, nested: { y: 30 } }

// 24
const deepSrc = { n: 1, d: new Date(), arr: [1, { k: 2 }], set: new Set([1, 2, 3]) };
const deepClone = structuredClone(deepSrc);
deepClone.arr[1].k = 999;
console.log(deepSrc); // { n: 1, d: 2023-03-31T09:59:39.000Z, arr: [ 1, { k: 999 } ], set: Set(3) { 1, 2, 3 } }
console.log(deepClone); // { n: 1, d: 2023-03-31T09:59:39.000Z, arr: [ 1, { k: 999 } ], set: Set(3) { 1, 2, 3 } }

// 25
const arr1 = [1, [2, 3]];
const arr3 = [...arr1];
arr1[1][0] = 99;
console.log(arr3[1][0]); // 99

const arr4 = structuredClone(arr1);
arr1[1][0] = 100;
console.log(arr4[1][0]); // 2

/*
Task F — Map Cloning & Challenge
26.
Predict and explain:
const m1 = new Map([["k", { v: 1 }]]);const m2 = new Map(m1);m2.get("k").v = 42;console.log(m1.get("k").v);
Is
new Map(m1)
a deep copy or a shallow copy?
27.
Using the same
m1
, create
m3
with
structuredClone(m1)
, set
m3.get("k").v = 7
, and prove
m1
stayed at
42
.
28.
You have an array of product ids with duplicates:
[101, 102, 101, 103, 102, 104]
. Use a
Set
toget unique ids, then store each unique id in a
Map
with value
"available"
. Print the map size andall entries.
29.
Create an object representing a course using: shorthand properties, one shorthand method
info()
, and one computed property. Then loop over it with
Object.entries
and print eachkey/value (skip the method if you want, or print its type).
30.
Final mix: start with
let personA = { name: "SSSSSSS", son: { age: 5 } };
make
personB
a reference copy and change
name
make
personC
a deep copy with
structuredClone
and change
son.age
Print all three and explain the final values of
personA
.
*/

// solution Task F:

// 26
const m1 = new Map([["k", { v: 1 }]]);
const m2 = new Map(m1);
m2.get("k").v = 42;
console.log(m1.get("k").v); // 42

// 27
const m1 = new Map([["k", { v: 1 }]]);
const m3 = structuredClone(m1);
m3.get("k").v = 7;
console.log(m1.get("k").v); // 42

// 28
const ids = [101, 102, 101, 103, 102, 104];
const uniqueIds = new Set(ids);
const map = new Map();
for (const id of uniqueIds) {
    map.set(id, "available");
}
console.log(map.size); // 4
for (const [id, status] of map) {
    console.log(`${id}: ${status}`); // 101: available, 102: available, 103: available, 104: available
}

// 29
const course = {
    name: "JavaScript",
    info() {
        console.log(`Course name: ${this.name}`);
    },
    get duration() {
        return 3;
    }
};
for (const [key, value] of Object.entries(course)) {
    if (typeof value === "function") {
        continue;
    }
    console.log(`${key}: ${value}`); // name: JavaScript, duration: 3
}

// 30
const personA = { name: "SSSSSSS", son: { age: 5 } };
const personB = Object.assign({}, personA);
personB.name = "BBBBBBB";
const personC = structuredClone(personA);
personC.son.age = 10;
console.log(personA); // { name: 'SSSSSSS', son: { age: 5 } }
console.log(personB); // { name: 'BBBBBBB', son: { age: 5 } }
console.log(personC); // { name: 'SSSSSSS', son: { age: 10 } }


// ------------------------------------------------------------------------------------------------------------------------------------------
