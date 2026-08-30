/*
________________________________________
🟢 SOLVED EXAMPLES
Q1. Print 1 to 5
let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 5);
________________________________________
Q2. Print 5 to 1
let i = 5;

do {
    console.log(i);
    i--;
} while(i >= 1);
________________________________________
Q3. Ask for a positive number ⭐
Keep asking the user until they enter a positive number.
let n;

do {
    n = Number(prompt("Enter a positive number: "));
} while(n <= 0);

console.log("Valid number:", n);
Why do...while is perfect here?
The user must be asked at least once.
________________________________________
🟡 PRACTICE QUESTIONS
Try these yourself.
Q4 — Password ⭐
Keep asking the user for a password until they enter:
javascript123
When correct:
Access granted!
Hint:
do {
    // ask password
} while(________);
________________________________________
Q5 — Number from 1–10
Ask the user to enter a number.
Keep asking until they enter a number between 1 and 10.
Example:
Enter number: 15
Invalid!

Enter number: -2
Invalid!

Enter number: 7
Valid!
________________________________________
Q6 — Continue playing ⭐
Ask:
Do you want to play? (yes/no)
Keep asking until the user enters:
no
Example:
Do you want to play? yes
Game started!

Do you want to play? yes
Game started!

Do you want to play? no

Goodbye!
________________________________________
Q7 — ATM Menu ⭐⭐⭐
You already built an ATM using switch.
Now improve it using do...while.
The menu should repeatedly appear:
===== ATM =====
1. Withdraw
2. Deposit
3. Check Balance
4. Exit
The program should stop only when:
4
is selected.
Use:
do...while + switch
This is very good practice for you because it combines concepts you've already learned.
________________________________________
Q8 — Keep asking until correct number ⭐⭐
Secret number:
let secret = 7;
Ask the user to guess.
Guess: 5
Too low!

Guess: 9
Too high!

Guess: 7
Correct!
Use:
do...while + if/else
________________________________________
Q9 — Sum numbers until 0 ⭐⭐
Keep asking the user for numbers.
Stop when they enter 0.
Example:
Enter number: 10
Enter number: 20
Enter number: 5
Enter number: 0

Sum = 35
Use:
do...while + accumulator
________________________________________
Q10 — Simple Calculator ⭐⭐⭐
Ask the user:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
Perform the selected operation.
Keep showing the menu until the user selects 5.
Use:
do...while
+
switch
______________________________________
ANSWER

let choice
do {
    choice=Number(prompt("===== MENU =====\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit\nEnter your choice: "));
    if (choice>=1 && choice<=4){
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
switch(choice){
    case 1:
        let sum=a+b;
        console.log("The sum is: "+sum);
        break;
    case 2:
        let sub=a-b;
        console.log("The difference is: "+sub);
        break;
    case 3:
        let prod=a*b;
        console.log("The product is: "+prod);
        break;
    case 4:
        let quot=a/b;
        console.log("The quotient is: "+quot);
        break;
   
}
elseif(choice!==5){
    console.log("Invalid choice! Please try again.");
}
}
}
while(choice!==5);
console.log("Goodbye!");

________________________________________
🔥 Q11 — Validate username and password
Ask the user for:
Username:
Password:
Correct:
username = admin
password = 1234
Keep asking until both are correct.
Output:
Login successful!
Use:
do...while + && + comparison
________________________________________
🔥 Q12 — Guessing Game with Attempts
Secret number:
let secret = 42;
Give the user 5 attempts.
Example:
Guess: 20
Too low

Guess: 60
Too high

Guess: 42
Correct!




let n=42;
let guess;
do{
     guess=Number(prompt("Guess the number: "));
    if(guess<n){
        console.log("Too low");
    }else if(guess>n){
        console.log("Too high");
    }else{
        console.log("Correct!");
    }

}
while(guess!=n);
*/

