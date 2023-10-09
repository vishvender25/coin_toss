var user_choice = prompt("Enter your choice heads/tails");
var computer_choice = Math.random();
computer_choice *= 2;
computer_choice = Math.ceil(computer_choice);
// computer_choice 1 -> heads and computer_choice 2 -> tails
if(computer_choice == 1){
    document.getElementById("coin").setAttribute("src", "./images/head.png");
}

else{
    document.getElementById("coin").setAttribute("src", "./images/tail.png");
}
document.getElementById("user-choice").innerText = "Your choice " + user_choice;

if(computer_choice == 1 && user_choice == 'heads' ){

    document.getElementById("result").innerText = "You won!!";
}
else if(computer_choice == 2 && user_choice == 'tails'){
    document.getElementById("result").innerText = "You won!!";
}
else{
    document.getElementById("result").innerText = "You Loose!!";
}
