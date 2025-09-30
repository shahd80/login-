let welcomeList = JSON.parse(localStorage.getItem("infoList")) || [];
let loggedEmail = localStorage.getItem("loggedInEmail");

function display() {
  let showBox = document.getElementById("showmessage");
  if (!showBox) return;
  let user = welcomeList.find((u) => u.email === loggedEmail);
  if (user) {
    showBox.innerHTML = `<h1>Welcome ${user.name}</h1>`;
  } else {
    showBox.innerHTML = `<h1>Welcome</h1>`;
  }
}
window.addEventListener("DOMContentLoaded", display);
