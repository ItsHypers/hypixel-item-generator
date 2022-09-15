var currentStrength = 0;

function copyPaste() {
  var x = document.getElementById("symbols");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
  var dungeonStatCalc = (465 * num) / 100;
  dungeonStatCalc * 5.5;
  return dungeonStatCalc;
}
