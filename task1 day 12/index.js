// تاسك ١ - نستقبل من اليوز رقمين ونطلع ناتج جميع العمليات الحسابيه بينهم 

var num1 = window.prompt("Enter the first number");
var num2 = window.prompt("Enter the second number");

num1 = parseInt(num1);
num2 = parseInt(num2);

var add = document.getElementById("add").innerHTML = "The addition of " + num1 + " and " + num2 + " is " + (num1 + num2);
var sub = document.getElementById("sub").innerHTML = "The subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2);
var mul = document.getElementById("mul").innerHTML = "The multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2);
var div = document.getElementById("div").innerHTML = "The division of " + num1 + " and " + num2 + " is " + (num1 / num2);

console.log("The addition of " + num1 + " and " + num2 + " is " + (num1 + num2));
console.log("The subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2));
console.log("The multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2));
console.log("The division of " + num1 + " and " + num2 + " is " + (num1 / num2));

// تاسك ٢ - نستقبل من اليوز الفيرست واللاست نيم والعمر ونكتبله جمله ترحيبيه

var firstName = window.prompt("Enter your first name");
var lastName = window.prompt("Enter your last name");

var concatination = document.getElementById("concatination").innerHTML = "Hello " + firstName + " " + lastName;

console.log("Hello " + firstName + " " + lastName);
