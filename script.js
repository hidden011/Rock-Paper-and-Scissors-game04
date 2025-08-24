let choices = document.body.querySelector(".choices");
let player = document.body.querySelector(".player")
let computer_Text = document.body.querySelector(".computer");
let result_out= document.body.querySelector(".result");


choices.addEventListener('click', function(e) {
    
    let comp_choice = '';
    let player_choice = '';
    function computer() {
        let arrChoices = ["🪨", "🧻", "✂️"];
        let ranIndex = Math.floor(Math.floor((Math.random()*10))/4);
        computer_Text.innerHTML = `COMPUTER: ${arrChoices[ranIndex]}`;
        comp_choice = arrChoices[ranIndex];
        
        
    }
computer();
    
    if(e.target.className == "rock") {
        player.innerHTML = "PLAYER: 🪨";
        player_choice = "🪨";

    }
    else if(e.target.className == 'paper') {
        player.innerHTML = "PLAYER: 🧻";
        player_choice = "🧻";

    }
    else if(e.target.className == 'scissors') {
        player.innerHTML = "PLAYER: ✂️";
        player_choice = "✂️";

    }
    result(comp_choice, player_choice) ;
    function result(comp, play) {
        if(comp == play) {
            result_out.textContent = "You Win!! 😃";
            result_out.style.backgroundColor = "lightgreen";

        }
        else{
            result_out.textContent = "You Lost!! 😔";
            result_out.style.backgroundColor = "#FF7F7F";
            result_out.style.color = "white";
            

        }
    }
        

    

});


