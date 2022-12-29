const img = document.querySelector("img");
img.setAttribute("draggable", false);

var checked = {};

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
  } else {
    delete checked[event.target.className];
    setStorage();
  }
}

function getSaveBase64() {
  document.getElementById("saveTextArea").textContent = btoa(
    JSON.stringify(checked)
  );
}
function loadSave() {
  var input = document.getElementById("saveInput").value;
  checked = JSON.parse(atob(input));
  console.log(checked);
  setStorage();
  checkedRefresh();
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
