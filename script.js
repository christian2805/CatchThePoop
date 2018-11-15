window.addEventListener("load", sidenVises);
let life = 3;
let points = 0;
let timeleft = 30;
let showSettingsEffektSound = true;
let showSettingsMusic = true;



function sidenVises() {
    console.log("sidenVises");
    // nulstil alting
    showStart();

    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#music_sprite").addEventListener("click", toggleMusic);

}

function showStart() {
    console.log("ShowStart");
    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#levelComplete").classList.add("hide");
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
    document.querySelector("#intro").play();
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
    document.querySelector("#rotte").addEventListener("animationend", tjekRotte);
    document.querySelector("#rotte").addEventListener("click", clickRotte);
    tidenGaar();
}
//fjerner et hjerte når rotten er færdig med sin animation


function rotteSpis() {
    console.log("spist");
    life--;
    document.querySelector("#lorteLort").play();
    console.log(life);
    document.querySelector("#energy" + life).classList.remove("energy");
    //    this.classList.add("dissappear")
    document.querySelector("#mainpoop").classList.add("shake");
    document.querySelector("#rotte").classList.add("dissappear");
    document.querySelector("#rotte").classList.remove("rat_race");
    document.querySelector("#rotte").addEventListener("animationend", nyRotte);

    livStatus();
    //    nyRotte();
}

function tjekRotte() {
    document.querySelector("#rotte").removeEventListener("animationend", tjekRotte);
    if (document.querySelector("#rotte").classList.contains("rat_race")) {
        rotteSpis();
    }
}

//document.querySelector("#rotte").addEventListener("click", clickRotte);


function clickRotte() {
    document.querySelector("#piv").play();
    console.log("ratforsvind");
    //rotte på pause

    //    this.classList.add("pause");
    this.classList.add("dissappear");
    this.classList.remove("rat_race");
    document.querySelector("#rotte").addEventListener("animationend", nyRotte);
    tjekRotte();


    //rotte forsvinder


}

function nyRotte() {
    console.log("nyrotte");
    document.querySelector("#rotte").removeAttribute("class");
    document.querySelector("#mainpoop").classList.remove("shake");
    nyeRotte();
}

function nyeRotte() {
    console.log("nyeRotte");
    let posNr = Math.floor((Math.random() * 2) + 1);
    document.querySelector("#rotte").classList.add("pos" + posNr);
    console.log(posNr);
    document.querySelector("#rotte").classList.add("rat_race");
    document.querySelector("#rotte").addEventListener("animationend", tjekRotte);
    //    document.querySelector("#rotte").classList.remove("dissappear");
}

document.querySelector("#settingsicon").addEventListener("click", showSettings);

//klik "X"
document.querySelector("#exit").addEventListener("click", hideSettings);

function hideSettings() {
    console.log("hideSettings");
    // fjern settings menu
    document.querySelector("#settings_screen").classList.add("hide");
    // fjern settings menu
    document.querySelector("#gameOver").classList.add("hide");
    // fjern settings menu
    document.querySelector("#levelComplete").classList.add("hide");
    // fjern blur på tintelscreen'
    document.querySelector("#start").classList.remove("blur");
    // fjern menu gameOver
    document.querySelector("#gameOver").classList.add("hide");
    // fjern blur på game_background
    document.querySelector("#game_background").classList.remove("blur");

}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#lort").play();
    document.querySelector("#gameOver").classList.remove("hide");
    document.querySelector("#game_background").classList.add("blur");
    document.querySelector("#rotte").classList.add("paused");
    document.querySelector("#slimepoop").classList.add("paused");
    document.querySelector("#poo").classList.add("paused");


}
document.querySelector("#restart1").addEventListener("click", restartGame);
document.querySelector("#restart").addEventListener("click", restartGame);

function restartGame() {
    console.log("restartGame");

    //document.querySelector("#gameOver").classList.add("hide");
    //document.querySelector("#game_background").classList.remove("blur");
    //document.querySelector("#levelComplete").classList.add("hide");
    location.reload();



    showStart();
}

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelComplete").classList.remove("hide");
    document.querySelector("#levelComplete").classList.add("show");
    document.querySelector("#game_background").classList.add("blur");
    document.querySelector("#restart").addEventListener("click", restartGame);
    document.querySelector("#rotte").classList.add("paused");
    document.querySelector("#slimepoop").classList.add("paused");
    document.querySelector("#poo").classList.add("paused");
}



// klik på poo


// klik på slime


document.querySelector("#poo").addEventListener("click", clickPoo);


function clickPoo() {
    console.log(this);
    console.log("clickPoo");
    document.querySelector("#yay").play();
    points++;
    document.querySelector("#points").innerHTML = points;

    this.classList.add("pause");
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
    document.querySelector("#poo").classList.remove("pause");



}


document.querySelector("#slimepoop ").addEventListener("click", slimForsvind);


function slimForsvind() {
    console.log("clickSlime");
    document.querySelector("#evil").play();

    this.classList.add("dissappear");
    points--;
    document.querySelector("#points").innerHTML = points;
    // TODO: giv point!
    console.log(points);

    gameStatus();


}
document.querySelector("#slimepoop").addEventListener("animationend", nySlimePooP);

function nySlimePooP() {
    console.log("nySlimePoo");
    let positionNr = Math.floor((Math.random() * 10) + 1);
    document.querySelector("#slimepoop").classList.add("position" + positionNr);
    document.querySelector("#slimepoop").classList.remove("dissappear");

}

function livStatus() {
    if (life == 0) {
        gameOver();
    }
}



function tidenGaar() {
    console.log("tidengaar");

    timeleft--;

    if (timeleft > 0) {
        setTimeout(tidenGaar, 1000);



    } else {
        gameOver();
    }
    console.log(timeleft);
    document.querySelector("#time").textContent = timeleft;
}


// -------------------------------- points ------------------------------

function gameStatus() {
    console.log("gameStatus");
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
        levelComplete();
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
    console.log("hus4");

}

function hus5() {
    document.querySelector("#points").classList.add("points5");
    document.querySelector("#points").classList.remove("points4");
    console.log("hus5");

}
// -----------------------------------   settings/lyd -------------------------------------------------------------------------------
function showSettings() {
    console.log("showSettings");
    // Vis settings menu
    document.querySelector("#settings_screen").classList.remove("hide");
    // put blur på titelscreen'
    document.querySelector("#start").classList.add("blur");
}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsMusic == false) {
        //her klikker vi lyden på
        showSettingsMusic = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsMusic = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationen", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#lorteLort").muted = true;
    document.querySelector("#lort").muted = true;
    document.querySelector("#piv").muted = true;
    document.querySelector("#evil").muted = true;



}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#lorteLort").muted = false;
    document.querySelector("#lort").muted = false;
    document.querySelector("#piv").muted = false;
    document.querySelector("#evil").muted = false;
}

function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    //    showSettingsMusic = !showSettingsMusic;


    if (showSettingsMusic == false) {
        //jeg tænder for musikken

        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);

        //        musicOn();

    } else {
        //jeg slukker
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.add("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);


        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");
    //    her slukkes for musikken
    document.querySelector("#intro").muted = true;
    document.querySelector("#intro").pause();
    document.querySelector("#musik").pause();
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");
    //    her tændes for musikken

    document.querySelector("#intro").muted = false;
    document.querySelector("#musik").play();
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
