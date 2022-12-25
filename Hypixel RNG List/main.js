function storeCookie() {
  // Get all the checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Create an object to store the values of the checked checkboxes
  var checkedValues = {};

  // Loop through the checkboxes and store the values of the checked ones in the object
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValues[checkboxes[i].name] = checkboxes[i].value;
    }
  }

  // Convert the object to a string and store it in a cookie
  document.cookie = "checkedValues=" + JSON.stringify(checkedValues);
}

// When the page loads, check the checkboxes based on the values stored in the cookie
window.addEventListener("load", function () {
  // Get the stored cookie string
  var cookieString = document.cookie;

  // If the cookie string is not empty, convert it back to an object and use it to check the appropriate checkboxes
  if (cookieString) {
    var checkedValues = JSON.parse(cookieString.split("=")[1]);

    for (var key in checkedValues) {
      document.getElementById(key).checked = true;
    }
  }
});
