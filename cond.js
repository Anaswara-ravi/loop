

// 1. Determine the grade (A, B, C, D, F) based on a student's marks

// let mark = Number(prompt("Enter your mark:"));

// if (mark >= 90) {
//     console.log("Grade A");
// } else if (mark >= 80) {
//     console.log("Grade B");
// } else if (mark >= 70) {
//     console.log("Grade C");
// } else if (mark >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Grade F");
// }


// 2.Check whether a year is a leap year.

// let year = Number(prompt("Enter year:"));

// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     console.log("Leap year");
// } else {
//     console.log("Not a leap year");
// }


// let unit = Number(prompt("Enter units:"));
// let bill;

// if (unit <= 100) {
//     bill = unit * 5;
// } else if (unit <= 200) {
//     bill = (100 * 5) + ((unit - 100) * 7);                          4. Electricity bill using slabs
// } else {
//     bill = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
// }

// console.log("Electricity bill = ₹" + bill);




// let salary = Number(prompt("Enter salary:"));
// let tax;

// if (salary <= 250000) {
//     tax = 0;
// } else if (salary <= 500000) {
//     tax = salary * 0.05;                        5. Income tax based on salary
// } else if (salary <= 1000000) {
//     tax = salary * 0.20;
// } else {
//     tax = salary * 0.30;
// }

// console.log("Tax = ₹" + tax);


// let age = Number(prompt("Enter age:"));
// let citizen = prompt("Are you a citizen? yes/no");

// if (age >= 18 && citizen == "yes") {                //6. Passport eligibility
//     console.log("Eligible for passport");
// } else {
//     console.log("Not eligible");
// }


// 7. Admin panel access
// let role = prompt("Enter your role:");
// let status = prompt("Enter account status:");

// if (role == "admin" && status == "active") {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }



// let password = prompt("Enter password:");

// if (password.length >= 8) {
//     console.log("Valid password");
// } else {
//     console.log("Password must contain at least 8 characters");
// }



// 10. Shipping charges
// let amount = Number(prompt("Enter order amount:"));
// let member = prompt("Are you a member? yes/no");

// if (amount >= 1000 || member == "yes") {
//     console.log("Free shipping");
// } else {
//     console.log("Shipping charge = ₹100");
// }