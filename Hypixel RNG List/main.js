const img = document.querySelector("img");
img.setAttribute("draggable", false);

var checked = {};

function highlight() {
  if (event.target.parentElement.closest("div").classList.contains("checked")) {
    event.target.parentElement.closest("div").classList.remove("checked");
    updatedStorage(false);
  } else {
    updatedStorage(true);
    event.target.parentElement.closest("div").classList.add("checked");
  }
}
function highlightOnLoad(name) {
  document.querySelector("." + name).classList.add("checked");
}
function updatedStorage(added) {
  if (added) {
    checked[event.target.parentElement.closest("div").className] = {
      checked: true,
    };
    setStorage();
  } else {
    delete checked[event.target.parentElement.closest("div").className];
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
  }
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});

window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.scrollTop = localStorage.getItem("sidebar-scroll");
});
