var addedDrops = {};
var dropsAmount = 0;
function mobName(input) {
  const mobNameList = document.querySelectorAll(".mobName");
  for (let i = 0; i < mobNameList.length; i++) {
    mobNameList[i].textContent = input;
  }
}
function mobImage(input) {
  document.querySelector(".mobImageHolder").style.display = "inline_block";
  document.querySelector(".insertpng").src = input;
}

function mobInformation(input) {
  colour(input, document.querySelector(".mobInformation"));
}

function mobLocation(input) {
  colour(input, document.querySelector(".mobLocation"));
}
function mobBehaviour(input) {
  colour(input, document.querySelector(".mobBehaviour"));
}

function mobDamage(input) {
  document.querySelector(".mobDamage").innerHTML = input;
}
function mobHealth(input) {
  document.querySelector(".mobHealth").innerHTML = input;
}
function combatEXP(input) {
  const combatEXP = document.querySelectorAll(".combatEXP");
  for (let i = 0; i < combatEXP.length; i++) {
    combatEXP[i].textContent = input;
  }
}
function coins(input) {
  const coins = document.querySelectorAll(".coins");
  for (let i = 0; i < coins.length; i++) {
    coins[i].textContent = input;
  }
}
function exporb(input) {
  const exporb = document.querySelectorAll(".exporb");
  for (let i = 0; i < exporb.length; i++) {
    exporb[i].textContent = input;
  }
}

function bracket(input) {
  document.querySelector(".bestiaryBracket").style.display = "";
  document.querySelector(".bracket").innerHTML = input;
}
function tier(input) {
  document.querySelector(".bestiaryTier").style.display = "";
  document.querySelector(".tier").innerHTML = input;
}

function entitytype(input) {
  document.querySelector(".entitytype").innerHTML = input;
}
function level(input) {
  document.querySelector(".mobLevel").innerHTML = input;
}
function spawnlocation(input) {
  document.querySelector(".spawnlocation").innerHTML = input;
}

function Necromancer(input) {
  var checkBox = document.getElementById("necro");
  if (checkBox.checked == true) {
    document.querySelector(".necrotick").innerHTML = "Yes";
    document.querySelector(".necroImg").src =
      "/hypixel-item-generator/Hypixel Item Generator/images/tick.png";
  } else {
    document.querySelector(".necrotick").innerHTML = "No";
    document.querySelector(".necroImg").src =
      "/hypixel-item-generator/Hypixel Item Generator/images/X.png";
  }
}

function corrupt(input) {
  var checkBox = document.getElementById("corrupt");
  if (checkBox.checked == true) {
    document.querySelector(".corrupttick").innerHTML = "Yes";
    document.querySelector(".corruptImg").src =
      "/hypixel-item-generator/Hypixel Item Generator/images/tick.png";
  } else {
    document.querySelector(".corrupttick").innerHTML = "No";
    document.querySelector(".corruptImg").src =
      "/hypixel-item-generator/Hypixel Item Generator/images/X.png";
  }
}

function colour(text, x) {
  if (typeof text !== "string") {
    text = String(text); // convert non-string input to string
  }

  const left = htmlEncode("<");
  const right = htmlEncode(">");
  text = text.replace(/</gi, left);
  text = text.replace(/>/gi, right);
  text = text.replace(/&z/gi, "&r<br />");

  // colours
  text = text.replace(/&0/gi, '</span>&r<span class="c-1">');
  text = text.replace(/&1/gi, '</span>&r<span class="c-2">');
  text = text.replace(/&2/gi, '</span>&r<span class="c-3">');
  text = text.replace(/&3/gi, '</span>&r<span class="c-4">');
  text = text.replace(/&4/gi, '</span>&r<span class="c-5">');
  text = text.replace(/&5/gi, '</span>&r<span class="c-6">');
  text = text.replace(/&6/gi, '</span>&r<span class="c-7">');
  text = text.replace(/&7/gi, '</span>&r<span class="c-8">');
  text = text.replace(/&8/gi, '</span>&r<span class="c-9">');
  text = text.replace(/&9/gi, '</span>&r<span class="c-10">');
  text = text.replace(/&a/gi, '</span>&r<span class="c-11">');
  text = text.replace(/&b/gi, '</span>&r<span class="c-12">');
  text = text.replace(/&c/gi, '</span>&r<span class="c-13">');
  text = text.replace(/&d/gi, '</span>&r<span class="c-14">');
  text = text.replace(/&e/gi, '</span>&r<span class="c-15">');
  text = text.replace(/&f/gi, '</span>&r<span class="c-16">');

  // formatting
  text = text.replace(/&l/gi, "<span style='font-weight:900;'>");
  text = text.replace(/&o/gi, "<span style='font-style:italic;'>");
  text = text.replace(/&m/gi, "<span style='text-decoration:line-through'>");
  text = text.replace(/&n/gi, "<span style='text-decoration:underline'>");
  text = text.replace(/&k/gi, "<span class='obfuscated'>");
  text = text.replace(
    /&r/gi,
    "</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>"
  );

  x.innerHTML = text;
}


function addMobDrop() {
  var dropName = document.getElementById("dropName").value.replace(" ", "_");
  var dropRarity = document.getElementById("dropRarity").value.toLowerCase();
  var dropRarityColour = document
    .getElementById("dropRarityColour")
    .value.toLowerCase();
  var dropAmount = document.getElementById("dropAmount").value.toLowerCase();
  var dropChance = document.getElementById("dropChance").value.toLowerCase();
  var dropImg = document.getElementById("dropImage").value;
  if (
    dropName == "" ||
    dropRarity == "" ||
    dropAmount == "" ||
    dropChance == "" ||
    dropRarityColour == ""
  ) {
    alert("Please fill in all inputs!");
  } else {
    addedDrops[dropsAmount] = {
      name: dropName,
      rarity: dropRarity,
      rarityColour: dropRarityColour,
      amount: dropAmount,
      chance: dropChance,
      image: dropImg,
    };
    dropsAmount += 1;
    updateMobDrops();
    document.getElementById("lootdrops").reset();
  }
}

function deleteMobDrop() {
  var dropNumber = event.target.className.split(" ")[0];
  delete addedDrops[dropNumber];
  updateMobDrops();
}

function updateMobDrops() {
  const mobDrops = document.querySelector(".MobDrops");
  const dropClass = document.querySelector(".addedDrops");
  const initialDrops = document.querySelector(".initialMobDrops");
  initialDrops.innerHTML = "";
  dropClass.innerHTML = "";
  for (let i = 0; i < dropsAmount; i++) {
    const targetElement = document.getElementById(i.toString());
    if (targetElement) {
      targetElement.remove();
    }
  }
  for (let [number, info] of Object.entries(addedDrops)) {
    const targetElement = document.getElementById(number.toString());
    if (targetElement) {
      targetElement.remove();
    }

    colourtext = getColourClass(info.rarityColour);
    console.log(colourtext);

    if (info.image != "") {
      mobDrops.insertAdjacentHTML(
        "beforeend",
        `
      <tr style="text-align: center" class="secondary" id="` +
          number +
          `">
      <td style="width: 50%; text-align: center; color: #4482ff">` +
          `<img style="display:inline-block" width="15" src="` +
          info.image +
          `"> </img>` +
          info.name.replace(/_/g, " ") +
          `</td>
      <td class="` +
          colourtext +
          `" style="width: 25%; font-weight: bold">` +
          info.rarity[0].toUpperCase() +
          info.rarity.slice(1) +
          `</td>
      <td style="width: 25%">` +
          info.amount +
          `</td>
      <td class="c-11" style="width: 25%">` +
          info.chance +
          `</td>
    </tr>`
      );
      initialDrops.insertAdjacentHTML(
        "beforeend",
        `<img style="display:inline-block" width="15" src="` +
          info.image +
          `"> </img>` +
          info.amount +
          ` ` +
          info.name.replace(/_/g, " ") +
          `<br />`
      );
    } else {
      mobDrops.insertAdjacentHTML(
        "beforeend",
        `
      <tr style="text-align: center" class="secondary" id="` +
          number +
          `">
      <td style="width: 50%; text-align: center; color: #4482ff">` +
          info.name.replace(/_/g, " ") +
          `</td>
      <td class="c-7" style="width: 25%; font-weight: bold">` +
          info.rarity[0].toUpperCase() +
          info.rarity.slice(1) +
          `</td>
      <td style="width: 25%">` +
          info.amount +
          `</td>
      <td class="c-11" style="width: 25%">` +
          info.chance +
          `</td>
    </tr>`
      );
      initialDrops.insertAdjacentHTML(
        "beforeend",
        info.amount + ` ` + info.name.replace(/_/g, " ") + `<br />`
      );
    }
    var addedDrop = document.createElement("div");
    addedDrop.classList.add(number);
    addedDrop.classList.add("drops");
    addedDrop.insertAdjacentHTML(
      "beforeend",
      "<p>" +
        number +
        "</p> <p>" +
        info.name.substring(0, 10) +
        "</p> <p>" +
        info.rarity +
        "</p> <p>" +
        info.amount +
        "</p> <p>" +
        info.chance +
        "</p> <p>" +
        info.image.substring(0, 10) +
        `</p> <button class="` +
        number.replace(" ", "") +
        ` deleteStat reset-button" onclick="deleteMobDrop()">✖</button>`
    );
    dropClass.appendChild(addedDrop);
  }
}

function getColourClass(text) {
  text = text.replace(/&0/gi, "c-1");
  text = text.replace(/&1/gi, "c-2");
  text = text.replace(/&2/gi, "c-3");
  text = text.replace(/&3/gi, "c-4");
  text = text.replace(/&4/gi, "c-5");
  text = text.replace(/&5/gi, "c-6");
  text = text.replace(/&6/gi, "c-7");
  text = text.replace(/&7/gi, "c-8");
  text = text.replace(/&8/gi, "c-9");
  text = text.replace(/&9/gi, "c-10");
  text = text.replace(/&a/gi, "c-11");
  text = text.replace(/&b/gi, "c-12");
  text = text.replace(/&c/gi, "c-13");
  text = text.replace(/&d/gi, "c-14");
  text = text.replace(/&e/gi, "c-15");
  text = text.replace(/&f/gi, "c-16");

  return text;
}

//<tr style="text-align: center" class="secondary">
//<td style="width: 50%; text-align: center; color: #4482ff">LEGENDARY Scatha Pet</td>
//<td class="c-7" style="width: 25%; font-weight: bold">Legendary</td>
//<td style="width: 25%">1</td>
//<td class="c-11" style="width: 25%">0.04%</td>
//</tr>
