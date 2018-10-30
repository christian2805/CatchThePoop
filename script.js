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

}
