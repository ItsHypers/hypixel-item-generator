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

function setStorage() {
  let checked_serialized = JSON.stringify(checked);
  localStorage.setItem("checked", checked_serialized);
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
}
