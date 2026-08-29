//Write a function getGrade(score) that
//Takes a student's marks (0 to 100)
//and returns a grade based on the following criteria:
//90-100: A+
//80-89: A
//70-79: B
//60-69: C
//33-59: D
//0-32: F
//Anything else: Invalid score
/*function getGrade(score) {
    if(score>=90 && score<=100){
        return "A+";   }
    else if(score>=80 && score<=89){
        return "A";   }
    else if(score>=70 && score<=79){
        return "B";   }
    else if(score>=60 && score<=69){
        return "C";   }
    else if(score>=33 && score<=59){
        return "D";   }
    else if(score>=0 && score<=32){
        return "F";   }
    else{
        return "Invalid score";   } */
        /*## Difference Between `return` and `console.log()`

### `console.log()`

* Used to **display/print** a value in the console.
* It does **not send the value back** from a function.
* Mainly used for checking/debugging or displaying output.

```javascript
function add(a, b) {
    console.log(a + b);
}
```

### `return`

* Used to **send a value back** from a function.
* It **ends the function immediately**.
* The returned value can be stored in a variable or used in another calculation.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
```

Here, `result` becomes `8`.

###  Remember:

> **`console.log()` → shows the value**
> **`return` → gives the value back from the function**

Also, `return` can be used **without `console.log()`**, but `console.log()` cannot replace `return` when you need to use the function's result elsewhere.
*/
//to take input from user
function getGrade(score) {

    if (score >= 90 && score <= 100) {
        return "A+";
    }
    else if (score >= 80 && score <= 89) {
        return "A";
    }
    else if (score >= 70 && score <= 79) {
        return "B";
    }
    else if (score >= 60 && score <= 69) {
        return "C";
    }
    else if (score >= 33 && score <= 59) {
        return "D";
    }
    else if (score >= 0 && score <= 32) {
        return "F";
    }
    else {
        return "Invalid score";
    }
}

let score = Number(prompt("Enter your marks:"));

let grade = getGrade(score);

console.log("Your grade is:", grade);
/*When you run:

Number(prompt("Enter your marks:"))

a popup appears
prompt() gives the input as a string:
That's why we use:

Number(...)*/
//JavaScript does not have an int keyword like C/C++.