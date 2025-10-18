let homePoints = 0;
let guestPoints = 0;
const homePointsEl = document.getElementById("home-points");
const homeDisplayEl = document.getElementById("home-display");
const guestPointsEl = document.getElementById("guest-points");
const guestDisplayEl = document.getElementById("guest-display");
const outcomes = ["HOME", "GUEST", "TIE"];

const processWhoIsWinning = () =>{
    if (homePoints > guestPoints){
        return outcomes[0];
    } else if (guestPoints > homePoints){
        return outcomes[1];
    } else{
        return outcomes[2];
    }
}

const processCurrentWinner = () => {
    let currentWinner = processWhoIsWinning();
    if (currentWinner === outcomes[0]){
        homeDisplayEl.style.border = "2px solid white"
        homeDisplayEl.style.boxShadow = "0 0 10px white";
        guestDisplayEl.style.border = "2px solid #1B244A";
        guestDisplayEl.style.boxShadow = "";
    } else if ( currentWinner === outcomes[1]){
        guestDisplayEl.style.border = "2px solid white";
        guestDisplayEl.style.boxShadow = "0 0 10px white";
        homeDisplayEl.style.border = "2px solid #1B244A"
        homeDisplayEl.style.boxShadow = ""
    } else {

    }
}

const addPoints = (team, points) =>{
    if (team === "HOME"){
        homePoints += points;
        homePointsEl.textContent= homePoints;
    } else {
        guestPoints += points;
        guestPointsEl.textContent = guestPoints;
    }

    processCurrentWinner()
}

const reset = () =>{
    //Reset points
    guestPoints = 0;
    homePoints = 0;

    //Reset styling and content for homeDisplayEl
    homePointsEl.textContent = "0";
    homeDisplayEl.style.border = "2px solid #1B244A"
    homeDisplayEl.style.boxShadow = ""

    //Reset styling and content for guestDisplayEl
    guestPointsEl.textContent = "0";
    guestDisplayEl.style.border = "2px solid #1B244A";
    guestDisplayEl.style.boxShadow = "";
}

window.addPoints = addPoints;
window.reset = reset;
window.processCurrentWinner = processCurrentWinner;
window.processWhoIsWinning = processWhoIsWinning;