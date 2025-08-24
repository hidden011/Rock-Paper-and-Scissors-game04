let choices = document.body.querySelector(".choices");
let player = document.body.querySelector(".player")

choices.onlick


choices.addEventListener('click', function(e) {
    console.log(`${e.target}, ${e.target.className}`);
    
    
    if(e.target.className == "rock") {
        player.innerHTML = "PLAYER: 🪨";
    }
    else if(e.target.className == 'paper') {
        player.innerHTML = "PLAYER: 🧻";

    }
    else if(e.target.className == 'scissors') {
        player.innerHTML = "PLAYER: ✂️";

    }

}) 


