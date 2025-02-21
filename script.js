const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4"); 
const btn5 = document.querySelector("#btn5");

const inven = [
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
    const menu = [
        salt_cod_puffs, 
        finger_sandwiches, 
        kaiser_roll, 
        knights_bread, 
        frozen_spirits, 
        orange_juice, 
        buckwheat_tea, 
        purple_carrot_juice, 
        loquat_juice, 
        grape_juice, 
        apple_juice, 
        lemonade, 
        blood_tomato_juice
    ];
    haveInven();
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
    for (let i = 0; i < inven.length+1; i++) {
        if (inven.includes(item) && menu.include(item)) {
            item.style.display = "contents";
        } else {
            item.style.display = "none";
        };
    };
}
