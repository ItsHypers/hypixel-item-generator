var addedStats = {};
var numofStats = 0;
function AddStat() {
  var statAmount = document.getElementById("StatAmount").value;
  if (statAmount == "") {
    alert("Please fill in all inputs!");
  } else {
    addedStats[numofStats] = { amount: statAmount };
    console.log(addedStats);
    numofStats += 1;
    updateStats();
    document.getElementById("statForm").reset();
  }
}

function downloadPlayerCard() {
  domtoimage
    .toBlob(document.getElementById("Dialogue"))
    .then((blob) => window.saveAs(blob, "dialoguePNG"));
}

function deleteStat() {
  var statName = event.target.parentElement.classList[0];
  console.log(statName);
  delete addedStats[statName];
  updateStats();
}
function presetSelector(preset) {
  currentString = document.getElementById("StatAmount").value;
  document.getElementById("StatAmount").value = currentString + preset;
}
function background(input) {
  var checkBox = document.getElementById("background");
  if (checkBox.checked == true) {
    document.getElementById("Dialogue").classList.add("blackBG");
  } else {
    document.getElementById("Dialogue").classList.remove("blackBG");
  }
}

function updateStats() {
  const Dialogue = document.querySelector(".Dialogue");
  const statClass = document.querySelector(".addedStats");
  Dialogue.innerHTML = "";
  statClass.innerHTML = "";
  for (let [id, info] of Object.entries(addedStats)) {
    const div = document.createElement("div");
    const Amountlabel = document.createElement("label");
    div.classList.add(id);
    div.style.display = "block";
    colour(info.amount, Amountlabel);
    Amountlabel.classList.add("item-text");
    div.appendChild(Amountlabel);
    Dialogue.appendChild(div);

    var addedStat = document.createElement("div");
    addedStat.classList.add(id);
    addedStat.classList.add("stat");
    addedStat.insertAdjacentHTML(
      "beforeend",
      "<p>" +
        info.amount +
        `</p> <button class="` +
        ` deleteStat reset-button" onclick="deleteStat()">✖</button>`
    );
    statClass.appendChild(addedStat);
    obsfCheck();
  }
}

function colourCodes() {
  var x = document.getElementById("colours");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function copyPaste() {
  var x = document.getElementById("symbols");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const colors = {
  0: "black", // black
  1: "dark_blue", // dark blue
  2: "dark_green", // dark green
  3: "dark_aqua", // dark aqua
  4: "dark_red", // dark red
  5: "dark_purple", // dark purple
  6: "gold", // gold
  7: "gray", // gray
  8: "dark_gray", // dark gray
  9: "blue", // blue

  a: "green", // green
  b: "aqua", // aqua
  c: "red", // red
  d: "light_purple", // light purple
  e: "yellow", // yellow
  f: "white", // white
};

$.fn.selectRange = function (start, end) {
  if (!end) end = start;
  return this.each(function () {
    if (this.setSelectionRange) {
      this.focus();
      this.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
      range.collapse(true);
      range.moveEnd("character", end);
      range.moveStart("character", start);
      range.select();
    }
  });
};

$(".bgs div").click(function (elem) {
  $(".output").css("background", $(elem.target).css("background"));
  $(".bgs div").css("border", 0);
  $(elem.target).css("border", "3px #aaa solid");
});

var motd_raw = $(".editor textarea");
$(".tools button").click(function (e) {
  var caretPos = motd_raw[0].selectionStart;
  var textAreaTxt = motd_raw.val();
  var txtToAdd = "&" + $(this).attr("data-color");
  console.log(caretPos);
  motd_raw
    .val(
      textAreaTxt.substring(0, caretPos) +
        txtToAdd +
        textAreaTxt.substring(caretPos)
    )
    .focus();
  motd_raw.selectRange(caretPos + 2);
  colour(motd_raw.val());
});

function colour(text, x) {
  left = htmlEncode("<");
  right = htmlEncode(">");
  text = text.replace(/</gi, left);
  text = text.replace(/>/gi, right);
  text = text.replace(/\n/gi, "&r<br />");
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

setInterval(function () {
  $(".obfuscated").text(randomizer($(".obfuscated").text()));
}, 100);

function htmlEncode(value) {
  return $("<div/>").text(value).html();
}
obfuscated = false;
function obsfCheck() {
  obsElements = document.querySelectorAll(".obfuscated");
  if (obsElements.length > 0) {
    obfuscated = true;
    updateRandomizer();
  }
}

function updateRandomizer() {
  console.log("ran");
  for (let i = 0; i < obsElements.length; i++) {
    console.log(obsElements[i].innerHTML);
    obsElements[i].innerHTML = randomizer(obsElements[i].innerHTML.length);
  }

  setTimeout(updateRandomizer, 100);
}
function randomizer(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
