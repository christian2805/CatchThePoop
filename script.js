window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting
    showStart();
}

function showStart() {
    console.log("ShowVises");
    // Vis Startskærm
    document.querySelector("#start").classList.add("show");
    // start animation på start-knap
    document.querySelector("#play").classList.add("pulse");




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
    document.querySelector("#play").classList.add("show");
    // poo falder
    document.querySelector("#poo").classList.add("falling");
    //slimepoo falder
    document.querySelector("#slimepoop").classList.add("falling");
    //rat går igang
    document.querySelector("#rotte").classList.add("rat_race");

}
document.querySelector("#rotte").addEventListener("click", ratForsvind);

function ratForsvind() {

    console.log("ratForsvind");

    document.querySelector("#rotte").classList.add("paused");
    document.querySelector("#rotte").classList.add("dissappear");

}
document.querySelector("#poo").addEventListener("click", pooForsvind);

function pooForsvind() {

    console.log("pooForsvind");

    document.querySelector("#poo").classList.add("paused");
    document.querySelector("#poo").classList.add("dissappear");

}
document.querySelector("#slimepoop ").addEventListener("click", slimForsvind);

function slimForsvind() {

    console.log("slimForsvind");

    document.querySelector("#slimepoop").classList.add("paused");
    document.querySelector("#slimepoop").classList.add("dissappear");

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
    // fjern blur på titelscreen'
    document.querySelector("#start").classList.remove("blur");

}
