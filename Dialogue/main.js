var addedStats = {};
var numofStats = 0;
function AddStat() {
  var statName = document.getElementById("StatName").value.replace(" ", "_");
  var statAmount = document.getElementById("StatAmount").value.toLowerCase();
  if (statName == "" || statAmount == "") {
    alert("Please fill in all inputs!");
  } else {
    addedStats[numofStats] = { name: statName, amount: statAmount };
    console.log(addedStats);
    numofStats += 1;
    updateStats();
    document.getElementById("statForm").reset();
  }
}

function downloadPlayerCard() {
  domtoimage
    .toBlob(document.getElementById("Dialogue"))
    .then((blob) => window.saveAs(blob, "test"));
}

function deleteStat() {
  var statName = event.target.parentElement.classList[0];
  console.log(statName);
  delete addedStats[statName];
  updateStats();
}

function updateStats() {
  console.log("ran");
  const Dialogue = document.querySelector(".Dialogue");
  const statClass = document.querySelector(".addedStats");
  Dialogue.innerHTML = "";
  statClass.innerHTML = "";
  for (let [id, info] of Object.entries(addedStats)) {
    const div = document.createElement("div");
    const Namelabel = document.createElement("label");
    const Amountlabel = document.createElement("label");
    div.classList.add(id);
    div.style.display = "block";
    addColors(info.name.replace("_", " ") + ": ", Namelabel);
    Namelabel.classList.add("item-text");
    addColors(info.amount, Amountlabel);
    Amountlabel.classList.add("item-text");
    div.appendChild(Namelabel);
    div.appendChild(Amountlabel);
    Dialogue.appendChild(div);

    var addedStat = document.createElement("div");
    addedStat.classList.add(id);
    addedStat.classList.add("stat");
    addedStat.insertAdjacentHTML(
      "beforeend",
      "<p>" +
        info.name +
        "</p> <p>" +
        info.amount +
        `</p> <button class="` +
        info.name.replace(" ", "") +
        ` deleteStat reset-button" onclick="deleteStat()">✖</button>`
    );
    statClass.appendChild(addedStat);
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
      textSpan.classList.add(colors[currentNumber]);
      textSpan.classList.add("shadow");
      textSpan.innerHTML = " " + string;
      x.appendChild(textSpan);
    } else if (element[0] == "/" && element[1] == "n") {
      var textSpan = document.createElement("label");
      var space = document.createElement("p");
      var string = element;
      string = element.substring(2);
      textSpan.innerHTML = " " + string;
      x.appendChild(space);
      x.appendChild(textSpan);
    } else {
      var textSpan = document.createElement("label");
      var string = element;
      textSpan.classList.add(colors[currentNumber]);
      textSpan.classList.add("shadow");
      textSpan.innerHTML = " " + string;
      x.appendChild(textSpan);
    }
  });
}
