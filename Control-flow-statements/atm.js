let balance= Number(prompt("Enter your balance:"));
let choice= Number(prompt("Enter your choice 1:withdraw 2:deposit 3:check balance 4 :exit"));
switch(choice){
    case 1:
let amount=Number(prompt("enter amount to be withdrawn"));


if (amount>balance){
    prompt("Insufficient balance");
}
else{
     balance=balance-amount;
prompt ("The latest balance is:"+balance);
}
break;
case 2:
let depoAmount=Number(prompt("Enter the amount to be deposited"));
if (depoAmount<=0){
    prompt("Invalid amount");
}
else{
 balance=balance+depoAmount;
prompt("The latest balance is"+balance);
}
    break;

case 3:
    prompt("Your balance is:"+balance);
    break;
    case 4:
 prompt("Thank you for using the ATM!");
        break;
default:
    prompt("Invalid choice");
    break;