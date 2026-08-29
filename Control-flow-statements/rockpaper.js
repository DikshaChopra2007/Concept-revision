//rock-paper-scissors game
/*function rps(user,computer){
    if(user=="rock" && computer=="scissors"){
        return "You win!";
    }
        else if (user=="rock" && computer=="paper"){
return "You lose!";

        }
        elseif (user=="paper" && computer=="rock"){
            return"You win";

        }
        else if(user=="paper" && computer=="scissors"){
            return "You lose!";
        }   */
       function rps(user, computer) {
        if(user===computer){
            return "Draw";
        }
        else if(user==="rock" && computer==="scissors" || user==="paper" && computer==="rock" || user==="scissors" && computer==="paper"){
            return "You win!";
        }   
        else{
            return "You lose!";
        }}
        console.log(rps("paper","paper"));
