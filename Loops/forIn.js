
/*🟢 BEGINNER QUESTIONS
Try these yourself before looking for solutions.
Q1. Print all keys
let person = {
    name: "Aman",
    age: 20,
    city: "Delhi"
};
Expected:
name
age
city

let person = {
    name: "Aman",
    age: 20,
    city: "Delhi"
};
for (let key in person){
    console.log(key+":"+person[key]);
}
________________________________________
Q2. Print all values
Using for...in:
let person = {
    name: "Aman",
    age: 20,
    city: "Delhi"
};
Expected:
Aman
20
Delhi



let person = {
    name: "Aman",
    age: 20,
    city: "Delhi"
};
for (let key in person){
    console.log(person[key]);
}
________________________________________
Q3. Print key and value
let student = {
    name: "Riya",
    age: 19,
    marks: 87
};
Expected:
name = Riya
age = 19
marks = 87
Hint:
student[key]
________________________________________
Q4. Count properties
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025,
    color: "Black"
};
Output:
Number of properties = 4
You'll need a counter:
let count = 0;


let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025,
    color: "Black"
};
let count=0
for (let prop in car){
 count ++;
}
console.log("The no. of properties are " + count);
________________________________________
🟢 BEGINNER → INTERMEDIATE
Q5. Find a particular property
let user = {
    name: "Aman",
    age: 20,
    city: "Delhi",
    email: "aman@gmail.com"
};
Ask the user:
Enter property:
If they enter:
age
Output:
Value = 20
________________________________________
Q6. Find all numeric values
let data = {
    name: "Aman",
    age: 20,
    marks: 85,
    city: "Delhi"
};
Print only:
20
85
Hint:
You'll need:
typeof



let data = {
    name: "Aman",
    age: 20,
    marks: 85,
    city: "Delhi"
};
for (let key in data){
    if(typeof data[key]==="number"){
        console.log(data[key]);
}}

________________________________________
Q7. Find properties with values greater than 50
let scores = {
    math: 85,
    physics: 42,
    chemistry: 76,
    english: 35
};
Expected:
math
chemistry
________________________________________
🟡 INTERMEDIATE
Q8. Calculate total marks ⭐
let marks = {
    math: 85,
    physics: 72,
    chemistry: 91,
    english: 78
};
Calculate:
Total marks = 326
Use:
let total = 0;
and add:
total = total + marks[key];
________________________________________
Q9. Find highest marks ⭐
let marks = {
    math: 85,
    physics: 72,
    chemistry: 91,
    english: 78
};
Expected:
Highest marks = 91
Subject = chemistry
This combines the largest-value logic you already learned with objects.
________________________________________
Q10. Count properties starting with a particular letter
let user = {
    name: "Aman",
    age: 20,
    address: "Delhi",
    email: "aman@gmail.com",
    phone: "9999999999"
};
Count properties starting with "a".
Expected:
2
Because:
age
address
________________________________________
🔵 VERY IMPORTANT: OBJECTS WITH for...in
You've already learned arrays of objects.
For example:
let users = [
    {name: "Aman", age: 20},
    {name: "Riya", age: 17}
];
Here:
users → ARRAY
        ↓
      objects
You would normally use:
for (let user of users) {
    console.log(user.name);
}
But if you take one object:
let user = {
    name: "Aman",
    age: 20
};
then for...in is useful:
for (let key in user) {
    console.log(key);
}
Output:
name
age
So remember:
ARRAY
  ↓
for...of

OBJECT
  ↓
for...in
This isn't an absolute rule for every situation, but it's a great beginner rule.
________________________________________
🔥 WEB DEVELOPMENT QUESTIONS
These are the ones I especially want you to do because they'll help later.
Q11. User profile display ⭐⭐⭐
let user = {
    name: "Diksha",
    age: 18,
    city: "Delhi",
    profession: "Student"
};
Print:
name: Diksha
age: 18
city: Delhi
profession: Student
________________________________________
Q12. Product details ⭐⭐⭐
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    stock: 5
};
Use for...in to print every property and value.
________________________________________
Q13. Find expensive properties ⭐⭐⭐
let product = {
    name: "Laptop",
    price: 50000,
    rating: 4.5,
    stock: 10
};
Print only numeric properties whose value is greater than 10.
Expected:
price
stock
________________________________________
Q14. Object validation ⭐⭐⭐
let user = {
    name: "Aman",
    email: "aman@gmail.com",
    age: 20
};
Check whether the object contains:
name
email
age
Print:
All required fields present
If something is missing:
Missing field: email
This type of logic becomes useful in forms and form validation.
________________________________________
🔴 ADVANCED
Q15. Calculate shopping cart value ⭐⭐⭐⭐
let cart = {
    laptop: 50000,
    mouse: 1000,
    keyboard: 2000,
    headphones: 3000
};
Calculate:
Total = 56000
________________________________________
Q16. Find the highest-valued product ⭐⭐⭐⭐
let products = {
    laptop: 50000,
    phone: 30000,
    mouse: 1000,
    monitor: 20000
};
Expected:
Most expensive = laptop
Price = 50000
________________________________________
Q17. User permissions ⭐⭐⭐⭐
let permissions = {
    read: true,
    write: true,
    delete: false,
    admin: false
};
Print only the permissions that are true.
Expected:
read
write
________________________________________
⭐ What you should focus on
Since your goal is eventually web development, don't spend forever doing for...in questions.
I'd recommend:
Definitely do:
Q1 → keys
Q2 → values
Q3 → key + value
Q5 → access property
Q7 → condition
Q8 → sum
Q9 → largest
Q11 → user object
Q12 → product object
Q14 → validation
Q16 → highest value
Q17 → permissions
And remember this cheat sheet:
*/