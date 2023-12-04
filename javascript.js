function validateForm() {
 
    var fullname = document.getElementById("fullname").value;
    if (fullname.trim() === "") {
      alert("Please enter your full name");
      return false;
    }

    var password = document.getElementById("password").value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    }
 
    var email = document.getElementById("email").value;
    if (email.trim() === "") {
      alert("Please enter your email address");
      return false;
    }
 
    var phone = document.getElementById("phone").value;
    if (phone.trim() === "") {
      alert("Please enter your phone number");
      return false;
    }
 
    var gender = document.getElementById("gender").value;
    if (gender === "") {
      alert("Please select your gender");
      return false;
    }

    var terms = document.getElementById("terms");
    if (!terms.checked) {
      alert("Please agree to the Terms & Policy");
      return false;
    }
    return true;
  }
  