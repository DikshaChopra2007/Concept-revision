/* 
🟢 BEGINNER QUESTIONS
Q1. Print every number
let numbers = [10, 20, 30, 40, 50];
Use forEach() to print every number.


let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function(num){
console.log(num);
});
________________________________________
Q2. Print every fruit
let fruits = ["Apple", "Banana", "Mango", "Orange"];
Expected:
Apple
Banana
Mango
Orange
________________________________________
Q3. Print every character
let word = "JAVASCRIPT";
Use forEach().
Hint: You cannot directly use forEach() on a string.
Think about how you could convert the string into an array of characters first.
____
let word = "JAVASCRIPT";
let letter = word.split("");
letter.forEach(function(letter)
{
    console.log(letter);
});
____________________________________
Q4. Print numbers with their index ⭐
let numbers = [10, 20, 30, 40];
Expected:
Index: 0 Value: 10
Index: 1 Value: 20
Index: 2 Value: 30
Index: 3 Value: 40
Use:
array.forEach(function(value, index) {
    
});

let numbers = [10, 20, 30, 40];
numbers.forEach(function(value,index){
    console.log("Index: " + index + " Value: " + value);
});
________________________________________
🟢 BEGINNER → INTERMEDIATE
Q5. Print only even numbers
let numbers = [2, 5, 8, 11, 14, 17, 20];
Expected:
2
8
14
20
Use:
forEach + if



let numbers = [2, 5, 8, 11, 14, 17, 20];

numbers.forEach(function(num) {

    if(num % 2 === 0) {
        console.log(num);
    }

});
________________________________________
Q6. Print numbers greater than 10
let numbers = [5, 12, 3, 25, 8, 40];
Expected:
12
25
40
________________________________________
Q7. Calculate the sum ⭐
let numbers = [10, 20, 30, 40];
Expected:
Sum = 100
Use the accumulator pattern you learned with for...of:
let sum = 0;
Then update it inside forEach().
________________________________________
Q8. Count even numbers
let numbers = [2, 5, 8, 11, 14, 17, 20];
Expected:
Even numbers = 4
You've already solved this using for...of.
Now solve it using forEach().



let numbers = [2, 5, 8, 11, 14, 17, 20];
let count =0;
numbers.forEach(function(num){
 if (num%2==0){
    count++;

 }
 
});
console.log(count);
________________________________________
Q9. Find the largest number ⭐
let numbers = [15, 42, 8, 73, 21];
Expected:
Largest = 73
Use:
let largest = numbers[0];
Then compare each number.
________________________________________
🟡 INTERMEDIATE
Q10. Find the smallest number
let numbers = [25, 8, 42, 3, 19];
Expected:
Smallest = 3
________________________________________
Q11. Search for a name ⭐
let names = ["Rahul", "Aman", "Diksha", "Riya", "Karan"];
Ask the user:
Enter name:
Search for the name using forEach().
If found:
Found!
Otherwise:
Not found!
This is the same problem you did with for...of, but now using forEach().
________________________________________
Q12. Count a character
let letters = ["a", "b", "a", "c", "a", "d"];
Count how many times "a" occurs.
Expected:
a occurs 3 times
________________________________________
________________________________________
🟠 INTERMEDIATE → ADVANCED
Q13. Print adult users ⭐
Using:
let users = [
    {name: "Aman", age: 20},
    {name: "Riya", age: 17},
    {name: "Karan", age: 22},
    {name: "Neha", age: 16}
];
Print users whose age is 18 or above.
Expected:
Aman
Karan
________________________________________
Q14. Calculate total salary
let employees = [
    {name: "A", salary: 30000},
    {name: "B", salary: 45000},
    {name: "C", salary: 25000}
];
Expected:
Total salary = 100000
________________________________________
Q15. Find highest-paid employee ⭐⭐⭐
let employees = [
    {name: "A", salary: 30000},
    {name: "B", salary: 45000},
    {name: "C", salary: 25000},
    {name: "D", salary: 60000}
];
Expected:
Highest paid employee = D
Salary = 60000
You already solved this with for...of.
Now do it with forEach().
________________________________________
Q16. Find out-of-stock products ⭐⭐⭐
let products = [
    {name: "Laptop", stock: 5},
    {name: "Mouse", stock: 0},
    {name: "Keyboard", stock: 8},
    {name: "Monitor", stock: 0}
];
Expected:
Mouse
Monitor




let products = [
    {name: "Laptop", stock: 5},
    {name: "Mouse", stock: 0},
    {name: "Keyboard", stock: 8},
    {name: "Monitor", stock: 0}
];
products.forEach(function(product){
if (product.stock === 0)
    console.log(product.name);
}
);

________________________________________
🔥 REAL WEB-DEV STYLE QUESTIONS
These are more useful than doing 30 repetitive questions.
Q17. Shopping cart total ⭐⭐⭐
let cart = [
    {name: "Laptop", price: 50000, quantity: 1},
    {name: "Mouse", price: 1000, quantity: 2},
    {name: "Keyboard", price: 2000, quantity: 1}
];
Calculate the total:
Total = 54000
You need:
price × quantity
for every item.
________________________________________
Q18. Product search ⭐⭐⭐
let products = [
    {name: "Laptop", price: 50000},
    {name: "Phone", price: 30000},
    {name: "Mouse", price: 1000},
    {name: "Keyboard", price: 2000}
];
Ask the user:
Enter product:
Search using forEach().
If found:
Product found
Price: ₹50000
Otherwise:
Product not found
________________________________________
Q19. User role checker ⭐⭐⭐
let users = [
    {name: "Aman", role: "admin"},
    {name: "Riya", role: "user"},
    {name: "Karan", role: "admin"},
    {name: "Neha", role: "user"}
];
Print only admins.
Expected:
Aman
Karan
________________________________________
🔴 Q20. Login system ⭐⭐⭐⭐
let users = [
    {username: "admin", password: "1234"},
    {username: "diksha", password: "abc123"},
    {username: "rahul", password: "pass456"}
];
Ask the user:
Username:
Password:
Use forEach() to check whether the credentials match.
Output either:
Login successful!
or:
Invalid username or password!
________________________________________
🔥 Q21. Student result system
let students = [
    {name: "Aman", marks: 85},
    {name: "Riya", marks: 72},
    {name: "Karan", marks: 91},
    {name: "Neha", marks: 45}
];
Using forEach():
1.	Print each student's name.
2.	Print whether they passed (marks >= 33).
3.	Find the highest marks.
Example:
Aman → Pass
Riya → Pass
Karan → Pass
Neha → Pass

Highest marks = 91
*/


let students = [
    {name: "Aman", marks: 85},
    {name: "Riya", marks: 72},
    {name: "Karan", marks: 91},
    {name: "Neha", marks: 32}
];
students.forEach(function(student){
if(student.marks<33){
    console.log("the student "+ student.name +" failed");
}
});