//array
// array is a dta structure used to store multiple values a single variable
//eg:
            //let arr=[1,2,3,4]
            //let arr=["apple","orange","grape"]
            //let arr=["apple",1,2,3]


//       let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr[0]);
// console.log(arr.length);

// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
// }


// let arr=["apple","orange","mango"]
// arr[0]="grape"
// console.log(arr)



// creating array using constructor

// let arr2=new Array()
// arr2[0]="vijay"
// arr2[1]="surya"
// console.log(arr2)



//methods od array


// let arr=[1,2,3,4,5]
// arr.push(6)
// console.log(arr)
// let removedElement=arr.pop()
// console.log(removedElement,arr)
// let removedElementfromfirst=arr.shift()
// console.log(removedElementfromfirst,arr)
// arr.unshift(10)
// console.log(arr)
// console.log(arr.slice(0,2))
// let newArr=[9,7,8]
// let=bigArr=Array.concat(newArr)
// console.log(bigArr)
// arr.splice(0,1,100,200)
// console.log(arr)
// console.log(arr)
// console.log(arr.indexOf(4))



//Create an array of 10 student names. Use a for loop and conditions to print only the names that contain more than 5 characters.
// let stud=[
//     "ajay",
//     "abhi",
//     "akhil",
//     "arjun",
//     "fidha",
//     "aravindh",
//     "anaswara",
//     "amaldev",
//     "akshay",
//     "arunkumar"



// ]
// for(i=0;i<stud.length;i++){
//     if (stud[i].length > 5) {
//         console.log(stud[i]);
// }
// }

//Create an array of 10 numbers. Use a for loop and if-else to print whether each number is even or odd.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//         console.log(num[i] + " is Even");
//     } else {
//         console.log(num[i] + " is Odd");
//     }
// }


//Create an array of 10 names. Use a for loop and condition to print only the names starting with the letter "A".
//  let stud=[
//      "ajay",
//      "abhi",
//      "akhil",
//      "arjun",
//      "fidha",
//      "aravindh",
//      "anaswara",
//      "amaldev",
//      "akshay",
//      "arunkumar"
//  ]
//  for (let i = 0; i < stud.length; i++){
//      if (stud[i].startsWith("a")) {
//         console.log(stud[i]);
//  }
//  }


//Create an array of student marks. Use a for loop and conditions to print "Pass" if the mark is 50 or above, otherwise print "Fail".
// let mark=[70,30,55,10,100,90,77,45]
// for (let i = 0; i < mark.length; i++){
//     if(mark[i]>=50){
//         console.log("passed 🎉 🥳 🎊 🥳 🎉 ✨ 🙌 💃🏻")

//     }else{
//         console.log("failed 🥀🚶‍♀️")
//     }
// }



//Create an array of product names. Ask the user for a product name and use a for loop and conditions to check whether the product exists in the array.

// let product=["phone","laptop","TV","fridge","air fryer"]
// let search = prompt("Enter product name:");
//  for (let i = 0; i < product.length; i++){
//     if(product[i]==search){
//         console.log("the product is exits")
//     }else{
//         console.log("the product not exits")
//     }
//  }

// Create an array of words. Use a for loop and conditions to count the number of vowels in each word

//  let words = ["apple", "banana", "orange", "grape", "mango"];

// for (let i = 0; i < words.length; i++) {
//     let count = 0;

//     for (let j = 0; j < words[i].length; j++) {
//         if (
//             words[i][j] == "a" ||
//             words[i][j] == "e" ||
//             words[i][j] == "i" ||
//             words[i][j] == "o" ||
//             words[i][j] == "u"
//         ) {
//             count++;
//         }
//     }

//     console.log(words[i], "has", count, "vowels");
// }

// Create an array of different words. Use a for loop and condition to print only the words having more than 6 characters.

// let words = ["apple", "banana", "computer", "laptop", "javascript", "school"];

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 6) {
//         console.log(words[i]);
//     }
// }



// Create an array of numbers. Use a for loop and conditions to find the largest number in the array.

// let numbers = [10, 25, 8, 45, 30, 15];

// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log("Largest number:", largest);


// Create an array of usernames. Use a for loop and conditions to check whether each username has at least 5 characters and print "Valid" or "Invalid".


// let usernames = ["anu", "anaswara", "alex", "rahul", "me"];

// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i].length >= 5) {
//         console.log(usernames[i], "Valid");
//     } else {
//         console.log(usernames[i], "Invalid");
//     }
// }


// Create an array of product prices. Use a for loop to calculate the total price and use conditions to apply a 10% discount if the total is above ₹2000.
// let prices = [500, 800, 600, 400];

// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//     total = total + prices[i];
// }

// if (total > 2000) {
//     total = total - (total * 10 / 100);
// }

// console.log("Total price:", total);



// let animal=["cat","dog","tiger"]
// console.log(animal)
// // animal[0]="monkey";
// // console.log(animal)
// // console.log(animal.length)
// for(i=0;i<5;i++){
//     console.log(animal)
// }