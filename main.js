var currentStrength = 0;
var currentGearScore = 0;
var currentDamage = 0;
var currentcritDamage = 0;
var currentAttackSpeed = 0;
var currentIntelligence = 0;
var currentDefence = 0;
var currentabilityDamage = 0;
var currentItem = "SWORD";
var currentRarity = "COMMON";
const commonColor = "#d3d3d3";
const uncommonColor = "#4fe34d";
const rareColor = "#5453fb";
const epicColor = "#970295";
const legendaryColor = "#f1a001";
const mythicColor = "#f551f4";
const specialColor = "#ff5555";
const veryspecialColor = "#fe5454";
const divineColor = "#53f7f7";

function copyPaste() {
  var x = document.getElementById("symbols");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function ability(input) {
  var x = document.getElementById("ability" + input);
  var button = document.getElementById("abilityButton" + input);
  if (x.style.display === "none") {
    x.style.display = "block";
    button.classList.add("active");
  } else {
    x.style.display = "none";
    button.classList.remove("active");
  }
}
function abilityName(input, num) {
  var name = document.getElementById("#abilityName" + num);
  var className = document.querySelector(".abilityName" + num);
  name.textContent = input;
  className.style.display = "block";
}
function abilityKeybind(input, num) {
  var name = document.getElementById("#abilityKeybind" + num);
  var className = document.querySelector(".abilityKeybind" + num);
  name.textContent = input;
  className.style.display = "block";
}
function abilityDescription(input, num) {
  var name = document.getElementById("#abilityDescription" + num);
  var className = document.querySelector(".abilityDescription" + num);
  name.textContent = input;
  className.style.display = "block";
}
function abilityMana(input, num) {
  var name = document.getElementById("#abilityMana" + num);
  var className = document.querySelector(".abilityMana" + num);
  name.textContent = input;
  className.style.display = "block";
}
function abilityCooldown(input, num) {
  var name = document.getElementById("#abilityCooldown" + num);
  var className = document.querySelector(".abilityCooldown" + num);
  name.textContent = input;
  className.style.display = "block";
}
function itemName(input) {
  document.querySelector(".item-name").textContent = input;
}
function gearScore(input) {
  document.querySelector(".item-gearscore").textContent = input;
  document.querySelector(".gearscore").style.display = "block";
  document.getElementById("#gearscore").textContent = dungeonCalc(input);
  currentGearScore = input;
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
  currentDamage = input;
}
function abilitydamage(input) {
  document.getElementById("#abilitydamage").textContent = "+" + input;
  document.querySelector(".abilitydamage").style.display = "block";
  document.getElementById("#dungeon_abilitydamage").textContent =
    dungeonCalc(input);
  currentabilityDamage = input;
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
  if (dungeonized) {
    document.getElementById("#dungeon_critdamage").textContent =
      dungeonCalc(input) + "%";
  } else {
    document.getElementById("#dungeon_critdamage").textContent = "";
  }
  currentcritDamage = input;
}
function attackSpeed(input) {
  document.getElementById("#attackSpeed").textContent = "+" + input + "%";
  document.querySelector(".attackSpeed").style.display = "block";
  document.getElementById("#dungeon_attackSpeed").textContent =
    dungeonCalc(input) + "%";
  currentAttackSpeed = input;
}
function Intelligence(input) {
  document.getElementById("#intelligence").textContent = "+" + input;
  document.querySelector(".intelligence").style.display = "block";
  document.getElementById("#dungeon_intelligence").textContent =
    dungeonCalc(input);
  currentIntelligence = input;
}
function critChance(input) {
  document.getElementById("#critchance").textContent = "+" + input + "%";
  document.querySelector(".critchance").style.display = "block";
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
  currentDefence = input;
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
}
function speed(input) {
  document.getElementById("#speed").textContent = "+" + input;
  document.querySelector(".speed").style.display = "block";
}

function description(input) {
  document.getElementById("#mainDescription").textContent = input;
  document.querySelector(".mainDescription").style.display = "block";
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

function dungeon(input) {
  var checkBox = document.getElementById("dungeonized");
  if (checkBox.checked == true) {
    dungeonized = true;
    updateNumbers();
  } else {
    dungeonized = false;
    updateNumbers();
  }
}
function soulbound(input) {
  var checkBox = document.getElementById("soulbound");
  if (checkBox.checked == true) {
    document.getElementById("#soulbound").innerHTML = "* Co-op Soulbound *";
  } else {
    document.getElementById("#soulbound").innerHTML = "";
  }
}

function updateNumbers() {
  if (currentGearScore != 0) {
    gearScore(currentGearScore);
  }
  if (currentDamage != 0) {
    Damage(currentDamage);
  }
  if (currentStrength != 0) {
    strength(currentStrength);
  }
  if (currentcritDamage != 0) {
    critDamage(currentcritDamage);
  }
  if (currentIntelligence != 0) {
    Intelligence(currentIntelligence);
  }
  if (currentDefence != 0) {
    defense(currentDefence);
  }
  if (currentabilityDamage != 0) {
    abilitydamage(currentabilityDamage);
  }
}
var dungeonized = false;
function dungeonCalc(input, type) {
  if (dungeonized == true) {
    var num = parseInt(input);
    if (type == "strength") {
      var checkBox = document.getElementById("aow");
      if (checkBox.checked == true) {
        num = num + 5;
      } else var num = input;
    }
    var dungeonStatCalc = (465 * num) / 100;
    dungeonStatCalc * 5.5;
    return dungeonStatCalc;
  }
}
function switchType(evt, type) {
  // Declare all variables
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  if (evt.currentTarget.classList.contains("active")) {
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  } else {
    // Get all elements with class="tabcontent" and hide them
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
}

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

function image(input) {
  document.getElementById("png").src = input;
}

function imageSize(input) {
  if (input > 100) {
    input = 100;
  }
  if (input < 20) {
    input = 20;
  }
  document.getElementById("png").style.maxHeight = input + "px";
  document.getElementById("png").style.maxWidth = input + "px";
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
