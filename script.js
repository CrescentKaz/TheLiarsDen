const salt_cod_puffs = document.querySelector("#salt_cod_puffs");
const finger_sandwiches = document.querySelector("#finger_sandwiches");
const kaiser_roll = document.querySelector("#kaiser_roll");
const knights_bread = document.querySelector("#knights_bread");
const frozen_spirits = document.querySelector("#frozen_spirits");
const orange_juice = document.querySelector("#orange_juice");
const buckwheat_tea = document.querySelector("#buckwheat_tea");
const purple_carrot_juice = document.querySelector("#purple_carrot_juice");
const loquat_juice = document.querySelector("#loquat_juice");
const grape_juice = document.querySelector("#grape_juice");
const apple_juice = document.querySelector("#apple_juice");
const lemonade = document.querySelector("#lemonade");
const blood_tomato_juice = document.querySelector("#blood_tomato_juice");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4"); 
const btn5 = document.querySelector("#btn5");

let inven = [
    salt_cod_puffs,
    kaiser_roll,
    frozen_spirits,
    apple_juice
]

btn1.onclick = homeFunction;
btn2.onclick = menuFunction;
btn3.onclick = gamesFunction;
btn4.onclick = staffFunction;
btn5.onclick = affiliationsFunction;

haveInven();

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

function affiliationsFunction() {
    home_section.style.display = "none";
    menu_section.style.display = "none";
    games_section.style.display = "none";
    staff_section.style.display = "none";
    more_section.style.display = "contents";
}

function haveInven() {
    if (!inven.includes(item)) {
        item.style.display = "none";
    } else {
        item.style.display = "contents";
    }
}
