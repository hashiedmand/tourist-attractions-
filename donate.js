function validateForm() {
    let x = document.forms["donateform"]["formname"].value;
    if (x == "") {
      alert("Everything must be filled out");
      return false;
    }
  }


