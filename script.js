window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting
    showStart();
}

function showStart() {
    console.log("ShowStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.remove("menu_just_do_it");
    // Vis Startskærm
    document.querySelector("#start").classList.add("show");
    // start animation på start-knap
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#rotte").classList.remove("paused");
    document.querySelector("#slimepoop").classList.remove("paused");
    document.querySelector("#poo").classList.remove("paused");

}

// klik på start-knap
document.querySelector("#play").addEventListener("click", hideStart);
// klik på settingsIcon


function hideStart() {
    console.log("hideStart");
    // stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    // fade startskærm ud
    document.querySelector("#start").classList.add("menu_just_do_it");

}
//når fade-animation er færdig -> startgame
document.querySelector("#start").addEventListener("animationend", startGame);

function startGame() {
    console.log("startGame");
    // skjul startskærm
    document.querySelector("#start").classList.add("hide");
    //Vis spilskærm
    document.querySelector("#game_background").classList.add("show");
    // poo falder
    document.querySelector("#poo").classList.add("falling");
    //slimepoo falder
    document.querySelector("#slimepoop").classList.add("falling");
    //rat går igang
    document.querySelector("#rotte").classList.add("rat_race");
    document.querySelector("#rotte").classList.remove("hide");

}
document.querySelector("#rotte").addEventListener("click", ratForsvind);

function ratForsvind() {

    console.log("ratForsvind");
    //rotte på pause
    document.querySelector("#rotte").classList.add("paused");
    //rotte forsvinder
    document.querySelector("#rotte").classList.add("hide");

}


document.querySelector("#settingsicon").addEventListener("click", showSettings);

function showSettings() {
    console.log("showSettings");
    // Vis settings menu
    document.querySelector("#settings").classList.remove("hide");
    // put blur på titelscreen'
    document.querySelector("#start").classList.add("blur");

}
//klik "X"
document.querySelector("#exit").addEventListener("click", hideSettings);

function hideSettings() {
    console.log("hideSettings");
    // fjern settings menu
    document.querySelector("#settings").classList.add("hide");
    // fjern settings menu
    document.querySelector("#gameOver").classList.add("hide");
    // fjern settings menu
    document.querySelector("#levelComplete").classList.add("hide");
    // fjern blur på titelscreen'
    document.querySelector("#start").classList.remove("blur");
    // fjern menu gameOver
    document.querySelector("#gameOver").classList.add("hide");
    // fjern blur på game_background
    document.querySelector("#game_background").classList.remove("blur");

}
// BARE INDTIL VIDERE ----------------------------------------------------
document.querySelector("#points").addEventListener("click", gameOver);
//------------------------------------------------------------------------
function gameOver() {
    console.log("gameOver")

    document.querySelector("#gameOver").classList.remove("hide");
    document.querySelector("#game_background").classList.add("blur");
    document.querySelector("#rotte").classList.add("paused");
    document.querySelector("#slimepoop").classList.add("paused");
    document.querySelector("#poo").classList.add("paused");

}
document.querySelector("#restart").addEventListener("click", restartGame);

function restartGame() {
    console.log("restartGame");

    document.querySelector("#gameOver").classList.add("hide");
    document.querySelector("#game_background").classList.remove("blur");

    showStart();
}
// BARE INDTIL VIDERE ----------------------------------------------------
document.querySelector("#energy").addEventListener("click", levelComplete);
//------------------------------------------------------------------------
function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelComplete").classList.remove("hide");
    document.querySelector("#levelComplete").classList.add("show");
}




// klik på poo


// klik på slime




document.querySelector("#poo").addEventListener("click", pooForsvind);
let points = 0;

function pooForsvind() {
    console.log(this);
    console.log("pooForsvind");
    points++;
    this.classList.add("hide");
    //giv point!
    document.querySelector("#points").textContent = points;
    console.log(points);


}




document.querySelector("#slimepoop ").addEventListener("click", slimForsvind);



function slimForsvind() {
    console.log("clicSlime");
    console.log(this);
    this.classList.add("hide");
    points--;
    // TODO: giv point!
    document.querySelector("#points").textContent = points;
    console.log(points);
    // også TODO: Få det til at virke så mønten starter forfra - det må vente
}
