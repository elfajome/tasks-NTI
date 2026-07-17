/* 
Task 1: Functions and Callback Functions
Task:
1.
Create a multiply function that takes two numbers as parameters and returns their multiplication.
2.
Create a function called calculate that accepts two numbers and a function (multiply from step 1). The function calculate should perform the operation passed to it.
3.
Callback: Create another function displayResult that accepts the result of the calculation from calculate and displays it using console.log().
4.
Call the calculate function and pass multiply and two numbers as parameters.
*/

// solution Task 1:

function multiply(a, b) {
    return a * b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

function displayResult(result) {
    console.log(result);
}

displayResult(calculate(2, 3, multiply));

/*
Task 2: Working with setTimeout and setInterval
Task:
1.
setTimeout Example:
a.
Create a greetUser function that logs the message "Hello, User!" after 3 seconds using setTimeout.
2.
setInterval Example:
a.
Create a countdown function that counts down from 10 to 1 and logs each number every second.
b.
After the countdown reaches 0, display the message "Time's up!".
3.
Clear setInterval:
a.
Modify the countdown function to stop the interval after 5 seconds using clearInterval.
4.
Clear setTimeout:
a.
Use setTimeout to log a message "This will be cleared!" after 5 seconds and then use clearTimeout to cancel the message before it appears.
*/

// solution Task 2: 

// setTimeout Example
function greetUser() {
    setTimeout(function () {
        console.log("Hello, User!");
    }, 3000);
}

// setInterval Example
function countdown() {
    var count = 10;
    var interval = setInterval(function () {
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(interval);
            console.log("Time's up!");
        }
    }, 1000);
}

// Clear setInterval & setTimeout
function clearCountdown() {
    var interval = setInterval(function () {
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(interval);
            console.log("Time's up!");
        }
    }, 1000);
    // Clear the interval after 5 seconds
    setTimeout(function () {
        clearInterval(interval);
    }, 5000);
}

greetUser();
countdown();
clearCountdown();

/* 
Task 3:
1.Create an empty array called items to store data.
2.Implement the following CRUD operations:
a.Create: Add a new item to the array.
b.Read: Display all the items in the array.
c.Update: Modify an existing item by its index.
d.Delete: Remove an item by its index.
3.Hints:
a.Use push() to add items to the array.
b.Use forEach() or console.log() to display the items.
c.Use index to access and modify items in the array.
d.Use splice() to delete an item from the array.
e.Each operation on function
*/

// solution Task 3:

var items = [];

function createItem(item) {
    items.push(item);
}

function readItems() {
    items.forEach(function (item) {
        console.log(item);
    });
}

function updateItem(index, newItem) {
    items[index] = newItem;
}

function deleteItem(index) {
    items.splice(index, 1); 
}

createItem("Item 1");
createItem("Item 2");
createItem("Item 3");
readItems(); // Output: Item 1, Item 2, Item 3
updateItem(1, "Modified Item");
readItems(); // Output: Item 1, Modified Item, Item 3
deleteItem(0);
readItems(); // Output: Modified Item, Item 3