var currentStrength = 0;
var currentItem = "SWORD";
var currentRarity = "COMMON";

function copyPaste() {
  var x = document.getElementById("symbols");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function ability1() {
  var x = document.getElementById("ability1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function abilityName(input) {
  document.getElementById("#abilityName").textContent = input;
  document.querySelector(".abilityName").style.display = "block";
}
function abilityKeybind(input) {
  document.getElementById("#abilityKeybind").textContent = input;
  document.querySelector(".abilityKeybind").style.display = "block";
}
function abilityDescription(input) {
  document.getElementById("#abilityDescription").textContent = input;
  document.querySelector(".abilityDescription").style.display = "block";
}
function abilityMana(input) {
  document.getElementById("#abilityMana").textContent = input;
  document.querySelector(".abilityMana").style.display = "block";
}
function abilityCooldown(input) {
  document.getElementById("#abilityCooldown").textContent = input;
  document.querySelector(".abilityCooldown").style.display = "block";
}
function itemName(input) {
  document.querySelector(".item-name").textContent = input;
}
function gearScore(input) {
  document.querySelector(".item-gearscore").textContent = input;
  document.querySelector(".gearscore").style.display = "block";
  document.getElementById("#gearscore").textContent = dungeonCalc(input);
}
function strength(input) {
  document.getElementById("#strength").textContent = "+" + input;
  document.querySelector(".strength").style.display = "block";
  document.getElementById("#dungeon_strength").textContent = dungeonCalc(
    input,
    "strength"
  );
  currentStrength = input;
}
function Damage(input) {
  document.getElementById("#damage").textContent = "+" + input;
  document.querySelector(".damage").style.display = "block";
  document.getElementById("#dungeon_damage").textContent = dungeonCalc(
    input,
    "damage"
  );
}
function abilitydamage(input) {
  document.getElementById("#abilitydamage").textContent = "+" + input;
  document.querySelector(".abilitydamage").style.display = "block";
  document.getElementById("#dungeon_abilitydamage").textContent =
    dungeonCalc(input);
}
function gemstones(input) {
  if (input >= 6) {
    input = 5;
  }
  var string = "";
  for (let i = 0; i < input; i++) {
    string = string + "[❂]";
    console.log(string);
  }
  document.getElementById("#gemstoneSlots").textContent = string;
  document.querySelector(".gemstoneSlots").style.display = "block";
}
function critDamage(input) {
  document.getElementById("#critdamage").textContent = "+" + input + "%";
  document.querySelector(".critdamage").style.display = "block";
  document.getElementById("#dungeon_critdamage").textContent =
    dungeonCalc(input) + "%";
}
function attackSpeed(input) {
  document.getElementById("#attackSpeed").textContent = "+" + input + "%";
  document.querySelector(".attackSpeed").style.display = "block";
  document.getElementById("#dungeon_attackSpeed").textContent =
    dungeonCalc(input) + "%";
}
function Intelligence(input) {
  document.getElementById("#intelligence").textContent = "+" + input;
  document.querySelector(".intelligence").style.display = "block";
  document.getElementById("#dungeon_intelligence").textContent =
    dungeonCalc(input);
}
function critChance(input) {
  document.getElementById("#critchance").textContent = "+" + input + "%";
  document.querySelector(".critchance").style.display = "block";
  document.getElementById("#dungeon_critchance").textContent =
    dungeonCalc(input);
}
function ferocity(input) {
  document.getElementById("#ferocity").textContent = "+" + input;
  document.querySelector(".ferocity").style.display = "block";
  document.getElementById("#dungeon_ferocity").textContent = dungeonCalc(input);
}
function defense(input) {
  document.getElementById("#defense").textContent = "+" + input;
  document.querySelector(".defense").style.display = "block";
  document.getElementById("#dungeon_defense").textContent = dungeonCalc(input);
}
function itemType(input) {
  input = input.toUpperCase();
  currentItem = input;
  document.getElementById("#item-type").textContent =
    currentRarity + " " + input;
}
function magicfind(input) {
  document.getElementById("#magicfind").textContent = "+" + input;
  document.querySelector(".magicfind").style.display = "block";
  document.getElementById("#dungeon_magicfind").textContent = dungeonCalc(
    input,
    "magicfind"
  );
}
function speed(input) {
  document.getElementById("#speed").textContent = "+" + input;
  document.querySelector(".speed").style.display = "block";
  document.getElementById("#dungeon_speed").textContent = dungeonCalc(
    input,
    "speed"
  );
}

function artofwar(input) {
  var checkBox = document.getElementById("aow");
  if (checkBox.checked == true) {
    document.getElementById("#aow").innerHTML = "[+5]";
    strength(currentStrength);
  } else {
    document.getElementById("#aow").innerHTML = "";
    strength(currentStrength);
  }
}

function dungeonCalc(input, type) {
  var num = parseInt(input);
  if (type == "strength") {
    var checkBox = document.getElementById("aow");
    if (checkBox.checked == true) {
      num = num + 5;
    } else var num = input;
  }
  if (type == "magicfind" || type == "speed") {
    return;
  }
  var dungeonStatCalc = (465 * num) / 100;
  dungeonStatCalc * 5.5;
  return dungeonStatCalc;
}
function switchType(evt, type) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(type).style.display = "block";
  evt.currentTarget.className += " active";
}
const commonColor = "#d3d3d3";
const uncommonColor = "#4fe34d";
const rareColor = "#5453fb";
const epicColor = "#970295";
const legendaryColor = "#f1a001";
const mythicColor = "#f551f4";
const specialColor = "#ff5555";
const veryspecialColor = "#fe5454";
const divineColor = "#53f7f7";

function common() {
  document.querySelector(".item-name").style.color = hexToRgbA(commonColor);
  document.getElementById("#item-type").style.color = hexToRgbA(commonColor);
  document.getElementById("#item-type").textContent = "COMMON " + currentItem;
  currentRarity = "COMMON";
}
function uncommon() {
  document.querySelector(".item-name").style.color = hexToRgbA(uncommonColor);
  document.getElementById("#item-type").style.color = hexToRgbA(uncommonColor);
  document.getElementById("#item-type").textContent = "UNCOMMON " + currentItem;
  currentRarity = "UNCOMMON";
}
function rare() {
  document.querySelector(".item-name").style.color = hexToRgbA(rareColor);
  document.getElementById("#item-type").style.color = hexToRgbA(rareColor);
  document.getElementById("#item-type").textContent = "RARE " + currentItem;
  currentRarity = "RARE";
}
function epic() {
  document.querySelector(".item-name").style.color = hexToRgbA(epicColor);
  document.getElementById("#item-type").style.color = hexToRgbA(epicColor);
  document.getElementById("#item-type").textContent = "EPIC " + currentItem;
  currentRarity = "EPIC";
}
function legendary() {
  document.querySelector(".item-name").style.color = hexToRgbA(legendaryColor);
  document.getElementById("#item-type").style.color = hexToRgbA(legendaryColor);
  document.getElementById("#item-type").textContent =
    "LEGENDARY " + currentItem;
  currentRarity = "LEGENDARY";
}
function mythic() {
  document.querySelector(".item-name").style.color = hexToRgbA(mythicColor);
  document.getElementById("#item-type").style.color = hexToRgbA(mythicColor);
  document.getElementById("#item-type").textContent = "MYTHIC " + currentItem;
  currentRarity = "MYTHIC";
}
function special() {
  document.querySelector(".item-name").style.color = hexToRgbA(specialColor);
  document.getElementById("#item-type").style.color = hexToRgbA(specialColor);
  document.getElementById("#item-type").textContent = "SPECIAL " + currentItem;
  currentRarity = "SPECIAL";
}
function veryspecial() {
  document.querySelector(".item-name").style.color =
    hexToRgbA(veryspecialColor);
  document.getElementById("#item-type").style.color =
    hexToRgbA(veryspecialColor);
  document.getElementById("#item-type").textContent =
    "VERY SPECIAL " + currentItem;
  currentRarity = "VERYSPECIAL";
}
function divine() {
  document.querySelector(".item-name").style.color = hexToRgbA(divineColor);
  document.getElementById("#item-type").style.color = hexToRgbA(divineColor);
  document.getElementById("#item-type").textContent = "DIVINE " + currentItem;
  currentRarity = "DIVINE";
}

function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
    );
  }
  throw new Error("Bad Hex");
}
