function mobName(input) {
  const mobNameList = document.querySelectorAll(".mobName");
  for (let i = 0; i < mobNameList.length; i++) {
    mobNameList[i].textContent = input;
  }
}
function image(input) {
  document.querySelector(".insertpng").style.display = "incline_block";
  document.querySelector(".insertpng").src = input;
}
