var currentStrength = 0;
var currentGearScore = 0;
var currentDamage = 0;
var currentcritDamage = 0;
var currentCritChance = 0;
var currentAttackSpeed = 0;
var currentIntelligence = 0;
var currentDefence = 0;
var currentabilityDamage = 0;
var currentSeaCreature = 0;
var currentHealth = 0;
var currentTrueDefence = 0;
var currentMagicFind = 0;
var currentPetLuck = 0;
var currentSpeed = 0;
var numofAbilities = 0;
var killCount = 0;
var currentItem = "SWORD";
var currentReforge = "";
var currentitemName = "";
var currentCommand = "";
var currentminecraftID = "minecraft:diamond_sword";
var abilities = {};
var itemsChanged = {};
var AOW = false;
var descriptionAdded = false;
var loreAdded = false;
var descriptionArray = [];
var loreArray = [];
var maxDescription = 50; // maximum number of characters to extract
const Rarities = [
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "mythic",
  "divine",
  "special",
  "veryspecial",
];
const RarityHexs = {
  common: "#d3d3d3",
  uncommon: "#4fe34d",
  rare: "#5453fb",
  epic: "#970295",
  legendary: "#f1a001",
  mythic: "#f551f4",
  divine: "#53f7f7",
  special: "#ff5555",
  veryspecial: "#fe5454",
};
const minecraftRaritys = {
  common: "white",
  uncommon: "green",
  rare: "blue",
  epic: "purple",
  legendary: "gold",
  mythic: "light_purple",
  divine: "aqua",
  special: "red",
  veryspecial: "red",
};
var currentRarity = Rarities[0];
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
  var abilityNum = "ability" + num;
  var name = document.getElementById("#abilityName" + num);
  var className = document.querySelector(".abilityName" + num);
  name.textContent = input;
  className.style.display = "block";
  itemsChanged[abilityNum] = true;
  numofAbilities += 1;
  abilities[num + "name"] = input;
}
function abilityKeybind(input, num) {
  var ability = "ability" + num;
  var name = document.getElementById("#abilityKeybind" + num);
  name.textContent = input;
  itemsChanged[ability] = true;
  abilities[num + "keybind"] = input;
}
function abilityDescription(input, num) {
  var ability = "ability" + num;
  var name = document.getElementById("#abilityDescription" + num);
  var className = document.querySelector(".abilityDescription" + num);
  addColors(input, name);
  className.style.display = "block";
  itemsChanged[ability] = true;
  abilities[num + "description"] = input;
}
function abilityMana(input, num) {
  var ability = "ability" + num;
  var name = document.getElementById("#abilityMana" + num);
  var className = document.querySelector(".abilityMana" + num);
  name.textContent = input;
  className.style.display = "block";
  itemsChanged[ability] = true;
  abilities[num + "mana"] = input;
}
function abilityCooldown(input, num) {
  var ability = "ability" + num;
  var name = document.getElementById("#abilityCooldown" + num);
  var className = document.querySelector(".abilityCooldown" + num);
  name.textContent = input;
  className.style.display = "block";
  itemsChanged[ability] = true;
  ability["cooldown"] = input;
  abilities[num + "cooldown"] = input;
}
function itemName(input) {
  document.querySelector(".item-name").textContent = input;
  currentitemName = input;
}
function reforge(input) {
  document.querySelector(".reforge").textContent = input;
  currentReforge = input;
}
function gearScore(input) {
  document.querySelector(".item-gearscore").textContent = input;
  document.querySelector(".gearscore").style.display = "block";
  document.getElementById("#gearscore").textContent = dungeonCalc(input);
  currentGearScore = input;
  itemsChanged["gearscore"] = true;
}
function strength(input) {
  document.getElementById("#strength").textContent = "+" + input;
  document.querySelector(".strength").style.display = "block";
  document.getElementById("#dungeon_strength").textContent = dungeonCalc(
    input,
    "strength"
  );
  currentStrength = input;
  itemsChanged["strength"] = true;
}
function Damage(input) {
  document.getElementById("#damage").textContent = "+" + input;
  document.querySelector(".damage").style.display = "block";
  document.getElementById("#dungeon_damage").textContent = dungeonCalc(
    input,
    "damage"
  );
  currentDamage = input;
  itemsChanged["damage"] = true;
}
function abilitydamage(input) {
  document.getElementById("#abilitydamage").textContent = "+" + input;
  document.querySelector(".abilitydamage").style.display = "block";
  document.getElementById("#dungeon_abilitydamage").textContent =
    dungeonCalc(input);
  currentabilityDamage = input;
  itemsChanged["abilitydamage"] = true;
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
  itemsChanged["gemstone"] = true;
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
  itemsChanged["critdamage"] = true;
}

function attackSpeed(input) {
  document.getElementById("#attackSpeed").textContent = "+" + input + "%";
  document.querySelector(".attackSpeed").style.display = "block";
  currentAttackSpeed = input;
  itemsChanged["attackspeed"] = true;
}
function Intelligence(input) {
  document.getElementById("#intelligence").textContent = "+" + input;
  document.querySelector(".intelligence").style.display = "block";
  document.getElementById("#dungeon_intelligence").textContent =
    dungeonCalc(input);
  currentIntelligence = input;
  itemsChanged["intelligence"] = true;
}
function critChance(input) {
  document.getElementById("#critchance").textContent = "+" + input + "%";
  document.querySelector(".critchance").style.display = "block";
  currentCritChance = input;
  itemsChanged["critchance"] = true;
}
function ferocity(input) {
  document.getElementById("#ferocity").textContent = "+" + input;
  document.querySelector(".ferocity").style.display = "block";
  document.getElementById("#dungeon_ferocity").textContent = dungeonCalc(input);
  itemsChanged["ferocity"] = true;
}
function defence(input) {
  document.getElementById("#defence").textContent = "+" + input;
  document.querySelector(".defence").style.display = "block";
  document.getElementById("#dungeon_defence").textContent = dungeonCalc(input);
  currentDefence = input;
  itemsChanged["defence"] = true;
}
function itemType(input, dungeon) {
  input = input.toUpperCase();
  currentItem = input;
  if (dungeon) {
    document.getElementById("#item-type").textContent =
      currentRarity.toUpperCase() + " DUNGEON" + " " + input;
  } else {
    document.getElementById("#item-type").textContent =
      currentRarity.toUpperCase() + " " + input;
  }
}
function magicfind(input) {
  document.getElementById("#magicfind").textContent = "+" + input;
  document.querySelector(".magicfind").style.display = "block";
  currentMagicFind = input;
  itemsChanged["magicfind"] = true;
}
function speed(input) {
  document.getElementById("#speed").textContent = "+" + input;
  document.querySelector(".speed").style.display = "block";
  currentSpeed = input;
  itemsChanged["speed"] = true;
}
const colors = {
  0: "#000000", // black
  1: "#0000AA", // dark blue
  2: "#00AA00", // dark green
  3: "#00AAAA", // dark aqua
  4: "#AA0000", // dark red
  5: "#AA00AA", // dark purple
  6: "#FFAA00", // gold
  7: "#AAAAAA", // gray
  8: "#555555", // dark gray
  9: "#5555FF", // blue

  a: "#55FF55", // green
  b: "#55FFFF", // aqua
  c: "#FF5555", // red
  d: "#FF55FF", // light purple
  e: "#FFFF55", // yellow
  f: "#FFFFFF", // white
};

function descriptionClass(input, type) {
  document.querySelector(".mainLore").style.display = "block";
  if (type == "lore") {
    var x = document.getElementById("#mainLore");
    loreString = input;
    loreAdded = true;
    addColors(input, x, "lore");
  }
  if (type == "description") {
    var x = document.getElementById("#mainDescription");
    descriptionAdded = true;
    descriptionString = input;
    addColors(input, x, "description");
  }
}
function addColors(input, x, type) {
  var currentNumber = 7;
  var array = input.split(" ");
  if (type == "description") {
    descriptionArray = array;
  }
  if (type == "lore") {
    loreArray = array;
  }
  x.innerHTML = "";
  array.forEach((element) => {
    if (element[0] == "&") {
      var textSpan = document.createElement("label");
      var string = element;
      for (var j in colors) {
        if (j.includes(element[1])) {
          currentNumber = element[1];
          string = element.substring(2);
        }
      }
      textSpan.style.color = colors[currentNumber];
      textSpan.innerHTML = " " + string;
      x.appendChild(textSpan);
    } else if (element[0] == "/" && element[1] == "n") {
      var textSpan = document.createElement("label");
      var space = document.createElement("label");
      var string = element;
      string = element.substring(2);
      textSpan.innerHTML = " " + string;
      x.appendChild(space);
      x.appendChild(textSpan);
    } else {
      var textSpan = document.createElement("label");
      var string = element;
      textSpan.style.color = colors[currentNumber];
      textSpan.innerHTML = " " + string;
      x.appendChild(textSpan);
    }
  });
}
hover = document.querySelector(".colorhover");
hover.addEventListener("mouseover", (event) => {
  document.querySelector(".colorRow").style.display = "block";
});
hover.addEventListener("mouseout", (event) => {
  document.querySelector(".colorRow").style.display = "none";
});

function artofwar(input) {
  var checkBox = document.getElementById("aow");
  if (checkBox.checked == true) {
    document.getElementById("#aow").innerHTML = "[+5]";
    AOW = true;
    strength(currentStrength);
  } else {
    document.getElementById("#aow").innerHTML = "";
    AOW = false;
    strength(currentStrength);
  }
}

function potatobooks(input) {
  var checkBox = document.getElementById("fumings");
  if (checkBox.checked == true) {
    document.getElementById("#damagepotatobook").innerHTML = "(+30)";
    document.getElementById("#strengthpotatobook").innerHTML = "(+30)";
    document.getElementById("#damagepotatobook").style = "block";
    document.getElementById("#strengthpotatobook").style = "block";
    itemsChanged["fumings"] = true;
  } else {
    document.getElementById("#damagepotatobook").innerHTML = "";
    document.getElementById("#strengthpotatobook").innerHTML = "";
    document.getElementById("#damagepotatobook").style = "none";
    document.getElementById("#strengthpotatobook").style = "none";
    itemsChanged["fumings"] = false;
  }
}

function dungeon(input) {
  var checkBox = document.getElementById("dungeonized");
  if (checkBox.checked == true) {
    dungeonized = true;
    itemType(currentItem, true);
    updateNumbers();
  } else {
    itemType(currentItem, false);
    dungeonized = false;
    updateNumbers();
  }
}
function soulbound(input) {
  var checkBox = document.getElementById("soulbound");
  if (checkBox.checked == true) {
    document.getElementById("#soulbound").innerHTML = "* Co-op Soulbound *";
    itemsChanged["soulbound"] = true;
  } else {
    document.getElementById("#soulbound").innerHTML = "";
    itemsChanged["soulbound"] = false;
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
    defence(currentDefence);
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
function raritySelect(rarity) {
  document.querySelector(".item-name").style.color = hexToRgbA(
    RarityHexs[rarity]
  );
  document.querySelector(".reforge").style.color = hexToRgbA(
    RarityHexs[rarity]
  );
  document.getElementById("#item-type").style.color = hexToRgbA(
    RarityHexs[rarity]
  );
  currentRarity = rarity;
  console.log(currentRarity);
  itemType(currentItem, dungeonized);
}

function recomRarity(input) {
  var checkBox = document.getElementById("recom");
  var currentIndex = Rarities.indexOf(currentRarity);
  if (checkBox.checked == true) {
    raritySelect(Rarities[currentIndex + 1]);
    document.getElementById("#recombed").style.display = "block";
    itemsChanged["recomb"] = true;
  } else {
    raritySelect(Rarities[currentIndex - 1]);
    document.getElementById("#recombed").style.display = "none";
    itemsChanged["recomb"] = false;
  }
}

function killCounter(input) {
  document.querySelector(".killcount").style.display = "block";
  document.getElementById("#killcount").textContent = input;
  itemsChanged["killcount"] = true;
  killCount = input;
}

function image(input) {
  document.getElementById("png").src = input;
  document.getElementById("png").style.display = "inline-block";
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
updateButton = document.querySelector(".update");
updateButton.addEventListener("click", function () {
  minecraftCommand();
});

function minecraftID(input) {
  currentminecraftID = input;
}
function minecraftCommand() {
  currentCommand = `/give @p `;
  currentCommand += currentminecraftID;
  currentCommand += `{AttributeModifiers: [{}],`;
  currentCommand += `display:{Name:\'[{\"text\":\"`;
  if (currentReforge != "") {
    currentCommand += currentReforge + " ";
  }
  currentCommand +=
    currentitemName +
    `\",\"color\":\"` +
    minecraftRaritys[currentRarity] +
    `\",\"italic\":false,\"bold\":true}]\',Lore:[\'`;
  if (itemsChanged["damage"]) {
    currentCommand +=
      `[{\"text\":\"Damage: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentDamage +
      `\",\"color\":\"red\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["strength"]) {
    if (AOW) {
      currentCommand +=
        `[{\"text\":\"Strength: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
        currentStrength +
        `\",\"color\":\"red\",\"italic\":false},{\"text\":\" [+5]` +
        `\",\"color\":\"gold\",\"italic\":false}]\',\'`;
    } else {
      currentCommand +=
        `[{\"text\":\"Strength: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
        currentStrength +
        `\",\"color\":\"red\",\"italic\":false}]\',\'`;
    }
  }
  if (itemsChanged["critchance"]) {
    currentCommand +=
      `[{\"text\":\"Crit Chance: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentCritChance +
      `\",\"color\":\"red\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["critdamage"]) {
    currentCommand +=
      `[{\"text\":\"Crit Damage: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentcritDamage +
      `\",\"color\":\"red\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["attackspeed"]) {
    currentCommand +=
      `[{\"text\":\"Attack Speed: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentAttackSpeed +
      `\",\"color\":\"red\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["seacreature"]) {
    currentCommand +=
      `[{\"text\":\"Sea Creature Chance: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentSeaCreature +
      `\",\"color\":\"red\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["health"]) {
    currentCommand +=
      `[{\"text\":\"Health: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentHealth +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["defence"]) {
    currentCommand +=
      `[{\"text\":\"Defence: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentDefence +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["speed"]) {
    currentCommand +=
      `[{\"text\":\"Speed: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentSpeed +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["intelligence"]) {
    currentCommand +=
      `[{\"text\":\"Intelligence: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentIntelligence +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["truedefence"]) {
    currentCommand +=
      `[{\"text\":\"True Defence: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentTrueDefence +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["magicfind"]) {
    currentCommand +=
      `[{\"text\":\"Magic Find: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentMagicFind +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }
  if (itemsChanged["petluck"]) {
    currentCommand +=
      `[{\"text\":\"Pet Luck: \",\"color\":\"gray\",\"italic\":false},{\"text\":\"+` +
      currentPetLuck +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;
  }

  if (descriptionArray.length != 0) {
    currentCommand += `[{\"text\":\"\"}]\',\'`;
    currentCommand += `[{\"text\":\"\"}`;
  }
  descriptionArray.forEach((element) => {
    console.log(element);
    if (element[0] == "/" && element[1] == "n") {
      var string = element.substring(2);
      currentCommand += `]\',\'`;
      currentCommand +=
        `[{\"text\":\"` + string + ` \",\"color\":\"gray\",\"italic\":false}`;
    } else {
      currentCommand +=
        `,{\"text\":\"` + element + ` \",\"color\":\"gray\",\"italic\":false}`;
    }
  });
  if (descriptionArray.length != 0) {
    currentCommand += `]\',\'`;
    currentCommand += `[{\"text\":\"\"}]\',\'`;
  }

  for (let i = 1; i <= numofAbilities; i++) {
    descArray = abilities[i + "description"].split(" ");
    currentCommand +=
      `[{\"text\":\"Ability: \",\"color\":\"gold\",\"italic\":false},{\"text\":\"` +
      abilities[i + "name"] +
      `\",\"color\":\"gold\",\"italic\":false},{\"text\":\" ` +
      abilities[i + "keybind"] +
      `\",\"color\":\"yellow\",\"italic\":false,\"bold\":true}]\',\'`;
    if (descArray.length != 0) {
      currentCommand += `[{\"text\":\"\"}`;
    }
    descArray.forEach((element) => {
      console.log(element);
      if (element[0] == "/" && element[1] == "n") {
        var string = element.substring(2);
        currentCommand += `]\',\'`;
        currentCommand +=
          `[{\"text\":\"` + string + ` \",\"color\":\"gray\",\"italic\":false}`;
      } else {
        currentCommand +=
          `,{\"text\":\"` +
          element +
          ` \",\"color\":\"gray\",\"italic\":false}`;
      }
    });
    if (descArray.length != 0) {
      currentCommand += `]\',\'`;
      currentCommand += `[{\"text\":\"\"}]\',\'`;
    }
    currentCommand +=
      `[{\"text\":\"Mana cost: \",\"color\":\"dark_gray\",\"italic\":false},{\"text\":\"` +
      abilities[i + "mana"] +
      `\",\"color\":\"dark_aqua\",\"italic\":false}]\',\'[{\"text\":\"Cooldown: \",\"color\":\"dark_gray\",\"italic\":false},{\"text\":\"` +
      abilities[i + "cooldown"] +
      `\",\"color\":\"green\",\"italic\":false}]\',\'`;

    currentCommand += `[{\"text\":\"\"}]\',\'`;
  }

  if (loreArray.length != 0) {
    currentCommand += `[{\"text\":\"\"}`;
  }
  loreArray.forEach((element) => {
    console.log(element);
    if (element[0] == "/" && element[1] == "n") {
      var string = element.substring(2);
      currentCommand += `]\',\'`;
      currentCommand +=
        `[{\"text\":\"` + string + ` \",\"color\":\"gray\",\"italic\":false}`;
    } else {
      currentCommand +=
        `,{\"text\":\"` + element + ` \",\"color\":\"gray\",\"italic\":false}`;
    }
  });
  if (loreArray.length != 0) {
    currentCommand += `]\',\'`;
    currentCommand += `[{\"text\":\"\"}]\',\'`;
  }

  if (itemsChanged["killcount"]) {
    currentCommand +=
      `[{\"text\":\"Kills:\",\"color\":\"white\",\"italic\":false,\"bold\":false},{\"text\":\" ` +
      killCount +
      `\",\"color\":\"gold\",\"italic\":false,\"bold\":false}]\',\'`;
  }
  //\'[{\"text\":\"\u2620\",\"color\":\"red\",\"italic\":false},{\"text\":\" Requires Spider LVL 1\",\"color\":\"dark_purple\",\"italic\":false}]\',\'`;
  currentCommand += `[{\"text\":\"\"}]\',`;
  if (itemsChanged["soulbound"]) {
    currentCommand += `'[{\"text\":\"*Co-op Soulbound*\",\"color\":\"gray\",\"italic\":false}]\',`;
  }
  currentCommand += `'[{\"text\":\"This item can be reforged!\",\"color\":\"dark_gray\",\"italic\":false}]\',`;

  if (itemsChanged["recomb"]) {
    currentCommand += `'[{\"text\":\"`;
    currentCommand +=
      `M\",\"color\":\"` +
      minecraftRaritys[currentRarity] +
      `\",\"italic\":false,\"obfuscated\":true,\"bold\":true},`;
  }
  if (itemsChanged["recomb"]) {
    currentCommand += `{\"text\":\"`;
  } else {
    currentCommand += `'[{\"text\":\"`;
  }
  currentCommand += currentRarity.toUpperCase() + ` `;
  console.log(currentRarity);
  if (dungeonized) {
    currentCommand += "DUNGEON ";
  }
  currentCommand +=
    currentItem +
    `\",\"color\":\"` +
    minecraftRaritys[currentRarity] +
    `\",\"italic\":false,\"bold\":true,\"obfuscated\":false}`;
  if (itemsChanged["recomb"]) {
    currentCommand += `,{\"text\":\"`;
    currentCommand +=
      `M\",\"color\":\"` +
      minecraftRaritys[currentRarity] +
      `\",\"italic\":false,\"obfuscated\":true,\"bold\":true}]',`;
    currentCommand += `'[{\"text\":\"(Recombobulated)\",\"color\":\"gray\",\"italic\":false}]`;
  } else {
    currentCommand += "]";
  }
  currentCommand += `\']}}`;
  /*
  currentCommand +=
    ` ` +
    currentItem +
    `\",\"color\":\"` +
    minecraftRaritys[currentRarity] +
    `\",\"italic\":false,\"bold\":true}]\'`;
  currentCommand += `]}}`;*/
  document.getElementById("#minecraftCommand").innerHTML = currentCommand;
}
