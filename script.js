/* Stats Variables */

// player's xp
let xp = 0;
//player's health
let health = 100;
// player's gold
let gold = 50;
// player's current weapon/s
let currentWeapon = 0;
// variable when fighting
let fighting;
// determines the monster's helath
let monsterHealth;
// Arrays for player's inventory
let inventory = ["stick"];

/* End Stats Variables */

/* Element Selectors */

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const text = document.querySelector("#text");
const xpTxt = document.querySelector("#xpTxt");
const healthTxt = document.querySelector("#healthTxt");
const goldTxt = document.querySelector("#goldTxt");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameTxt = document.querySelector("#monsterName");
const monsterHealthTxt = document.querySelector("#monsterHealth");

/* End Element Selectors */

/* Initialize Button Functions */

btn1.onclick = goStore;
btn2.onclick = goCave;
btn3.onclick = fightDragon; 

function goStore() {
    console.log("At Store")
}

function goCave() {
    console.log("At Cave");
}

function fightDragon() {
    console.log("Fighting the Dragon");
}

/* End Button Functions */