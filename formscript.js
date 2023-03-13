function validateForm() {
  var x = document.forms["simpleform"]["fullname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  var x = document.forms["simpleform"]["email"].value;
  if (x == "") {
    alert("email must be filled out");
    return false;
  }

  var x = document.forms["simpleform"]["phone"].value;
  if (x == "") {
    alert("Phone number must be filled out");
    return false;
  }

  var x = document.forms["simpleform"]["password"].value;
  if (x == "") {
    alert("password must be filled out");
    return false;
  }
}