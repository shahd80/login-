let emailAddressInput = document.getElementById("emailinput");
let passwordInput = document.getElementById("passwordinput");
let messageBox = document.getElementById("validationMessage");

let informationList = [];
if (localStorage.getItem("informationList") != null) {
  infoList = JSON.parse(localStorage.getItem("informationList"));
}

function login() {
  messageBox.classList.remove("d-none");
  // Check all fields are filled
  if (!emailAddressInput.value || !passwordInput.value) {
    messageBox.innerHTML = `<p style="color:#DC3545;">All inputs are required</p>`;
    return;
  }
  let found = infoList.find(
    (user) =>
      user.email === emailAddressInput.value &&
      user.password === passwordInput.value
  );
  if (found) {
    messageBox.innerHTML = `<p style="color:#279C45;">Success</p>`;
    localStorage.setItem("loggedInEmail", emailAddressInput.value);
    window.location.href = "home.html";
  } else {
    messageBox.innerHTML = `<p style="color:#DC3545;">Incorrect email or password</p>`;
  }
}
