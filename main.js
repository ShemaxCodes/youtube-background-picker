

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow



function partyPurple() {
    document.querySelector('body').style.backgroundColor = "rgba(241,63,247,1)";

    document.querySelector('body').style.color = "white";
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = "rgba(0,253,81,1)";

    document.querySelector('body').style.color = "white";
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = "rgb(0, 183, 255)";

    document.querySelector('body').style.color = "white";
}

function partyYellow() {
    document.querySelector('body').style.backgroundColor  = "rgb(244, 248, 0)";

    document.querySelector('body').style.color = "white";
}