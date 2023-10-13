var computer_choice = "";
var user_choice = "";
document.getElementById("submit-btn").addEventListener("click", function(event){
    user_choice = document.getElementById("user-input").value;
    if(user_choice == "heads"){
        document.querySelectorAll(".coin")[0].setAttribute("src", "./images/head.png");
    
    }
    else{
        document.querySelectorAll(".coin")[0].setAttribute("src", "./images/tail.png");
    }
    
    var computer_choice = Math.random();
    computer_choice *=2 ;
    computer_choice = Math.ceil(computer_choice);
    
    var coin_choice = "";
    
    if(computer_choice == 1){
        coin_choice = "heads";
        document.querySelectorAll(".coin")[1].setAttribute("src", "./images/head.png");
    }
    
    else{
        coin_choice = "tails";
        document.querySelectorAll(".coin")[1].setAttribute("src", "./images/tail.png");
    }
    if(user_choice == coin_choice){
        document.getElementById("result").innerText = "You Win!!";
    }
    else{
        document.getElementById("result").innerText = "You Loose!!";
    }
});
