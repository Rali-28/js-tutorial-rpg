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

const btnStore = document.querySelector("#btnStore");
const btnCave = document.querySelector("#btnCave");
const btnDragon = document.querySelector("btnDragon");
const text = document.querySelector("#text");
const xpTxt = document.querySelector("#xpTxt");
const healthTxt = document.querySelector("#healthTxt");
const goldTxt = document.querySelector("#goldTxt");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameTxt = document.querySelector("#monsterName");
const monsterHealthTxt = document.querySelector("#monsterHealth");

/* End Element Selectors */