// Task A — Strings
// 1.
// Create a variable with a full name (for example
// "Ahmed Ali"
// ). Print how many charactersare in that name.
// 2.
// Take the sentence
// "I am learning JavaScript"
// . Print it once in uppercase and once inlowercase.
// 3.
// You have an email:
// "student@nti.com"
// . Check whether this email contains the character
// "@"
// and print the result.
// 4.
// For the word
// "JavaScript"
// , print the first character and the last character.
// 5.
// In the text
// "This is a bad day"
// , replace the word
// "bad"
// with
// "good"
// , then print thenew text.
// 6.
// Take the sentence
// "I love coding"
// . Split it into an array of words, then join those wordsagain using
// "-"
// between them and print the result.
// 7.
// You have the text
// " nti egypt training "
// . Remove the extra spaces from the start andend, convert the text to uppercase, then replace
// "EGYPT"
// with
// "CAIRO"
// and print the finalresult.


// solution Task A: 
var fullName = "Ahmed Ali";
console.log("Number of characters in the full name:", fullName.length);

var sentence = "I am learning JavaScript";
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

var email = "student@nti.com";
console.log("Email contains '@':", email.includes("@")); // Email contains '@': true

var word = "JavaScript";
console.log("First character:", word.charAt(0));
console.log("Last character:", word.charAt(word.length - 1));

var text = "This is a bad day";
var replacedText = text.replace("bad", "good");
console.log("Replaced text:", replacedText); // Replaced text: This is a good day

var sentence = "I love coding";
var words = sentence.split(" ");
var joined = words.join("-");
console.log("Joined text:", joined); // Joined text: I-love-coding

var text = " nti egypt training ";
var trimmed = text.trim();
var uppercased = trimmed.toUpperCase();
var finalResult = uppercased.replace("EGYPT", "CAIRO");
console.log("Final result:", finalResult);


// Task B — Numbers & Math
// 8.
// Convert the string
// "45.8"
// into a real number, then print that number.
// 9.
// Using the number
// 7.6
// , print three results: rounded value, floor value, and ceil value.
// 10.
// From the numbers
// 12, 5, 28, 9
// , find and print the largest number and the smallestnumber.
// 11.
// Generate a random integer between 1 and 20 (inclusive) and print it.
// 12.
// Take the price
// 19.4567
// and print it with only 2 digits after the decimal point.
// 13.
// Generate 5 random integers between 1 and 50. Then print the largest number, the smallestnumber, and the average of the 5 numbers (show the average with 2 decimal places).

// solution Task B: 
var number = "45.8";
var realNumber = parseFloat(number);
console.log("Real number:", realNumber); // Real number: 45.8

var number = 7.6;
var rounded = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);
console.log("Rounded value:", rounded);
console.log("Floor value:", floor);
console.log("Ceil value:", ceil);

var numbers = [12, 5, 28, 9];
var largest = Math.max(...numbers);
var smallest = Math.min(...numbers);
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

var randomInteger = Math.floor(Math.random() * 20) + 1;
console.log("Random integer:", randomInteger);

var price = 19.4567;
var formattedPrice = price.toFixed(2);
console.log("Formatted price:", formattedPrice); // Formatted price: 19.46

var randomNumbers = [];
for (var i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}
var maxNumber = Math.max(...randomNumbers);
console.log("Random numbers:", randomNumbers);
var minNumber = Math.min(...randomNumbers);
var sum = randomNumbers.reduce((a, b) => a + b, 0);
var average = (sum / randomNumbers.length).toFixed(2);
console.log("Largest number:", maxNumber);
console.log("Smallest number:", minNumber);
console.log("Average:", average);

// Task C — Loops
// 14.
// Write a
// for
// loop that prints all numbers from 1 to 20.
// 15.
// Write a
// for
// loop that prints only the odd numbers from 1 to 15.
// 16.
// Write a
// while
// loop that counts down from 10 to 1 and prints each number.
// 17.
// You have this array:
// ["Sara", "Omar", "Mona", "Youssef"]
// . Use
// for...of
// to print each name on a new line.
// 18.
// Use a
// for
// loop with
// break
// to print numbers from 1 to 10, but stop the loop before printing 7. The output should be: 1 2 3 4 5 6
// 19.
// Use nested loops to print the multiplication table from 1 to 3. Each line should look like:
// 2 * 3 = 6
// 20.
// Write a program that prints all numbers from 1 to 30, but: skip every number that is divisible by 3 using
// continue
// , and stop completely when you reach number 25 using
// break
//.

// solution Task C: 
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

for (var i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

var names = ["Sara", "Omar", "Mona", "Youssef"];
for (var name of names) {
    console.log(name);
}

for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    if (i === 25) {
        break;
    }
    console.log(i);
}

/*

Task D — Mix (Strings + Numbers + Loops)
21.
Using a loop, print each letter of the word
"HELLO"
on a separate line.
22.
You have the array
[10, 20, 30, 40]
. Calculate the sum of all numbers and print the total.
23.  
Count how many times the letter
"a"
or
"A"
appears in this sentence:
"JavaScript isamazing and awesome"
Then print the count.
24.
From the grades array
[70, 85, 92, 60, 77, 88]
, print only the even grades.
25.
26.
Using nested loops, print this stars pattern:
*
* *
* * *
* * * *
26.
You have this array of student names: 
["ahmed", "sara", "omar", "laila", "hassan"]
.Loop through the array, convert each name to uppercase, then print only the names that startwith the letter
"A"
or
"S"
, and also print how many names matched.

*/

// solution Task D: 
var word = "HELLO";
for (var i = 0; i < word.length; i++) {
    console.log(word.charAt(i));
}

var numbers = [10, 20, 30, 40];
var sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

var sentence = "JavaScript isamazing and awesome";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "a") {
        count++;
    }
}
console.log("Count:", count);

var grades = [70, 85, 92, 60, 77, 88];
var evenGrades = [];
for (var i = 0; i < grades.length; i++) {
    if (grades[i] % 2 === 0) {
        evenGrades.push(grades[i]);
    }
}
console.log("Even grades:", evenGrades);

var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var count = 0;
for (var i = 0; i < students.length; i++) {
    if (students[i].charAt(0).toUpperCase() === "A" || students[i].charAt(0).toUpperCase() === "S") {
        count++;
    }
}
console.log("Count:", count);