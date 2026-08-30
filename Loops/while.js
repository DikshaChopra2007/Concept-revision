/*
Q1. Print numbers 1 to 5
Solution:
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
Q2. Print numbers 5 to 1
let i = 5;

while (i >= 1) {
    console.log(i);
    i--;
}

Output:

5
4
3
2
1

Notice that now we're using:

i--;

because we want the number to decrease.

Q3. Print even numbers 1–10
Think first:

We need:

2
4
6
8
10
Solution:
let i = 1;

while (i <= 10) {

    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
}

Notice we're combining:

while + if

This is important because you'll use this type of logic frequently.

Q4. Sum numbers from 1 to 5

We want:

1 + 2 + 3 + 4 + 5 = 15

We need another variable to store the sum.

let i = 1;
let sum = 0;

while (i <= 5) {

    sum = sum + i;

    i++;
}

console.log(sum);
Trace:
sum = 0

i = 1 → sum = 1
i = 2 → sum = 3
i = 3 → sum = 6
i = 4 → sum = 10
i = 5 → sum = 15

Final:

15

This introduces an extremely useful programming concept:

Accumulator
sum = sum + i;

You're repeatedly adding values into one variable.

Q5. Keep asking until user enters 0

This is where while becomes much more useful.

let num = Number(prompt("Enter a number:"));

while (num !== 0) {

    console.log("You entered:", num);

    num = Number(prompt("Enter another number:"));
}

console.log("You entered 0. Program ended.");

The user might enter:

5
8
2
10
0

The loop continues until:

num === 0

This is a situation where while is better than for because you don't know how many times the user will enter a number.

🟡 NOW YOU TRY

Don't look for solutions immediately.

Q6. Print numbers from 1 to 20

Expected:

1
2
3
...
20

Use a while loop.
ANS 
let i=1;
while(i<21){
    console.log(i);
    i++;
}

Q7. Print odd numbers from 1 to 20

Expected:

1
3
5
7
9
11
13
15
17
19
Q8. Print multiples of 5 from 5 to 50

Expected:

5
10
15
20
25
30
35
40
45
50
Q9. Find the sum of even numbers from 1 to 20

Expected:

110

Don't directly calculate it.

Use:

while + if + accumulator
Q10. Countdown

Ask the user:

Enter countdown starting number: 10

Output:

10
9
8
7
6
5
4
3
2
1
Blast off! 🚀
🟠 WHILE + USER INPUT

answer 
let n = Number(prompt("Enter a number: "));
while(n>0){
    console.log(n);
    n--;
}

These are more important for you because they connect directly to your mini projects.

Q11. Password Attempts ⭐

Correct password:

javascript123

Keep asking:

Enter password:

until the user enters the correct password.

Output:

Access granted!

ANSSWER 
let pass = "javascript123";

let userInput = prompt("Enter password: ");

while(userInput !== pass) {
    userInput = prompt("Enter password: ");
}

console.log("Access granted!");
Q12. Number Guessing Game ⭐

Choose a secret number:

let secretNumber = 7;

Keep asking the user to guess:

Enter your guess:

If they enter:

5

say:

Too low!

If:

9

say:

Too high!

If:

7

say:

Correct! 🎉

This is an excellent first while mini-project.

🟠 Q13. ATM Menu ⭐⭐⭐

This is particularly useful because you've already made an ATM.

Instead of your ATM ending after one operation, make it keep running.

===== ATM =====

1. Withdraw
2. Deposit
3. Check Balance
4. Exit

Enter choice:

After withdrawing:

Withdrawal successful!
Balance: ₹5000

===== ATM =====

1. Withdraw
2. Deposit
3. Check Balance
4. Exit

It keeps showing the menu until:

4 → Exit

The core idea is:

while (choice !== 4) {
    // ATM operations
}

This is probably the most useful while exercise for you right now.

🔴 A LITTLE HARDER
Q14. Keep asking until positive number

Ask the user for a number.

If they enter:

-5
Invalid. Enter a positive number.

Keep asking.

If they enter:

10
Valid number: 10
Q15. Sum until user enters 0 ⭐

Keep asking:

Enter number:

For example:

10
20
30
5
0

Then output:

Total = 65

The 0 should not be included in the sum.

This teaches:

while
+
user input
+
accumulator
+
condition
🔴 Q16. Find largest number

Keep asking the user for numbers.

Stop when they enter 0.

Example:

Enter number: 15
Enter number: 8
Enter number: 42
Enter number: 21
Enter number: 0

Largest number = 42

This introduces the idea of maintaining a current maximum.

let n= Number(prompt("Enter a number: "));
let largest 
while(n!==0){
 if(n>largest){
    largest=n;
 }
n=Number(prompt("Enter a number: "));
}
console.log("The largest number is: "+largest);

🔥 Q17. Reverse a number

Input:

12345

Output:

54321

Use a while loop.

Don't use strings for this one. Try to solve it mathematically.

*/

let n = Number(prompt("Enter a number: "));

let reverse = 0;

while(n > 0) {

    let digit = n % 10;

    reverse = reverse * 10 + digit;

    n = Math.floor(n / 10);
}

console.log("Reversed number =", reverse);