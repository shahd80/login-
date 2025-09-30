let usernameInput = document.getElementById("nameinput");
let useremailInput = document.getElementById("emailinput");
let userpasswordInput = document.getElementById("passwordinput");

let infoList = [];

if (localStorage.getItem("infoList") != null) {
  infoList = JSON.parse(localStorage.getItem("infoList"));
}

function signUp() {
  const messageBox = document.getElementById("validationMessage");
  messageBox.classList.remove("d-none");

  if (
    !usernameInput.value ||
    !useremailInput.value ||
    !userpasswordInput.value
  ) {
    messageBox.innerHTML = `<p style="color:#DC3545;">All inputs are required</p>`;
    return;
  }

  // Validate name
  var nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  if (!nameRegex.test(usernameInput.value)) {
    messageBox.innerHTML = `<p style="color:#DC3545;">Name must be 3-20 characters (letters, numbers, _)</p>`;
    return;
  }

  // Validate email
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(useremailInput.value)) {
    messageBox.innerHTML = `<p style="color:#DC3545;">Please enter a valid email address.</p>`;
    return;
  }

  // Check for duplicate email
  if (infoList.some((user) => user.email === useremailInput.value)) {
    messageBox.innerHTML = `<p style="color:#DC3545;">Email already exists. Please use another email.</p>`;
    return;
  }

  // Validate password
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{5,}$/;
  if (!passwordRegex.test(userpasswordInput.value)) {
    messageBox.innerHTML = `<p style="color:#DC3545;">Password must be at least 5 characters long and contain letters, numbers, and symbols.</p>`;
    return;
  }

  // Success
  let info = {
    name: usernameInput.value,
    email: useremailInput.value,
    password: userpasswordInput.value,
  };
  infoList.push(info);
  localStorage.setItem("infoList", JSON.stringify(infoList));
  clear();
  messageBox.innerHTML = `<p style="color:#279C45;">Success</p>`;
}

function clear() {
  usernameInput.value = "";
  useremailInput.value = "";
  userpasswordInput.value = "";
}
