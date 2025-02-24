const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4"); 
const btn5 = document.querySelector("#btn5");

btn1.onclick = homeFunction;
btn2.onclick = menuFunction;
btn3.onclick = gamesFunction;
btn4.onclick = staffFunction;
btn5.onclick = moreFunction;

function homeFunction() {
    home_section.style.display = "contents";
    menu_section.style.display = "none";
    games_section.style.display = "none";
    staff_section.style.display = "none";
    more_section.style.display = "none";
}

function menuFunction() {
    home_section.style.display = "none";
    menu_section.style.display = "contents";
    games_section.style.display = "none";
    staff_section.style.display = "none";
    more_section.style.display = "none";
}

function gamesFunction() {
    home_section.style.display = "none";
    menu_section.style.display = "none";
    games_section.style.display = "contents";
    staff_section.style.display = "none";
    more_section.style.display = "none";
}

function staffFunction() {
    home_section.style.display = "none";
    menu_section.style.display = "none";
    games_section.style.display = "none";
    staff_section.style.display = "contents";
    more_section.style.display = "none";
}

function moreFunction() {
    home_section.style.display = "none";
    menu_section.style.display = "none";
    games_section.style.display = "none";
    staff_section.style.display = "none";
    more_section.style.display = "contents";
}
