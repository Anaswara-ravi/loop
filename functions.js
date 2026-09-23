//function greet() {
  //  console.log("Good morning");
//}

//greet();


//function sum(a, b) {
   // console.log(a + b);
//}//
//sum(6, 4);



//function sum(a, b) {
  //  let result=a+b
    //return result;
//}

//let result = sum(6, 4);

//console.log(result);

//
//function OddEven(num) {
  //  if (num % 2 === 0) {
   //     console.log(" its a Even num!!!!!😁");
    //} else {
      //  console.log(" its a Odd num!!!!😁");
    //}
//}

//let num = Number(prompt(" Enter the num:"));

//OddEven(num);



//let sum=function(a,b){
  //  return a+b                   //ano

//}
//console.log(sum(9,6))



//let sum=(a,b)=>a+b             //arrow function
//console.log(sum(5,100))
//let choice = 1;

//while (choice <= 4) {

  //  let num1 = Number(prompt("Enter the num1:"));
    //let num2 = Number(prompt("Enter the num2:"));

    //choice = Number(prompt("1. Add2. Sub3. Div4. Mul5"));
    //if (choice == 1) {
      //  alert("Result " + (num1 + num2));
    //}
    //else if (choice == 2) {
      //  alert("Result " + (num1 - num2));
    //}
    //else if (choice == 3) {
      //  alert("Result " + (num1 / num2));
    //}
    //else if (choice == 4) {
      //  alert("Result " + (num1 * num2));
    //}
//}


//function cal(a,b,peration)
//{
  //  return operation(a,b);                     //higher order
//}
//function add(x,y){    
  //  return x+y;

//}

//console.log(calculated(10,20,add));




//(function(){
  //console.log("good mrng")
//})();
//(function(name){                        //immediatly invoked function expression
 // console.log(`good mrng ${name}`)
//})("anu");

//function factorial(n){
  //if (n==1){
    //return 1;
  //}
  //return n* factorial(n-1)

//}
//console.log(factorial(5))


//function outer(){
  //let count=0;
  //function inner(){
    //count++;
    //console.log(count);
  //}
  //return inner;
//}
//let counter=outer();
//counter();
//counter();


//string 
//let name="anaswara"
//console.log(name[5])
//console.log(name.length)
//for(let i=0;i<=name.length-1;i++){
 // console.log(name[i])
//}

//let name = " anaswara ";

//console.log(name.charAt(3));

//console.log(name.toUpperCase());

//console.log(name.toLowerCase());

//console.log(name.length);

//name=name.trim()
//console.log(name.length)
//console.log(name.startsWith("hai"));
//console.log(name.endsWith("hai"));
//console.log(name.indexOf('a'))
//console.log(name.slice(0,7))
//console.log(name.replace("anaswara","abhijith"))
//let fruits="apple,orange,grape"                          //methods
//let frts=fruits.split('a')
//console.log(fruits)
//let frt1=",mango"
//console.log(fruits.concat(frt1))
//console.log(fr)



//let str = prompt("Enter a string:");
//let count = 0;

//for (let i = 0; i < str.length; i++) {
 //   if (
   //     str[i] == "a" ||  str[i] == "e" || str[i] == "i" || str[i] == "o" ||  str[i] == "u"            //vowels of the user input char
    //) {
      //  count++;
    //} else {
    //}
//}

//console.log("Number of vowels:", count);



//Write a JavaScript program to count the number of consonants in a given string using a for loop and if-else.

//let str = prompt("Enter a string:");
//let count = 0;

//for (let i = 0; i < str.length; i++) {
  // if (
    //     str[i] != "a" &&
      //  str[i] != "e" &&
        //str[i] != "i" &&
        //str[i] != "o" &&
        //str[i] != "u"
    //) {
      //count++;
    //} else {
    //}
//}
//console.log("Number of consonants :" + count);







//Write a JavaScript program to count the number of uppercase and lowercase letters in a given string using a for loop and if-else.
// let str = prompt("Enter a string:");

// let uppercase = 0;
// let lowercase = 0;

// for (let i = 0; i < str.length; i++) {

//     if (str[i] >= "A" && str[i] <= "Z") {
//         uppercase++;
//     } else if (str[i] >= "a" && str[i] <= "z") {
//         lowercase++;
//     }
// }

// console.log("Number of uppercase letters:", uppercase);
// console.log("Number of lowercase letters:", lowercase);



//Write a JavaScript program to count the number of digits present in a given string using a for loop and if-else


//   let str = prompt("Enter a string:");

// let count = 0;

// for (let i = 0; i < str.length; i++) {

//     if (str[i] >= "0" && str[i] <= "9") {
//         count++;
//     } else {
//     }
// }

// console.log("Number of digits: " + count);




// Write a JavaScript program to reverse a given string using a for loop.

// let str = prompt("Enter a string:");
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// console.log("Reverse: " + reverse);
// Write a JavaScript program to check whether a given string is a palindrome using a for loop and if-else.
// let str = prompt("Enter a string:");
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// if (str == reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a palindrome");
// }
// Write a JavaScript program to count how many times a particular character occurs in a given string using a for loop and if-else.
// let str = prompt("Enter a string:");
// let char = prompt("Enter the character to count:");

// let count = 0;

// for (let i = 0; i < str.length; i++) {

//     if (str[i] == char) {
//         count++;
//     } else {
//     }
// }

console.log("Character occurs " + count + " times");
// Write a JavaScript program to print each character of a string and identify whether it is a vowel, consonant, or digit using for loop and if-else.
// let str = prompt("Enter a string:");

// for (let i = 0; i < str.length; i++) {

//     if (
//         str[i] == "a" || 
//         str[i] == "e" || 
//         str[i] == "i" || 
//         str[i] == "o" || 
//         str[i] == "u"
//     ) {
//         console.log(str[i] + " = Vowel");

//     } else if (str[i] >= "0" && str[i] <= "9") {
//         console.log(str[i] + " = Digit");

//     } else {
//         console.log(str[i] + " = Consonant");
//     }
// }
// Write a JavaScript program to find the character with the highest ASCII value in a given string using a for loop and if-else.
// let str = prompt("Enter a string:");

// let highest = str[0];

// for (let i = 1; i < str.length; i++) {

//     if (str[i].charCodeAt(0) > highest.charCodeAt(0)) {
//         highest = str[i];
//     } else {
//     }
// }

// console.log("Character with highest ASCII value: " + highest);
// console.log("ASCII value: " + highest.charCodeAt(0));
// Write a JavaScript program to find the first repeated character in a given string using a for loop and if-else.
// let str = prompt("Enter a string:");
// let repeated = "";

// for (let i = 0; i < str.length; i++) {

//     for (let j = i + 1; j < str.length; j++) {

//         if (str[i] == str[j]) {
//             repeated = str[i];
//             break;
//         }
//     }

//     if (repeated != "") {
//         break;
//     }
// }

// if (repeated != "") {
//     console.log("First repeated character: " + repeated);
// } else {
//     console.log("No repeated character");
// }

