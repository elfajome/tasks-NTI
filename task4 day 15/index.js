/*
تاسك انك تطلع الاوتبت بتاع
    var user = [
        {name:"Ibrahim", age: 12, city:"CAI"},
        {name:"Ahmed", age: 22, city:"MANS"},
        {name:"Ali", age: 11, city:"CAI"},
    ]
    var categorieCountries = user.reduce(function (acc, u) {
    acc[u.city] = acc[u.city] || [];
    acc[u.city].push(u);
    return acc;
}, {});
بدون ما تستخدم reduce
*/

// solution Task:
var user = [
    { name: "Ibrahim", age: 12, city: "CAI" },
    { name: "Ahmed", age: 22, city: "MANS" },
    { name: "Ali", age: 11, city: "CAI" },
];
var categorieCountries = {};
user.forEach(function (u) {
    categorieCountries[u.city] = categorieCountries[u.city] || [];
    categorieCountries[u.city].push(u);
});
console.log(categorieCountries);


/*
Task A — Objects
1. Create an object named car with these properties: brand , model,year,andcolor.Then print the whole object.
2.Using the car object, print the brand using dot notation and print the year using bracketnotation.
3.Change the color of the car to"black", then add a new property price with any numbervalue. Print the object again.
4.Delete the year property from the car object, then print car.year and explain what yousee in the console.
5.Create an object with this property key: "student-name" and value "Sara" . Also add age:20 . Print the student name correctly.
6.Create a nested object for a book:title, and author as an object with firstName and lastName. Print the author's last name.
7.For this object:{ name: "Ali", age: 25, city: "Cairo" }, print all keys using Object.keys, all values using Object.values
, and check if it has a property named "job" using hasOwnProperty.
8.Create an object settings with theme: "dark" and lang: "en". Use Object.freeze onit, then try to change theme to "light" 
and try to add fontSize: 16. Print the object andwrite what happened.
*/

// solution Task A:

var car = {
    brand: "BMW",
    model: "X5",
    year: 2019,
    color: "red"
};
console.log(car); // {brand: "BMW", model: "X5", year: 2019, color: "red"}

console.log(car.brand); // BMW
console.log(car["year"]); // 2019

car.color = "black";
car.price = 10000;
console.log(car); // {brand: "BMW", model: "X5", year: 2019, color: "black", price: 10000}

delete car.year;
console.log(car.year); // undefined - property is deleted from the object
console.log(car); // {brand: "BMW", model: "X5", color: "black", price: 10000}

var student = {
    "student-name": "Sara",
    age: 20
};
console.log(student["student-name"]); // Sara

var book = {
    title: "The Great Gatsby",
    author: {
        firstName: "F. Scott",
        lastName: "Fitzgerald"
    }
};
console.log(book.author.lastName); // Fitzgerald

console.log(Object.keys(car)); // ["brand", "model", "year", "color", "price"]
console.log(Object.values(car)); // ["BMW", "X5", 2019, "black", 10000]
console.log(car.hasOwnProperty("job")); // false

var settings = {
    theme: "dark",
    lang: "en"
};
Object.freeze(settings);
settings.theme = "light"; // TypeError: Cannot assign to read only property 'theme' of object
settings.fontSize = 16; // TypeError: Cannot assign to read only property 'fontSize' of object
console.log(settings); // {theme: "dark", lang: "en"}

/*
Task B — Arrays Basics
9.
Create an array of 5 city names. Print the array and print its length.
10.
Print the first city, the second city, and the last city in the array.
11.
Add a city at the end using
push
, then add a city at the start using
unshift
. Print the arrayafter each step.
12.
Remove the last city using
pop
, then remove the first city using
shift
. Print the array aftereach step.
13.
Using this array:
["HTML", "CSS", "JS", "React"]
, print the index of
"JS"
, check if
"Python"
exists using
includes
, and print the result.
14.
Print all items in this array using
forEach
:
["pen", "book", "bag"]
. Also print each itemwith its index.
15.
Using
for...of
on
["red", "green", "blue", "yellow"]
, print the colors one by one,but stop when you reach
"blue"
(do not print blue).
16.
Start with
["A", "B", "C"]
. Add
"D"
and
"E"
at the end, remove the first item, thenprint the final array and its length.
*/

// solution Task B:
var cities = ["Cairo", "Alex", "Giza", "Aswan", "Luxor"];
console.log(cities); // ["Cairo", "Alex", "Giza", "Aswan", "Luxor"]
console.log(cities.length); // 5

console.log(cities[0]); // Cairo
console.log(cities[2]); // Giza
console.log(cities[cities.length - 1]); // Luxor

cities.push("Asyut");
cities.unshift("Ismailia");
console.log(cities); // ["Ismailia", "Cairo", "Alex", "Giza", "Aswan", "Luxor", "Asyut"]

cities.pop();
cities.shift();
console.log(cities); // ["Alex", "Giza", "Aswan", "Luxor", "Asyut"]

console.log(cities.includes("Python")); // false
console.log(cities.includes("JS")); // true

cities.forEach(function (city, index) {
    console.log(city);
    console.log(index);
});

var colors = ["red", "green", "blue", "yellow"];
for (var color of colors) {
    console.log(color);
    if (color === "blue") {
        break;
    }
}

var letters = ["A", "B", "C"];
letters.push("D");
letters.push("E");
letters.shift();
console.log(letters); // ["B", "C", "D", "E"]
console.log(letters.length); // 4

/*
Task C — Array Methods
17.
Using
map
, convert this array to uppercase:
["apple", "banana", "cherry"]
. Print thenew array and also print the original array.
18.
Using
filter
, keep only the numbers greater than 50 from:
[10, 55, 30, 80, 45, 90]
.
19.
From
["Cairo", "Giza", "Alex", "Aswan"]
, use
find
to get the first city that starts with
"A"
, and use
findIndex
to get its index.
20.
Using
slice
, copy part of this array:
["a", "b", "c", "d", "e"]
from index 1 to index 4(not including 4). Print the copy and the original.
21.
Using
splice
, remove 2 items starting from index 1 in this array:
["one", "two","three", "four", "five"]
. Print the removed items and the array after the change.
22.
Sort this numbers array correctly from smallest to largest:
[40, 100, 1, 5, 25]
. Print theresult.
23.
Use
some
to check if any age in
[16, 21, 17, 19]
is greater than or equal to 18. Use
every
to check if all ages are greater than or equal to 18. Print both results.
24.
Use
reduce
to calculate the total of:
[5, 10, 15, 20]
. Print the total.
*/

// solution Task C: 
var fruits = ["apple", "banana", "cherry"];
var uppercaseFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});
console.log(uppercaseFruits); // ["APPLE", "BANANA", "CHERRY"]
console.log(fruits); // ["apple", "banana", "cherry"]

var numbers = [10, 55, 30, 80, 45, 90];
var filteredNumbers = numbers.filter(function (number) {
    return number > 50;
});
console.log(filteredNumbers); // [55, 80, 90]

var cities = ["Cairo", "Giza", "Alex", "Aswan"];
var firstCity = cities.find(function (city) {
    return city.startsWith("A");
});
var firstCityIndex = cities.findIndex(function (city) {
    return city.startsWith("A");
});
console.log(firstCity); // "Alex"
console.log(firstCityIndex); // 2

var letters = ["a", "b", "c", "d", "e"];
var copy = letters.slice(1, 4);
console.log(copy); // ["b", "c", "d"]
console.log(letters); // ["a", "b", "c", "d", "e"]

var numbers = [5, 10, 15, 20];
var removedItems = numbers.splice(1, 2);
console.log(removedItems); // [10, 15]
console.log(numbers); // [5, 20]

var ages = [16, 21, 17, 19];
var hasAdult = ages.some(function (age) {
    return age >= 18;
});
var allAdults = ages.every(function (age) {
    return age >= 18;
});
console.log(hasAdult); // true
console.log(allAdults); // false

var numbers = [5, 10, 15, 20];
var total = numbers.reduce(function (acc, num) {
    return acc + num;
}, 0);
console.log(total); // 50

/*
Task D — Mix (Objects + Arrays)
25.
You have this array of students:
[{ name: "Omar", grade: 80 }, { name: "Mona",grade: 90 }, { name: "Ali", grade: 70 }]
Use a loop to print each student name andgrade.
26.
From the same students array, use
filter
to get only students with grade greater than orequal to 80, then print their names only using
map
.
27.
Create an array of product objects. Each product has
name
and
price
. Use
reduce
tocalculate the total price of all products and print it.
28.
You have:
["js", "html", "css", "js", "react", "js"]
. Print how many times
"js"
appears in the array.
29.
Create an object
classroom
with:
teacher
(string), and
students
(array of 4 names).Print the teacher name, print the number of students, and print the last student name.
30.
You have this array:
[{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book",price: 50 }, { id: 3, title: "Bag", price: 25 }]
. Create a new array that containsonly the titles in uppercase, then create another array that contains only products with priceless than 30, and finally print the total of all prices.
*/


// solution Task D:

var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (var i = 0; i < students.length; i++) {
    console.log(students[i].name);
    console.log(students[i].grade);
}

var filteredStudents = students.filter(function (student) {
    return student.grade >= 80;
});
for (var i = 0; i < filteredStudents.length; i++) {
    console.log(filteredStudents[i].name);
}

var products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 },
    { name: "Bag", price: 25 }
];
var total = products.reduce(function (acc, product) {
    return acc + product.price;
}, 0);
console.log(total);

var products = ["js", "html", "css", "js", "react", "js"];
var jsCount = 0;
for (var i = 0; i < products.length; i++) {
    if (products[i].name === "js") {
        jsCount++;
    }
}
console.log(jsCount);

var classroom = {
    teacher: "John",
    students: ["Alice", "Bob", "Charlie", "David"]
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[-1]);

var products = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];
var uppercaseTitles = products.map(function (product) {
    return product.title.toUpperCase();
});
var expensiveProducts = products.filter(function (product) {
    return product.price > 30;
});
var total = products.reduce(function (acc, product) {
    return acc + product.price;
}, 0);
console.log(uppercaseTitles);
console.log(expensiveProducts);
console.log(total);