window.addEventListener("load", sidenVises);
let life = 2;
let points = 0;

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
    document.querySelector("#levelComplete").classList.add("hide");



    showStart();
}
// BARE INDTIL VIDERE ----------------------------------------------------
document.querySelector("#energy1").addEventListener("click", levelComplete);
//------------------------------------------------------------------------
function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelComplete").classList.remove("hide");
    document.querySelector("#levelComplete").classList.add("show");
    document.querySelector("#game_background").classList.add("blur");
}



// klik på poo


// klik på slime




document.querySelector("#poo").addEventListener("click", clickPoo);


function clickPoo() {
    console.log(this);
    console.log("clickPoo");
    points++;
    document.querySelector("#points").innerHTML = points;

    this.classList.add("dissappear");
    //giv point!
    document.querySelector("#points").textContent = points;
    console.log(points);

    gameStatus();

    //    pointsStartus();
    document.querySelector("#poo").addEventListener("animationend", nyPoo);

}

function nyPoo() {

    console.log("nyPoo");
    let positionNr = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#poo").classList.add("position" + positionNr);
    document.querySelector("#poo").classList.remove("dissappear");


}



document.querySelector("#slimepoop ").addEventListener("click", slimForsvind);



function slimForsvind() {
    console.log("clicSlime");
    this.classList.add("dissappear");
    points--;
    // TODO: giv point!

    console.log(points);
    // også TODO: Få det til at virke så mønten starter forfra - det må vente
    gameStatus();


}
document.querySelector("#slimepoop").addEventListener("animationend", nySlimePooP);

function nySlimePooP() {
    console.log("nySlimePoo");
    let positionNr = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#slimepoop").classList.add("position" + positionNr);
    document.querySelector("#slimepoop").classList.remove("dissappear");

}

function gameStatus() {
    console.log("gameStatus")
    if (points == 0) {
        hus0();
    } else if (points == 1) {
        hus1();
    } else if (points == 2) {
        hus2();
    } else if (points == 3) {
        hus3();
    } else if (points == 4) {
        hus4();
    } else if (points == 5) {
        hus5();
    }
}

function hus0() {
    document.querySelector("#points").classList.add("points0");
    document.querySelector("#points").classList.remove("points1");
    console.log("hus0");
}

function hus1() {
    document.querySelector("#points").classList.add("points1");
    document.querySelector("#points").classList.remove("points2");
    document.querySelector("#points").classList.remove("points0");
    console.log("hus1");

}

function hus2() {
    document.querySelector("#points").classList.add("points2");
    document.querySelector("#points").classList.remove("points1");
    document.querySelector("#points").classList.remove("points3");;
    console.log("hus2");

}

function hus3() {
    document.querySelector("#points").classList.add("points3");
    document.querySelector("#points").classList.remove("points2");
    document.querySelector("#points").classList.remove("points4");
    console.log("hus3");

}

function hus4() {
    document.querySelector("#points").classList.add("points4");
    document.querySelector("#points").classList.remove("points3");
    document.querySelector("#points").classList.remove("points5");
    console.log("hus2");

}

function hus5() {
    document.querySelector("#points").classList.add("points5");
    document.querySelector("#points").classList.remove("points4");
    console.log("hus2");

}
