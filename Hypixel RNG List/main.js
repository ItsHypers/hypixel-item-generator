const img = document.querySelector("img");
img.setAttribute("draggable", false);
var minecraftAccount = {};
var checked = {};
var amountofItems = getNumberOfItems();
var rarestItemChance;

updateAll();

function updateAll() {
  checked = getChecked();
  checkedRefresh();
  checkRarestDrop();
  document.getElementById("rngs").textContent =
    Object.keys(checked).length + " / " + amountofItems + " dropped!";
  document.getElementById("percent").textContent =
    Math.round(percentage(Object.keys(checked).length, amountofItems) * 100) /
      100 +
    "%";
}
function itemObtainInfo(img) {
  img.nextElementSibling.nextElementSibling.textContent = img.dataset.obtain;
}
function hideitemObtainInfo(img) {
  img.nextElementSibling.nextElementSibling.textContent = "";
}

function highlight() {
  if (event.target.classList.contains("checked")) {
    event.target.classList.remove("checked");
    updatedStorage(false);
  } else {
    updatedStorage(true);
    event.target.classList.add("checked");
  }
}
function highlightOnLoad(name) {
  document.querySelector("." + name).classList.add("checked");
}

function getNumberOfItems() {
  var elements = document.getElementsByName("item");
  var items = 0;
  for (var i = 0; i < elements.length; i++) {
    items++;
  }
  return items;
}

function getAmountChecked() {
  return percentage(checked.length, amountofItems);
}
function unhighlight(name) {
  if (name != "")
    document.querySelector("." + name).classList.remove("checked");
}
function updatedStorage(added) {
  if (added) {
    checked[event.target.className] = {
      checked: true,
    };
    setStorage();
    updateAll();
  } else {
    delete checked[event.target.className];
    setStorage();
    updateAll();
  }
}

function checkRarestDrop() {
  checkedItems = document.getElementsByClassName("checked");
  var tempRarity;
  var tempName;
  for (var i = 0; i < checkedItems.length; i++) {
    if (
      tempRarity > checkedItems[i].dataset.rarity ||
      tempRarity == undefined
    ) {
      console.log(checkedItems[i].dataset.dye);
      if (checkedItems[i].dataset.dye != "true") {
        {
          tempRarity = checkedItems[i].dataset.rarity;
          tempName = checkedItems[i].nextElementSibling.textContent;
        }
      }
    }
  }
  if (tempName != undefined) {
    tempName = tempName.split("(");
    document.getElementById("rarestDrop").textContent = tempName[0];
  }
  if (tempRarity != undefined)
    document.getElementById("rarestDropChance").textContent = tempRarity + "%";
}
function getSaveBase64() {
  document.getElementById("saveTextArea").textContent = btoa(
    JSON.stringify(checked)
  );
}
function loadSave() {
  var input = document.getElementById("saveInput").value;
  checked = JSON.parse(atob(input));
}

function setStorage() {
  let checked_serialized = JSON.stringify(checked);
  localStorage.setItem("checked", checked_serialized);
  getSaveBase64();
}

function getChecked() {
  return JSON.parse(localStorage.getItem("checked"));
}

function checkedRefresh() {
  checked = getChecked();
  if (checked != null) {
    for (let [name, info] of Object.entries(checked)) {
      highlightOnLoad(name);
    }
  } else {
    checked = {};
  }
}

function resetStorage() {
  for (let [name, info] of Object.entries(checked)) {
    unhighlight(name);
  }
  localStorage.clear();
  document.getElementById("saveTextArea").textContent = "";
  document.getElementById("saveInput").value = "";
}

var acc = document.getElementsByClassName("faqs-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

function setCard() {
  document.getElementById("app_widget_profile_card_img").src =
    "https://mc-heads.net/avatar/" + document.getElementById("nameinput").value;
  document.getElementById("username").textContent =
    document.getElementById("nameinput").value;
}

function downloadPlayerCard() {
  domtoimage
    .toBlob(document.getElementById("fullcard"))
    .then((blob) =>
      window.saveAs(blob, document.getElementById("nameinput").value)
    );
}
