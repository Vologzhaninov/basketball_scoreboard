let homeBoard = document.getElementById("home-board");
let guestBoard = document.getElementById("guest-board");
let homeTitle = document.getElementById("home-title");
let guestTitle = document.getElementById("guest-title");
let homeScore = 0;
let guestScore = 0;

function highlightLeader() {
    if (homeScore > guestScore) {
        homeTitle.style.color = "#FDE68A";
        guestTitle.style.color = "";
    } else if (guestScore > homeScore) {
        guestTitle.style.color = "#FDE68A";
        homeTitle.style.color = "";
    } else {
        homeTitle.style.color = "";
        guestTitle.style.color = "";
    }
}


function addHome1() {
    homeScore += 1;
    homeBoard.textContent = homeScore;
    highlightLeader();
}
    
function addHome2() {
    homeScore += 2;
    homeBoard.textContent = homeScore;
    highlightLeader();
}

function addHome3() {
    homeScore += 3;
    homeBoard.textContent = homeScore;
    highlightLeader();
}

function addGuest1() {
    guestScore += 1;
    guestBoard.textContent = guestScore;
    highlightLeader();
}

function addGuest2() {
    guestScore += 2;
    guestBoard.textContent = guestScore;
    highlightLeader();
}

function addGuest3() {
    guestScore += 3;
    guestBoard.textContent = guestScore;
    highlightLeader();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeBoard.textContent = homeScore;
    guestBoard.textContent = guestScore;
    highlightLeader();
}