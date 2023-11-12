function mobName(input) {
  const mobNameList = document.querySelectorAll(".mobName");
  for (let i = 0; i < mobNameList.length; i++) {
    mobNameList[i].textContent = input;
  }
}
function mobImage(input) {
  document.querySelector(".mobImageHolder").style.display = "inline-block";
  document.querySelector(".insertpng").src = input;
}
