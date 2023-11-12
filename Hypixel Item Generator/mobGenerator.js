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
  left = htmlEncode("<");
  right = htmlEncode(">");
  text = text.replace(/</gi, left);
  text = text.replace(/>/gi, right);
  text = text.replace(/&z/gi, "&r<br />");
  //colours
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
  //bold
  text = text.replace(/&l/gi, "<span style='font-weight:900;'>");
  //italic
  text = text.replace(/&o/gi, "<span style='font-style:italic;'>");
  //strikethrough
  text = text.replace(/&m/gi, "<span style='text-decoration:line-through'>");
  //underlined
  text = text.replace(/&n/gi, "<span style='text-decoration:underline'>");
  //obfuscated
  text = text.replace(/&k/gi, "<span class='obfuscated'>");
  //reset
  text = text.replace(
    /&r/gi,
    "</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>"
  );

  x.innerHTML = text;
}
