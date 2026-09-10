

/*# 1. Function Declarations, Expressions & Arrow Functions

## 🟢 Beginner

**Q1. Function declaration**
Create a function `greet()` that prints:

```text
Hello JavaScript
```

function greet(name) {
    console.log("Hello " + name);
}
greet("JavaScript");

**Q2. Function with parameter**
Create:

```javascript
greet(name)
```

that prints:

```text
Hello Diksha
```

when called with `"Diksha"`.

---

## 🟡 Intermediate

**Q3. Function expression**
Create `multiply(a, b)` using a function expression.

```javascript
let multiply = function(a, b) {
    // your code
};
```
let multiply = function(a, b) {
    return a * b;
}; 
console.log(multiply(2, 3)); 
Return the product.

**Q4. Arrow function**
Create an arrow function `cube(n)` that returns the cube of `n`.

Example:

```text
cube(3) → 27
```

---
let cube = n => n*n*n;
console.log (cube(5));

## 🔴 Advanced

**Q5. Convert between all three**

Create `isEven(n)` using:

1. Function declaration
2. Function expression
3. Arrow function

All three should return the same result.

function isEven(num){
    if(num%2==0){
        console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }
}
console.log(isEven(85));

func expression 
let isEven =function(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }   
}
isEven(85);

arrow func 
let isEven =(num)=>num%2==0;
console.log(isEven(85));

**Q6. Choose the appropriate syntax**

Create:

```javascript
calculateDiscount(price, discount)
```

using an arrow function.

Return the final price after discount.

Example:

```text
calculateDiscount(1000, 20) → 800
```

---


/*let calculateDiscount= function (price, discount) => {
    return price-(price*discount/100);
};
console.log(calculateDiscount(100, 10));    */
//This is invalid because function and => cannot be used together like this.
/*let calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(100, 10));
# 2. Parameters vs Arguments

## 🟢 Beginner

**Q1.**

Create:

```javascript
function add(a, b) {

}
```

Call it with:

```javascript
add(10, 20);
```

Identify the **parameters** and **arguments**.

---

**Q2.**

Create:

```javascript
introduce(name, age)
```

Output:

```text
My name is Diksha and I am 18 years old.
```

---

## 🟡 Intermediate

**Q3.**

Create:

```javascript
calculateArea(length, width)
```

Return the area.

Test it with different arguments.

---

**Q4.**

Create:

```javascript
getGrade(marks)
```

Use your previous grade-sheet logic.

---

## 🔴 Advanced

**Q5.**

Create:

```javascript
calculateBill(price, quantity, tax)
```

Return:

```text
(price × quantity) + tax
```

Example:

```text
calculateBill(500, 3, 100) → 1600
```

---
function calculateBill(price,quantity,taxRatepercentage){
let total=price*quantity;
let taxAmount=total*taxRatepercentage/100;
let amount=total+taxAmount;
return amount;
}
console.log(calculateBill(100,2,5));
**Q6.**

Create:

```javascript
createUser(name, age, city, profession)
```

and return an object:

```javascript
{
    name: "...",
    age: ...,
    city: "...",
    profession: "..."
}
```


function createUser(name, age, city, profession) {
let user={
    name: name,
    age: age,
    city: city,
    profession: profession
};
return user;
}
console.log(createUser("Diksha", 20, "Bangalore", "Student"));

This is **very useful for web development**.

---

# 3. Default, Rest & Spread

## 🟢 Beginner

**Q1. Default parameter**

```javascript
function greet(name = "Guest") {

}
```

If no name is provided, print:

```text
Hello Guest
```

---

**Q2. Default age**

Create:

```javascript
createUser(name, age = 18)
```

Test it both with and without an age.

---

## 🟡 Intermediate

**Q3. Rest parameter**

Create:

```javascript
sum(...numbers)
```

Example:

```text
sum(10,20,30,40) → 100
```

---

**Q4. Find largest using rest**

Create:

```javascript
largest(...numbers)
```

Example:

```text
largest(10, 50, 20, 80, 30) → 80
```

---

## 🔴 Advanced

**Q5. Spread arrays**

Given:

```javascript
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express"];
```

Create one array:

```text
["HTML", "CSS", "JavaScript", "Node", "Express"]
```

using spread.

---

**Q6. Function + spread**

Create:

```javascript
function add(a, b, c) {
    return a + b + c;
}
```

Given:

```javascript
let numbers = [10, 20, 30];
```

Call `add()` using the array and the spread operator.

---

# 4. Return Values & Early Returns

## 🟢 Beginner

**Q1.**

Create:

```javascript
square(n)
```

Return the square.

---

**Q2.**

Create:

```javascript
isEven(n)
```

Return:

```text
true
```

or:

```text
false
```

---

## 🟡 Intermediate

**Q3.**

Create:

```javascript
getLargest(a, b)
```

Return the larger number.

Do **not** use `console.log()` inside the function.

---
function getLargest(a,b){
    if(a>b){
return a
    }
    else{
return b;
    }
}
console.log(getLargest(10,20));
**Q4. Early return**

Create:

```javascript
checkAge(age)
```

If age is below 18:

```text
Not allowed
```

Otherwise:

```text
Allowed
```

Use `return` to exit early.

---
function isVote(age){
    if (age >= 18){
        return true;
    }
    return false;
}
console.log(isVote(2));

## 🔴 Advanced

**Q5. Login validation**

Create:

```javascript
login(username, password)
```

Rules:

```text
username empty → "Username required"
password empty → "Password required"
both correct → "Login successful"
```

Use early returns instead of deeply nested `if` statements.

---
function login(username, password) {
    if (!username) {
        return "Username required";
    }
    if (!password) {
        return "Password required";
    }
    if (username === "admin" && password === "password") {
        return "Login successful";
    }
    return "Invalid credentials";
}
console.log(login("admin", "password"));
**Q6. ATM withdrawal**

Create:

```javascript
withdraw(balance, amount)
```

Rules:

```text
amount <= 0 → "Invalid amount"
amount > balance → "Insufficient balance"
otherwise → return new balance
```

This combines your previous ATM project with functions.

---
function withdraw(balance,amount){
    if (amount<=0){
        return "Invalid amount";
    }
    if (amount>balance){
        return "Insufficient balance";
    }
    if (amount< balance){
        return balance-amount;
    }
        if (amount==balance){
        return 0;
    }
}
console.log(withdraw(100, 500));

# 5. First-Class Functions

Remember:

> In JavaScript, functions can be stored in variables, passed as arguments, and returned from other functions.

## 🟢 Beginner

**Q1. Function inside variable**

```javascript
let greet = function() {
    console.log("Hello");
};
```

Call `greet()`.

---

**Q2. Store a function in an array**

Create:

```javascript
let tasks = [
    function() {
        console.log("Task 1");
    },

    function() {
        console.log("Task 2");
    }
];
```

Call both functions from the array.

---

## 🟡 Intermediate

**Q3. Pass a function as an argument**

Create:

```javascript
function execute(task) {

}
```

Pass a function into it that prints:

```text
Task completed
```

---

**Q4. Calculator with functions**

Create:

```javascript
function calculate(a, b, operation) {

}
```

Then create:

```javascript
add
subtract
multiply
```

Pass them into `calculate()`.

Example:

```javascript
calculate(10, 5, add);
```

---

## 🔴 Advanced

**Q5. Function returning function**

Create:

```javascript
function createGreeting(name) {

    return function() {
        // ...
    };

}
```

Then:

```javascript
let greet = createGreeting("Diksha");

greet();
```

Expected:

```text
Hello Diksha
```

---

**Q6. Function factory**

Create:

```javascript
createMultiplier(n)
```

It should return a function.

Example:

```javascript
let double = createMultiplier(2);

console.log(double(5));
```

Output:

```text
10
```

And:

```javascript
let triple = createMultiplier(3);

console.log(triple(5));
```

Output:

```text
15
```

🔥 This prepares you for **closures**.

---

# 6. Higher-Order Functions

A function is higher-order if it **takes a function as an argument or returns a function**.

## 🟢 Beginner

**Q1.**

Create:

```javascript
function run(fn) {

}
```

Pass a function that prints:

```text
Hello
```

---

**Q2.**

Create:

```javascript
function executeTwice(fn) {

}
```

The passed function should execute twice.

---

## 🟡 Intermediate

**Q3. Calculator**

Create:

```javascript
calculate(a, b, operation)
```

where `operation` is a function.

Test:

```javascript
calculate(10, 5, add);
calculate(10, 5, multiply);
```

---

**Q4. Array processor**

Create:

```javascript
function processArray(numbers, operation) {

}
```

Pass a function that doubles every number.

Example:

```text
[1,2,3,4]
```

→

```text
[2,4,6,8]
```

---

## 🔴 Advanced

**Q5. Custom forEach**

Create your own function:

```javascript
myForEach(array, callback)
```

It should behave approximately like:

```javascript
numbers.forEach(function(num) {
    console.log(num);
});
```

Don't use `forEach()` inside your implementation.

---

**Q6. Custom filter**

Create:

```javascript
myFilter(array, callback)
```

Given:

```javascript
[1,2,3,4,5,6]
```

and a callback that checks for even numbers, return:

```javascript
[2,4,6]
```

🔥 This is excellent preparation for understanding `filter()` internally.

---

# 7. Pure vs Impure Functions

## 🟢 Beginner

**Q1.**

Is this function pure or impure?

```javascript
function add(a, b) {
    return a + b;
}
```

Explain why.

---

**Q2.**

Is this pure or impure?

```javascript
let count = 0;

function increase() {
    count++;
}
```

Explain why.

---

## 🟡 Intermediate

**Q3.**

Write a pure function:

```javascript
calculateTax(price, taxRate)
```

that returns the tax.

---

**Q4.**

Given:

```javascript
let numbers = [1,2,3];
```

Create a function that returns a **new array** with each number doubled without modifying the original array.

---

## 🔴 Advanced

**Q5. Identify the problem**

```javascript
let users = ["Aman", "Riya"];

function addUser(name) {
    users.push(name);
}
```

Explain why this function is impure.

Then rewrite it as a pure function that returns a new array.

---

**Q6. Pure shopping calculation**

Create:

```javascript
calculateCartTotal(cart)
```

Given:

```javascript
let cart = [
    {price: 100, quantity: 2},
    {price: 50, quantity: 3}
];
```

Return the total without modifying `cart`.

---

# 8. Lexical Scoping & Closures

This is the **most advanced section** here. Take your time.

## 🟢 Beginner

**Q1. Scope**

What will this print?

```javascript
let x = 10;

function test() {
    console.log(x);
}

test();
```

Explain why.

---

**Q2.**

What happens here?

```javascript
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}
```

Explain why `inner()` can access `message`.

---

## 🟡 Intermediate

**Q3.**

What will this print?

```javascript
let x = 10;

function outer() {

    let x = 20;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
```

Explain **which `x` is used and why**.

---

**Q4. Scope chain**

What will this print?

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

Explain the scope chain:

```text
inner → outer → global
```

---

## 🔴 Advanced

**Q5. Counter closure**

Create:

```javascript
function createCounter() {

}
```

It should allow:

```javascript
let counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```

The `count` variable should **not be directly accessible from outside**.

---

**Q6. Multiple independent closures**

Create:

```javascript
function createCounter() {
    // ...
}
```

Then:

```javascript
let counter1 = createCounter();
let counter2 = createCounter();

counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2
```

Explain why `counter1` and `counter2` don't share the same `count`.*/

