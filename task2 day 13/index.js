// Task 2 - 1: Working with Data and Basic Validation
// Task:
// 1. Create two variables containing text:
// - Username.
// - Password.
// 2. Perform a basic validation using if:
// - If the username is empty, display an alert saying: "Username is required".
// - If the password is less than 8 characters, display an alert saying: "Password must be at least 8
// characters".
// 3. Use console.log() to display the username and password after they pass the validation.

var username = "JohnDoe";
var password = "password123";

if (username === "") {
    alert("Username is required");
} else if (password.length < 8) {
    alert("Password must be at least 8 characters");
} else {
    console.log("Username:", username);
    console.log("Password:", password);
}

// Task 2 - 2 :
// Objective: Build a program to evaluate employees based on multiple criteria (such as: years of experience, work performance, and overall rating).
// Task Requirements:
// 1.
// Gather Employee Data:
// a.
// Ask for basic employee information: name, age, and years of experience.
// b.
// Ask the employee for their self-rating using prompt (from 1 to 10).
// 2.
// Determine Job Category:
// a.
// if/else: If years of experience is less than 2 → "Junior".
// b.
// If between 2 and 5 → "Mid-Level".
// c.
// If between 5 and 10 → "Senior".
// d.
// If more than 10 → "Expert".
// 3.
// Check Performance Level:
// a.
// The self-rating (input by the user) will determine if the employee is:
// i.
// 9 or higher → "Excellent"
// ii.
// 7-8 → "Good"
// iii.
// 5-6 → "Average"
// iv.
// Less than 5 → "Needs Improvement"
// b.
// Use switch to determine the rating.
// 4.
// Salary Calculation:
// a.
// The employee should receive a bonus based on years of experience:
// i.
// If experience is between 0 and 2, bonus is 10% of the base salary.
// ii.
// If between 3 and 5, bonus is 15%.
// iii.
// If more than 5, bonus is 20%.
// b.
// Formula: Final Salary = Base Salary + Bonus
// 5.
// Work Shift Time Calculation:
// a.
// Use Date to determine the current hour.
// b.
// If the hour is between 9:00 AM and 6:00 PM, the employee is in day shift.
// c.
// If the hour is between 6:00 PM and 9:00 AM, the employee is in night shift.
// 6.
// Summary Output:
// a.
// Calculate the Final Salary.
// b.
// Display the results using console.log(), alert(), and DOM.
// c.
// Output the report using console.log() and document.getElementById().
// Instructions:
// 1.
// Get the employee's data (name, age, years of experience, self-rating).
// 2.
// Determine the job category (Junior, Mid-Level, Senior, Expert).
// 3.
// Calculate the performance rating based on the self-rating.
// 4.
// Calculate the bonus based on years of experience.
// 5.
// Calculate the final salary.
// 6.
// Determine if the employee is in the day or night shift.
// 7.
// Display the results in console, alert, and DOM.


// Get the employee's data
var name = prompt("Enter your name:");
var age = Number(prompt("Enter your age:"));
var yearsOfExperience = Number(prompt("Enter your years of experience:"));
var selfRating = Number(prompt("Enter your self-rating (1-10):"));

// Determine the job category
var jobCategory;

if (yearsOfExperience < 2) {
    jobCategory = "Junior";
} else if (yearsOfExperience <= 5) {
    jobCategory = "Mid-Level";
} else if (yearsOfExperience <= 10) {
    jobCategory = "Senior";
} else {
    jobCategory = "Expert";
}

// Determine the performance rating using switch
var performanceRating;

switch (true) {
    case (selfRating >= 9):
        performanceRating = "Excellent";
        break;

    case (selfRating >= 7):
        performanceRating = "Good";
        break;

    case (selfRating >= 5):
        performanceRating = "Average";
        break;

    default:
        performanceRating = "Needs Improvement";
}

// Salary Calculation
var baseSalary = 5000;
var bonusRate;

if (yearsOfExperience <= 2) {
    bonusRate = 0.10;
} else if (yearsOfExperience <= 5) {
    bonusRate = 0.15;
} else {
    bonusRate = 0.20;
}

var bonus = baseSalary * bonusRate;
var finalSalary = baseSalary + bonus;

// Work Shift Time Calculation
var currentHour = new Date().getHours();
var workShift;

if (currentHour >= 9 && currentHour < 18) {
    workShift = "Day Shift";
} else {
    workShift = "Night Shift";
}

// Create Report
var report =
    "Employee Report\n" +
    "Name: " + name + "\n" +
    "Age: " + age + "\n" +
    "Years of Experience: " + yearsOfExperience + "\n" +
    "Self Rating: " + selfRating + "\n\n" +
    "Job Category: " + jobCategory + "\n" +
    "Performance: " + performanceRating + "\n\n" +
    "Base Salary: " + baseSalary + "\n" +
    "Bonus: " + bonus + "\n" +
    "Final Salary: " + finalSalary + "\n\n" +
    "Work Shift: " + workShift;

// Console Output
console.log(report);

// Alert Output
// alert(report);

// DOM Output
document.getElementById("result1").innerHTML =
    "<h2>Employee Report</h2>" +
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Age:</strong> " + age + "</p>" +
    "<p><strong>Years of Experience:</strong> " + yearsOfExperience + "</p>" +
    "<p><strong>Self Rating:</strong> " + selfRating + "</p>" +
    "<p><strong>Job Category:</strong> " + jobCategory + "</p>" +
    "<p><strong>Performance:</strong> " + performanceRating + "</p>" +
    "<p><strong>Base Salary:</strong> " + baseSalary + "</p>" +
    "<p><strong>Bonus:</strong> " + bonus + "</p>" +
    "<p><strong>Final Salary:</strong> " + finalSalary + "</p>" +
    "<p><strong>Work Shift:</strong> " + workShift + "</p>";


// Task 2 - 3: 
// JavaScript Mini Project: Smart User Checker App
// n Objective: Build a simple app that asks the user for input, processes it using logic and
// conditions, and shows the result in different ways.
// n Step 1: Ask the User for:
// - Their name (via prompt)
// - Their birth year
// - Whether they are a student (using confirm)
// n Step 2: Process the Input:
// - Calculate the user's current age using: new Date().getFullYear() - birth year
// - Use conditional logic to categorize their age:
// - Less than 13 ® Kid
// - 13 to 17 ® Teen
// - 18 to 59 ® Adult
// - 60 or older ® Senior
// - If the user is a student, also display: "Don't forget to study hard!"
// n Step 3: Show the Output:
// You must display the final message in all three ways:
// - In the browser console (console.log)
// - In an alert box
// - In the HTML page using DOM (document.getElementById(...).innerText)
// n Example Output:
// Hello Ali, you are 20 years old.
// Category: adult.
// Don't forget to study hard!
// n Requirements:
// - Use variables of different types (string, number, boolean)
// - Use if / else if / else
// - Use arithmetic operations
// - Show the result using three output methods
// Good luck! n

// Step 1: Ask the User for Input
var userName = prompt("Enter your name:");
var birthYear = Number(prompt("Enter your birth year:"));
var isStudent = confirm("Are you a student?");

// Step 2: Process the Input
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

var category;

if (age < 13) {
    category = "Kid";
} else if (age >= 13 && age <= 17) {
    category = "Teen";
} else if (age >= 18 && age <= 59) {
    category = "Adult";
} else {
    category = "Senior";
}

// Create the final message
var message = "Hello " + userName + ", you are " + age + " years old.\n";
message += "Category: " + category + ".";

if (isStudent) {
    message += "\nDon't forget to study hard!";
}

// Step 3: Show the Output

// Console
console.log(message);

// Alert
alert(message);

// DOM
document.getElementById("result2").innerText = message;