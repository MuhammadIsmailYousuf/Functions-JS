//Assi 14 FUNCTIONS:
//TASK 1
//Write a function that displays current date & time in your browser.

function displayCurrentDateTime() {
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  
    alert("Current Date: " + month + "/" + date + "/" + year + "\nCurrent Time: " + hour + ":" + minute + ":" + second);
  }
  
  displayCurrentDateTime();

//TASK 2
//Write a function that takes first & last name and then it greets the user using his full name.

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
  }

//TASK 3
//Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
    alert("The sum of the two numbers is: " + sum);
  }
  addNumbers();




  
 
















