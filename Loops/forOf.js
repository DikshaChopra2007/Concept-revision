/*🟢 BEGINNER QUESTIONS
Try these without looking at solutions.
Q1. Print all elements
Given:
let numbers = [10, 20, 30, 40, 50];
Use for...of to print every number.
Expected:
10
20
30
40
50

________________________________________
let numbers = [10, 20, 30, 40, 50];
let num;
for (num of numbers){
    console.log(num);
}
________________________________________
Q2. Print all fruits
let fruits = ["Apple", "Banana", "Mango", "Orange"];
Print every fruit using for...of.
________________________________________
Q3. Print each character ⭐
let word = "JAVASCRIPT";
Print every character on a new line.
Expected:
J
A
V
A
S
C
R
I
P
T
__________________________________
let word = "JAVASCRIPT";
let alphabet;
for (alphabet of word){
    console.log(alphabet);
}
________________________________________
Q4. Print only even numbers
let numbers = [12, 7, 8, 15, 20, 31, 42];
Output:
12
8
20
42
Hint: Combine for...of with if.
________________________________
let numbers = [12, 7, 8, 15, 20, 31, 42];
let num;
for (num of numbers){
    if(num%2==0){
        console.log(num);
    }}

________________________________________
Q5. Print only numbers greater than 10
let numbers = [5, 12, 3, 25, 8, 40];
Expected:
12
25
40
________________________________________
🟡 BEGINNER → INTERMEDIATE
Q6. Find the sum ⭐
let numbers = [10, 20, 30, 40];
Find:
Sum = 100
Hint:
let sum = 0;
Then add every number to sum.


let numbers = [10, 20, 30, 40];

let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

console.log(sum);
________________________________________
Q7. Find the largest number ⭐
let numbers = [15, 42, 8, 73, 21];
Output:
Largest = 73
This is similar to the while question you just did.
Use the current maximum idea.


let numbers = [-15, -42, -8, -73];

let largest = numbers[0];

for (let num of numbers) {
    if(num > largest) {
        largest = num;
    }
}

console.log("The largest number is: " + largest);
________________________________________


Q8. Count even numbers
let numbers = [2, 5, 8, 11, 14, 17, 20];
Output:
Even numbers = 4

let numbers = [2, 5, 8, 11, 14, 17, 20];
let count = 0;
for (let num of numbers) {
    if(num%2==0){   
        count++;
    }
}
console.log("Even numbers = " + count);
________________________________________
Q9. Count positive numbers
let numbers = [-2, 5, -8, 10, 3, -1, 7];
Output:
Positive numbers = 4
________________________________________
Q10. Calculate total marks ⭐
let marks = [78, 85, 92, 67, 88];
Find the total and average.
Expected:
Total = 410
Average = 82
________________________________________
🟠 INTERMEDIATE
Now start combining for...of with arrays and objects.
Q11. Find a particular name
let names = ["Rahul", "Aman", "Diksha", "Riya", "Karan"];
Ask the user for a name.
Check whether it exists using for...of.
Example:
Enter name: Riya
Found!
Don't use .includes() yet. Practice the loop.

__________
let names = ["Rahul", "Aman", "Diksha", "Riya", "Karan"];

let searchName = prompt("Enter name: ");

let found = false;

for (let name of names) {

    if (name === searchName) {
        found = true;
    }

}

if (found) {
    console.log("Found!");
} else {
    console.log("Not found!");
}
________________________________________
Q12. Count a particular character
let word = "javascript";
Count how many times "a" occurs.
Expected:
a occurs 2 times


let word = "javascript";
let count=0;
let alphabet;
for(alphabet of word){
    if(alphabet=="a"){
        count++;
    }
}
console.log("Count of a = "+count);

________________________________________
Q13. Find the shortest word ⭐
let words = ["cat", "elephant", "dog", "tiger", "ant"];
Output:
Shortest word = ant



let words = ["cat", "elephant", "dog", "tiger", "ant"];
let shortest = words[0];
for(let word of words){
    if(word.length<shortest.length){
        shortest = word;
    }

}
console.log("Shortest word = "+shortest);
________________________________________
Q14. Find the longest word ⭐
let words = ["HTML", "JavaScript", "CSS", "React", "Programming"];
Output:
Longest word = Programming
________________________________________

________________________________________
🔥 INTERMEDIATE → ADVANCED
Q15. Print adult users ⭐⭐⭐
let users = [
    {name: "Aman", age: 20},
    {name: "Riya", age: 17},
    {name: "Karan", age: 22},
    {name: "Neha", age: 16}
];
Print only users whose age is 18 or above.
Expected:
Aman
Karan


let users = [
    {name: "Aman", age: 20},
    {name: "Riya", age: 17},
    {name: "Karan", age: 22},
    {name: "Neha", age: 16}
];
for(let user of users){
    if(user.age>18){
        console.log(user.name);
    }
}
________________________________________
Q16. Calculate total salary
let employees = [
    {name: "A", salary: 30000},
    {name: "B", salary: 45000},
    {name: "C", salary: 25000}
];
Find:
Total salary = 100000
________________________________________
Q17. Find highest-paid employee ⭐⭐⭐
Using:
let employees = [
    {name: "A", salary: 30000},
    {name: "B", salary: 45000},
    {name: "C", salary: 25000},
    {name: "D", salary: 60000}
];
Output:
Highest paid = D
Salary = 60000




let employees = [
    {name: "A", salary: 30000},
    {name: "B", salary: 45000},
    {name: "C", salary: 25000},
    {name: "D", salary: 60000}
];
    let highestPaid=employees[0];
 for (let employee of employees) {

    if (employee.salary>highestPaid.salary) {
        highestPaid=employee;
    }
}
console.log("The highest paid employee is "+ highestPaid.name)
________________________________________
Q18. Product stock checker ⭐⭐⭐
let products = [
    {name: "Laptop", stock: 5},
    {name: "Mouse", stock: 0},
    {name: "Keyboard", stock: 8},
    {name: "Monitor", stock: 0}
];
Print products that are out of stock.
Expected:
Mouse
Monitor
This is much closer to real web-development logic.
________________________________________
🔴 ADVANCED
Q19. Shopping cart total ⭐⭐⭐
let cart = [
    {name: "Laptop", price: 50000, quantity: 1},
    {name: "Mouse", price: 1000, quantity: 2},
    {name: "Keyboard", price: 2000, quantity: 1}
];
Calculate:
Total = 54000
You'll need:
price × quantity
for every product.

____________
let cart = [
    {name: "Laptop", price: 50000, quantity: 1},
    {name: "Mouse", price: 1000, quantity: 2},
    {name: "Keyboard", price: 2000, quantity: 1}
];
let total=0;
for(let item of cart){
total= total+(item.price)*(item.quantity);


}
console.log("Total cart value = " + total);

________________________________________
Q20. Find users with a specific role ⭐⭐⭐
let users = [
    {name: "A", role: "admin"},
    {name: "B", role: "user"},
    {name: "C", role: "admin"},
    {name: "D", role: "user"}
];
Print all admins.
Expected:
A
C
________________________________________
🔥 Q21. Login system
let users = [
    {username: "admin", password: "1234"},
    {username: "diksha", password: "abc123"},
    {username: "rahul", password: "pass456"}
];
Ask:
Username:
Password:
Use for...of to find whether the credentials match.
Output:
Login successful!
or:
Invalid username or password!
This combines:
for...of
+
objects
+
if/else
+
user input
________________________________________
🚀 Q22. Mini shopping cart
Create:
let products = [
    {name: "Laptop", price: 50000},
    {name: "Phone", price: 30000},
    {name: "Headphones", price: 2000},
    {name: "Mouse", price: 1000}
];
Ask the user for a product name.
Search through the products using for...of.
If found:
Product: Laptop
Price: ₹50000
Otherwise:
Product not found*/
