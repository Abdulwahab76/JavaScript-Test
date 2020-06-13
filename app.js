//   ALL JAVASCRIPT CHAPTERS SOLUTIONS  //

// ==== Chapter # 1 ALERTS and Task # 1

// alert("Hello World");

// ==== Chapter # 1 ALERTS and Task # 2

// alert("Error! Please enter a valid password.");

// ==== Chapter # 1 ALERTS and Task # 3

// alert("Welcome to JS land.." + "\r\n" + "Happy Coding!");

// ==== Chapter # 1 ALERTS and Task # 4
// alert("Welcome to JS land..");
// alert("Happy Coding!");

// ==== Chapter # 1 ALERTS and Task # 5

//Copy from web Brwoser console
// alert("Hello.. i can run JS through my web browser's console");

// ==== Chapter # 1 ALERTS and Task # 6

// Write script tag to use place is;
// a) Head

// ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 1

// var username = "Abdul";
// var myName = " Wahab";
// alert(username + myName);

//  ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 2
// var message;
// message = "Hello World";
// alert(message);

//  ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 3

// var name = "Abdul Wahab";
// var age = "18 years old";
// var certification = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(certification);

//  ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 4
// var food = "Pizza";

// alert(food + "\r\n" + "Pizz" + "\r\n" + "Piz" + "\r\n" + "Pi" + "\r\n" + "P");

//  ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 5

// var email = "My email address is" + " aw310572@gmail.com";
// alert(email);

//  ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 6

// document.write("Yah! I can wrtie HTML content through JavaScript");

//  ==== Chapter # 2 VARIABLES FOR STRINGS and Task # 7

// var show = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(show);

// var book = " A smarter way to learn JavaScript ";
// alert("I am trying to learn from the book" + book);

// ==== Chapter # 3  VARIABLES FOR NUMBERS and Task # 1

// var age = "I am 15 years old";
// alert(age);

// ==== Chapter # 3  VARIABLES FOR NUMBERS and Task # 2
// var visit = "You have visited this site 14 times";
// alert(visit);

// ==== Chapter # 3  VARIABLES FOR NUMBERS and Task # 3
// var birthyear = "My birth year is 2001";
// var data = "Data type of my declared variable is number";
// document.write(birthyear + "<br>" + data);

// ==== Chapter # 3  VARIABLES FOR NUMBERS and Task # 4
// var visitor = " <b>John Doe </b>";
// var quantity = " <b> 5 T-shirt</b>";
// var title = " on XYZ Clothing store";
// document.write(visitor + " ordered" + quantity + "(s)" + title);

// ==== Chapter # 4  VARIABLE NAMES: Legal & Illegal and Task # 1

// var variable1 = "Hello World";
// var variable2 = "Happy coding";
// var variable3 = "2020";
// document.write(variable1 + variable2 + variable3);

// ==== Chapter # 4  VARIABLE NAMES: Legal & Illegal and Task # 2

// 5 legal variables name

// 1) username
// 2) _username
// 3) username12
// 4) $username
// 5) userName - camel

// 5 illegal variables name

// 1) 123
// 2) 12me
// 3) if is js keyword
// 4) user name - space
// 5) "user" - quotation

// ==== Chapter # 4  VARIABLE NAMES: Legal & Illegal and Task # 3

// var rules = " <b> Rules for naming JS variables </b>";
// document.write(rules + "<br>" + "<br>" + "<br>" + "<br>");
// var names =
//   "Variable names can only contain numbers, $ and _. For example : $my_1stVariable";
// var begin =
//   "Variables must begin with a letter, $ or _. For example $name, _name or name";
// var sensitive = "Variable names are case sensitive";
// var keywords = "Variable names should not be JS keywords";
// document.write(names + "<br>" + begin + "<br>" + sensitive + "<br>" + keywords);

// ==== Chapter # 5  MATH EXPRESSION and Task # 1

// var a = 3;
// var b = 5;
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is " + c);

//  ==== Chapter # 4  MATH EXPRESSION and Task # 2
//SUBTRACTION

// var a = 10;
// var b = 5;
// var c = a - b;
// document.write("Subtraction of " + a + " and " + b + " is " + c);

// MULTIPLICATION
// var a = 10;
// var b = 5;
// var c = a * b;
// document.write("Multiplication of " + a + " and " + b + " is " + c);

// DIVISION
// var a = 10;
// var b = 5;
// var c = a / b;
// document.write("Division of " + a + " and " + b + " is " + c);

// MODULUS
// var a = 5;
// var b = 25;
// var c = a % b;
// document.write("Modulus of " + a + " and " + b + " is " + c);

// ==== Chapter # 5  MATH EXPRESSION and Task # 3

// var value = "Value after variable declaration is undefined";
// var value1 = "Initial value: 5";
// var value2 = "Value after increment is: 6";
// var value3 = "Value after addition is: 13";
// var value4 = "Value after decrement is: 12";
// var value5 = "The remainder is : 0";
// document.write(
//   value +
//     "<br>" +
//     value1 +
//     "<br>" +
//     value2 +
//     "<br>" +
//     value3 +
//     "<br>" +
//     value4 +
//     "<br>" +
//     value5
// );

// ==== Chapter # 5  MATH EXPRESSION and Task # 4

// var ticket = 600;
// var ticket1 = 5;
// var c = ticket * ticket1;
// document.write("Total cost to buy 5 tickets to movie is " + c + " PKR");

// ==== Chapter # 5  MATH EXPRESSION and Task # 5

// var p = "Table of 4";
// document.write(p + "<br>");
// for (var i = 1; i <= 10; i++) {
//   document.write(" 4 " + " x " + i + " = " + 4 * i + "<br>");
// }

// ==== Chapter # 5  MATH EXPRESSION and Task # 6
// function cel(celsius) {
//   var cTemp = celsius;
//   var celFahr = (cTemp * 9) / 5 + 32;
//   var message = cTemp + "\xB0C is " + celFahr + " \xB0F.";
//   document.write(message + "<br>");
// }

// function feh(fahrenheit) {
//   var fTemp = fahrenheit;
//   var fehel = ((fTemp - 32) * 5) / 9;
//   var message = fTemp + "\xB0F is " + fehel + "\xB0C.";
//   document.write(message);
// }
// cel(25);
// feh(70);

// ==== Chapter # 5  MATH EXPRESSION and Task # 7

// var shop = "<h1> Shopping Cart </h1>";
// var item = 650;
// var item1 = 3;
// var item2 = 100;
// var item3 = 7;
// var item4 = 100;
// var a = item * item1 + item2 * item3 + item4;
// document.write(shop + "<br>" + "<br>" + "<br>");
// document.write(
//   "Price of item 1 is " +
//     item +
//     "<br>" +
//     "Quantity of item 1 is " +
//     item1 +
//     "<br>" +
//     "Price of item 2 is " +
//     item2 +
//     "<br>" +
//     "Quantity of item 2 is " +
//     item3 +
//     "<br>" +
//     " Shipping charges " +
//     item4 +
//     "<br>" +
//     "<br>" +
//     "<br>" +
//     "Total cost of your order is " +
//     a
// );

// ==== Chapter # 5  MATH EXPRESSION and Task # 8

// var val = 980;
// var val1 = 804;
// var val2 = 100;
// var val3 = (val1 / val) * val2;
// document.write(
//   "<h1> Marks Sheet </h1>" +
//     "<br>" +
//     "<br>" +
//     "Total Marks: " +
//     val +
//     "<br>" +
//     "Marks Obtained: " +
//     val1 +
//     "<br>" +
//     "Percentage " +
//     val3 +
//     "%"
// );

// ==== Chapter # 5  MATH EXPRESSION and Task # 9

// var us = 104.8;
// var total = 10;
// var riyal = 28;
// var total1 = 25;
// var sum = us * total + riyal * total1;
// document.write(
//   "<h1> Currency in PKR </h1>" +
//     "<br>" +
//     "<br>" +
//     "<br>" +
//     " Total currency in PKR " +
//     sum
// );

// ==== Chapter # 5  MATH EXPRESSION and Task # 10

// var add = 5;
// var multi = 10;
// var divid = 2;
// var sum = (add * multi) / divid;
// document.write(sum);

// ==== Chapter # 5  MATH EXPRESSION and Task # 11

// var current = 2020;
// var birth = 2001;
// var age = current - birth;
// document.write(
//   "<h1> Age Calculator </h1>" +
//     "<br>" +
//     "<br>" +
//     "Current Year " +
//     current +
//     "<br>" +
//     "Birth Year " +
//     birth +
//     "<br>" +
//     "Your age " +
//     age
// );

// ==== Chapter # 5  MATH EXPRESSION and Task # 12

// var circle = 20;
// var p = 125.67999999999;
// var k = 1256.8;
// document.write(
//   "<h1> The Geometrize </h1>" +
//     "<br>" +
//     "<br>" +
//     "Radius of circle " +
//     circle +
//     "<br> " +
//     "The circumference is " +
//     p +
//     "<br>" +
//     "The area is " +
//     k
// );

// ==== Chapter # 5  MATH EXPRESSION and Task # 13

// var snack = "Chocolate chip";
// var age = 18;
// var max = 65;
// var day = 3;
// var t = 17155;
// var sum = day * t;
// document.write(
//   "<h1> The Lifetime Supply Calculator </h1>" +
//     "<br>" +
//     "<br>" +
//     "Favourite snacks " +
//     snack +
//     "<br>" +
//     "Current age: " +
//     age +
//     "<br>" +
//     "Estimated Maximum Age: " +
//     max +
//     "<br>" +
//     "Amount of snacks per day: " +
//     day +
//     "<br>" +
//     "You will need " +
//     sum +
//     " chocolate chip to last you untill the ripe old age of 65"
// );

// ==== Chapter # 6-9 MATH EXPRESSION and Task # 1

// var val = 11;
// var val4 = 12;
// var val3 = 10;
// document.write(
//   "<h1> Result:  </h1>" +
//     "The value of a is: " +
//     val3 +
//     "<br>" +
//     "<br>" +
//     "The value of ++a is: " +
//     val +
//     "<br>" +
//     "Now the value of a is: " +
//     val +
//     "<br>" +
//     "<br>" +
//     "<br>" +
//     "The value of ++a is: " +
//     val +
//     "<br>" +
//     "Now the value of a is: " +
//     val4 +
//     "<br>" +
//     "<br>" +
//     "<br>" +
//     "The value of --a is: " +
//     val +
//     "<br>" +
//     "Now the value of a is: " +
//     val +
//     "<br>" +
//     "<br>" +
//     "<br>" +
//     "The value of ++a is: " +
//     val +
//     "<br>" +
//     "Now the value of a is: " +
//     val3 +
//     "<br>" +
//     "<br>"
// );

// ==== Chapter # 6-9 MATH EXPRESSION and Task # 2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write(
//   "a is " + a + "<br>" + "b is " + b + "<br>" + "Result is " + result
// );

// ==== Chapter # 6-9 MATH EXPRESSION and Task # 3

// var a = prompt("What is your name ?");
// document.write("Hello, " + a);

// ==== Chapter # 6-9 MATH EXPRESSION and Task # 4

// var t = prompt("What is your Table Number ?");
// document.write(" Table of   " + t + "<br>");
// for (var i = 1; i <= 10; i++) {
//   document.write(t + " x " + i + " = " + t * i + "<br>");
// }

// ==== Chapter # 6-9 MATH EXPRESSION and Task # 5

// var subname = prompt("Enter your First Subject Name :");
// var subname1 = prompt("Enter your Second Subject Name :");
// var subname2 = prompt("Enter your Third Subject Name :");
// var marks = +prompt("Enter your First Obtained Marks :");
// var marks1 = +prompt("Enter your Second Obtained Marks  :");
// var marks2 = +prompt("Enter your Third Obtained Marks  :");
// var Obtained = marks;
// var Obtained1 = marks1;
// var Obtained2 = marks2;
// var Obtained3 = marks + marks1 + marks2;
// var p = (marks / total) * total;
// var k = (marks1 / total) * total;
// var f = (marks2 / total) * total;
// var l = p + k + f;
// var val = subname;
// var val2 = subname1;
// var val3 = subname2;
// var total = 100;
// // var t1 = "<b> 300 </b>";
// document.write(
//   "<h3> Subject &nbsp  Total Marks &nbsp Total Obtained Marks  &nbsp  Percentage </h3>"
// );

// document.write(
//   val +
//     "  &nbsp &nbsp &nbsp &nbsp  " +
//     total +
//     "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  " +
//     Obtained +
//     "<br>" +
//     val2 +
//     "  &nbsp &nbsp &nbsp &nbsp  " +
//     total +
//     "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " +
//     Obtained1 +
//     "<br>" +
//     val3 +
//     "  &nbsp &nbsp &nbsp &nbsp " +
//     total
// );
// document.write("<b> 300 </b>");
// document.write(
//   "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + Obtained2
// );
// document.write(" &nbsp   " + Obtained3);
// document.write(p);

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 1

// var city = prompt("Enter your city", "karachi");
// alert("Welcome to city of light " + city);

// ==== Chapter # 9-11 User Input & Conditional Statement and Task #  2

// var gender = prompt("Enter your gender");
// if (gender === "male") {
//   alert("Good Morning Sir ");
// }
// if (gender === "female") {
//   alert("Good Morning Ma'am ");
// } else {
//   alert("Check your spell");
// }

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 3

// var color = prompt("Enter your Traffic color");
// if (color === "Red") {
//   alert("Must Stop");
// }
// if (color === "Green") {
//   alert("Ready to Move");
// }
// if (color === "Yellow") {
//   alert("Move Now");
// } else {
//   alert("Use first letter in Uppercase");
// }

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 4

// var car = prompt("Enter your remaining Fuel");
// if (car == 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("Your fuel is full");
// }

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 5
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true"); //True
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true"); // False
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true"); // False
// }
// if (c === 13) {
//   alert("condition 2 is true");  // False
// }
// if (++c < 14) {
//   alert("condition 3 is true"); //True
// }
// if (c === 14) {
//   alert("condition 4 is true"); // False
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals"); //True
// }

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert(false); // True
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// } // False car is not small then cat

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 6

// var obtain1 = +prompt("Enter your First obtained marks ");
// var obtain2 = +prompt("Enter your Second obtained marks ");
// var obtain3 = +prompt("Enter your Third obtained marks ");
// // var percent = +prompt("Enter your percent");
// var result = obtain1 + obtain2 + obtain3;
// var marks = 300;
// var p = 100;
// var percentage = (result / marks) * p;
// // var percent = percentage;
// var k = "Remarks :";
// var pk = "Grade :";
// var percent = percentage;
// if (percent >= 80) {
//   document.write(pk + "A-one");
// } else if (percent >= 70) {
//   document.write(pk + "A");
// } else if (percent >= 60) {
//   document.write(pk + "B");
// } else if (percent >= 50) {
//   document.write(pk);
// }
// document.write(
//   "<h1> Marks Sheet </h1>" +
//     "<br>" +
//     "<br>" +
//     "<br>" +
//     "Total Marks " +
//     marks +
//     "<br>" +
//     "Marks Obtained " +
//     result +
//     "<br>" +
//     "Percentage " +
//     percentage +
//     "%" +
//     "<br>" +
//     pk +
//     percent +
//     "<br>" +
//     k
// );

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 7

// var number = prompt("Enter a secret number");
// var num = number;
// if (num == 1) {
//   alert("Bingo! Correct");
// } else if (num == 2) {
//   alert("Close enough to the correct asnwer");
// } else if (num == 3) {
//   alert("Wrong!");
// } else if (num == 4) {
//   alert("Wrong!");
// } else if (num == 5) {
//   alert("Wrong!");
// } else if (num == 6) {
//   alert("Wrong!");
// }

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 8

// var num1 = prompt("Enter divisible1 Numbers");
// var num2 = prompt("Enter divisible2 Numbers");
// var num3 = num1 / num2;
// if (num3 === 3) {
//   alert("Divisible by 3");
// }

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 9

// var numv = prompt("Check number Odd or Even");
// var num3 = 2;
// var numb = numv / num3;
// if (numb === 1) {
//   alert("Odd");
// }
// if (numb === 3) {
//   alert("Odd");
// }
// if (numb === 5) {
//   alert("Odd");
// }
// if (numb === 7) {
//   alert("Odd");
// }
// if (numb === 9) {
//   alert("Odd");
// } else {
//   alert("Wrong ! Even");
// }

// ==== Chapter # 9-11 User Input & Conditional Statement and Task # 10

// var temp = prompt("Enter Temperature Number");
// var temp1 = temp;
// if (temp1 > 40) {
//   alert("It is too hot outside.");
// }
// if (temp1 > 30) {
//   alert("The Weather today is Normal.");
// }
// if (temp1 > 20) {
//   alert("Today’s Weather is cool.");
// }
// if (temp1 > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("Check your value");
// }

//  ==== Chapter # 9-11 User Input & Conditional Statement and Task # 11

// var val1 = prompt("Enter your First value");
// var sign = prompt("Enter your Operator");
// var val2 = prompt("Enter your Second value");

// console.log(val1 + sign + val2);

// if (sign === "+") {
//   alert(+val1 + +val2);
// } else if (sign === "/") {
//   alert(val1 * val2);
// } else if (sign === "*") {
//   alert(val1 % val2);
// } else if (sign === "%") {
//   alert((val1 / val2) * 100 + "%");
// } else if (sign === "-") {
//   alert(val1 - val2);
// }

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 1

// var a = prompt("Enter any Character");
// var num = ["A", "B", "C"];
// if (num >= 65 && num <= 90) {
//   alert("Character is a Capital Letter");
// } else if (num >= 97 && num <= 122) {
//   alert("Character is a Small Letter");
// } else if (num >= 65 && num <= 90) {
//   alert("Character is a Capital Digit");
// }
// console.log(num);

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 2

// var int = prompt("Enter a First integer value");
// var int1 = prompt("Enter a Second integer value");
// var a = int;
// var b = int1;
// if (int > int1) {
//   alert("Larger");
// } else if (int1 > int) {
//   alert("Larger");
// } else if (int === int1) {
//   alert("Equal");
// }

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 3

// var positive = prompt("Enter a number");
// var ps = positive;
// if (positive > 0) {
//   alert("Postive Value");
// } else if (positive == 0) {
//   alert("Zero Value");
// } else if (positive < 0) {
//   alert("Negative Value");
// }

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 4

// var letter = prompt("Enter a character");
// var vowels = ["a", "e", "i", "o", "u"];
// letter = letter.length;
// var vowels = letter;
// if (vowels === letter) {
//   alert("This is vowels");
// } else {
//   alert("False");
// }

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 5

// var pass = prompt("Please Enter your password");
// var a = pass;
// var name = "abdulwahab12345";
// if (a === name) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect Password");
// }

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   alert("Good Day");
// } else {
//   alert("Good evening");
// }

// ==== Chapter # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION and Task # 7

// var clock = prompt("Enter Clock");
// var time = clock;
// if (time >= 0000 && time < 1200) {
//   alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening");
// } else if (time >= 2100 && time < 2356) {
//   alert("Good Night");
// }

// ==== Chapter # 14-16 ARRAYS and Task # 1

// NO 1 - 2 are same questions

// var names = [];

// names[0] = "Faisal";
// names[1] = "Saqlain";
// names[2] = "Wahab";
// console.log(names);

//  ==== Chapter # 14-16 ARRAYS and Task # 3

// var string = ["Abdul", "Wahab", "Siddiqui"];
// console.log(string)

//  ==== Chapter # 14-16 ARRAYS and Task #  4

// var num = [0, 1, 2, 3, 4, 5, 6];
// console.log(num);

//  ==== Chapter # 14-16 ARRAYS and Task # 5

// var myArr = [];
// var value = 2;
// for (var i = 0; i < value; i++) {
//   myArr.push(false);
//   break;
// }

// alert(myArr);

//  ==== Chapter # 14-16 ARRAYS and Task # 6

// var array = [
//   "Dog",
//   "Cat",
//   "Lions",
//   "Fish",
//   "Eagle",
//   0,
//   1,
//   2,
//   3,
//   "Cake",
//   "Banana",
// ];
// console.log(array);

//  ==== Chapter # 14-16 ARRAYS and Task # 7

// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write(
//   "<h1> Qualification: </h1>" +
//     "<br>" +
//     "1) " +
//     education[0] +
//     "<br>" +
//     "2) " +
//     education[1] +
//     "<br>" +
//     "3) " +
//     education[2] +
//     "<br>" +
//     "4) " +
//     education[3] +
//     "<br>" +
//     "5) " +
//     education[4] +
//     "<br>" +
//     "6) " +
//     education[5] +
//     "<br>" +
//     "7) " +
//     education[6] +
//     "<br>" +
//     "8) " +
//     education[7] +
//     "<br>"
// );

//  ==== Chapter # 14-16 ARRAYS and Task # 8

// var student = ["Michael", "John", "Tony"];
// var score = ["320", "230", "480"];
// var a = (320 / 500) * 100;
// var b = (230 / 500) * 100;
// var c = (480 / 500) * 100;
// document.write(
//   "Score of " +
//     student[0] +
//     " is " +
//     score[0] +
//     "." +
//     " Percentage: " +
//     a +
//     "%" +
//     "<br> " +
//     "Score of " +
//     student[1] +
//     " is " +
//     score[1] +
//     "." +
//     " Percentage: " +
//     b +
//     "%" +
//     "<br> " +
//     "Score of " +
//     student[2] +
//     " is " +
//     score[2] +
//     "." +
//     " Percentage: " +
//     c +
//     "%" +
//     "<br> "
// );

//  ==== Chapter # 14-16 ARRAYS and Task # 9

// var color = ["Red", "Green", "Blue", "Yellow"];
// console.log(color);

// NO 9 a)

// var ask = prompt(" What color he/she wants to add to the beginning");
// var color = ask;
// var color = ["Red", "Green", "Blue", "Yellow"];
// color.unshift(ask);
// document.write(color);

// NO 9 b)
// var ask = prompt(" What color he/she wants to add to the End");
// var color = ask;
// var color = ["Red", "Green", "Blue", "Yellow"];
// color.push(ask);
// document.write(color);

// NO 9 c)

// var color1 = ["Green", "Yellow", "Pink"];
// color1.unshift("Red", "Black", "White");
// document.write(color1);

// NO 9 d)

// var color2 = ["Red", "Green", "Blue", "Yellow"];
// color2.shift();
// document.write(color2);

// NO 9 e)

// var color3 = ["Red", "Green", "Blue", "Yellow"];
// color3.pop();
// document.write(color3);

// NO 9 f)

// var ask1 = prompt(" Which index he/she wants to add a color & color name");
// var index = prompt("Enter Index Number");
// var color4 = index;
// var color3 = ask1;
// var color3 = [
//   "Red",
//   "Green",
//   "Blue",
//   "Yellow",
//   "Sky",
//   "White",
//   "Black",
//   "Pink",
// ];
// color3.splice(index, 1, ask1);
// document.write(color3);

// NO 9 g)

// var ask2 = prompt(" which index he/she wants to delete color(s).");
// var ask3 = prompt(" how many colors he/she wants to delete.");
// var color3 = ask2 + ask3;
// var color3 = [
//   "Red",
//   "Green",
//   "Blue",
//   "Yellow",
//   "Sky",
//   "White",
//   "Black",
//   "Pink",
// ];
// color3.splice(ask2, ask3);
// document.write(color3);

//  ==== Chapter # 14-16 ARRAYS and Task # 10

// var strings = ["320", "230", "480", "120"];
// document.write(
//   "Scores of Students : " +
//     strings +
//     "<br>" +
//     "Ordered Scores of Students : " +
//     strings[3] +
//     "," +
//     strings[1] +
//     "," +
//     strings[0] +
//     "," +
//     strings[2]
// );

//  ==== Chapter # 14-16 ARRAYS and Task # 11

// var city = ["Karachi", "Lahore", "Multan", "Faisalabad", "Islamabad"];
// var copyStudents = city.slice(2, 4);
// document.write(
//   "Cities List:" +
//     "<br> " +
//     city +
//     "<br>" +
//     "<br>" +
//     "Selected Cities List:" +
//     "<br>" +
//     copyStudents
// );

//  ==== Chapter # 14-16 ARRAYS and Task # 12

// var arr = ["This", "is", "my", "cat"];
// var tostring = arr.join(" ");
// document.write(
//   "Array:" + "<br>" + arr + "<br>" + "<br>" + "String:" + "<br> " + tostring
// );

//  ==== Chapter # 14-16 ARRAYS and Task # 13

// var a = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var comp = ["Keyboard"];
// var comp1 = ["Mouse"];
// var comp2 = ["Printer"];
// var comp3 = ["Monitor"];
// document.write(
//   "Devices: " +
//     "<br>" +
//     a +
//     "<br>" +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     comp +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     comp1 +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     comp2 +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     comp3 +
//     "<br>"
// );

//  ==== Chapter # 14-16 ARRAYS and Task # 14

// var a = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var comp = ["Keyboard"];
// var comp1 = ["Mouse"];
// var comp2 = ["Printer"];
// var comp3 = ["Monitor"];
// var reverse = comp.reverse();
// var reverse1 = comp1.reverse();
// var reverse2 = comp2.reverse();
// var reverse3 = comp3.reverse();
// document.write(
//   "Devices: " +
//     "<br>" +
//     a +
//     "<br>" +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     reverse3 +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     reverse2 +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     reverse1 +
//     "<br>" +
//     "Out:" +
//     "<br> " +
//     reverse +
//     "<br>"
// );

//  ==== Chapter # 14-16 ARRAYS and Task #  15

// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Selected  One " + "<br>" + phone);

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 1

// var activities = [
//   ["Wahab", 18, "Male", "Intermediate"],
//   ["Saqlain", 17, "Male", "Intermediate"],
//   ["Faisal", 18, "Male", "Intermediate"],
//   ["Shahzaib", 19, "Male", "Intermediate"],
//   ["Ali", 18, "Male", "Intermediate"],
// ];
// console.log(activities);
// console.table(activities);

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 2

// var num = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var a = 0; a < 4; a++) {
//   for (var b = 0; b < 4; b++) {
//     document.write(num[a][b] + " ");
//   }
//   document.write("<br>");
// }

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 3

// var p = "Counting From 1 to 10";
// document.write(p + "<br>");

// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 4

// var input = prompt("Enter a Number to show its Multiplication Table");
// var input1 = prompt("Enter length Multiplication Table ");
// var b = input1;
// document.write(
//   "Multiplication Table " + input + "<br>" + "Length " + input1 + "<br>"
// );
// for (var i = 1; i <= input1; i++) {
//   document.write(input + " x " + i + " = " + input * i + "<br>");
// }

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write(
//   fruits[0] +
//     "<br>" +
//     fruits[1] +
//     "<br>" +
//     fruits[2] +
//     "<br>" +
//     fruits[3] +
//     "<br>" +
//     fruits[4] +
//     "<br>" +
//     "<br>"
// );
// for (var a = 0; a < 5; a++) {
//   document.write(" Element at index " + a + " is " + fruits[a] + "<br>");
// }

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 6

// document.write("<b> Counting: </b>" + "<br>" + "<br>");
// for (var i = 0; i <= 15; i++) {
//   document.write(i + ",");
// }
// document.write(
//   "<br> " + "<br>" + "<b> Reverse Counting: </b>" + "<br>" + "<br>"
// );
// for (var b = 10; b >= 1; b--) {
//   document.write(b + ",");
// }
// document.write("<br>" + "<br>" + "<b> Even: </b>" + "<br>" + "<br>");
// for (var i = 0; i <= 10; i++) {
//   document.write(i * 2 + ",");
// }
// document.write("<br>" + "<br>" + "<b> Odd: </b>" + "<br>" + "<br>");
// for (var i = 1; i <= 19; i += 2) {
//   document.write(i + ",");
// }
// document.write("<br>" + "<br>" + "<b> Series: </b>" + "<br>" + "<br>");
// for (var d = 1; d <= 10; d++) {
//   document.write(d * 2 + "k,");
// }

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 7

// var ask = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var arr = [];
// arr[0] = ["cake"];
// arr[1] = ["apple pie"];
// arr[2] = ["cookie"];
// arr[3] = ["chips"];
// arr[4] = ["patties"];
// var a = (arr[0] = 0);
// var b = (arr[1] = 1);
// var c = (arr[2] = 2);
// var d = (arr[3] = 3);
// var e = (arr[4] = 4);
// var f = ask + arr;

// if (ask === "cake") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[0] + " in our bakery"
//   );
// } else if (ask === "apple pie") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[1] + " in our bakery"
//   );
// } else if (ask === "cookie") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[2] + " in our bakery"
//   );
// } else if (ask === "chips") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[3] + " in our bakery"
//   );
// } else if (ask === "patties") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[4] + " in our bakery"
//   );
// } else {
//   document.write(
//     "We are sorry . " + ask + " is not <b> available </b> in our bakery"
//   );
// }

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 8

// var a = [24, 53, 78, 91, 12];
// var largest = a[0];

// for (var i = 0; i < a.length; i++) {
//   if (largest < a[i]) {
//     largest = a[i];
//   }
// }
// document.write(
//   "Array items: " + a + "<br>" + "The largest number is " + largest
// );

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 9

// var b = [24, 53, 78, 91, 12];
// var smallest = b[0];

// for (var c = 0; c < b.length; c++) {
//   if (smallest > b[c]) {
//     smallest = b[c];
//   }
// }
// document.write(
//   "Array items: " + b + "<br>" + "The smallest number is " + smallest
// );

// ==== Chapter # 17-20 ARRAYS AND LOOP and Task # 10

// for (var p = 1; p <= 20; p++) {
//   document.write(p * 5 + ",");
// }
