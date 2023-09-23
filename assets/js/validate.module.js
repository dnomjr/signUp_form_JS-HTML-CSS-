let first = document.querySelector(".first-name"),
  last = document.querySelector(".last-name"),
  email = document.querySelector(".email"),
  pass = document.querySelector(".password"),
  form = document.querySelector(".register-form");

let checkFirst = () => {
  let firstName = first.value.trim(),
    valid = false;

  if (!isRequired(firstName)) {
    showError(first, "First Name cannot be empty.");
  } else {
    success(first);
    valid = true;
  }

  return valid;
};

let checkLast = () => {
  let lastName = last.value.trim(),
    valid = false;

  if (!isRequired(lastName)) {
    showError(last, "Last Name cannot be empty.");
  } else {
    success(last);
    valid = true;
  }

  return valid;
};

let checkEmail = () => {
  let mail = email.value.trim(),
    valid = false;

  if (!isEmailValid(mail)) {
    showError(email, "Looks like this is not an email.");
  } else {
    success(email);
    valid = true;
  }

  return valid;
};

let checkPassword = () => {
  let password = pass.value.trim(),
    valid = false;

  if (!isRequired(password)) {
    showError(pass, "Password cannot be empty.");
  } else {
    success(pass);
    valid = true;
  }

  return valid;
};

//reusable functions
let isRequired = (value) => (value === "" ? false : true);

let isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//error & successfunctions
let showError = (input, message) => {
  const formField = input.nextElementSibling;

  input.classList.add("valid");
  formField.classList.add("error");

  formField.textContent = message;
};

let success = (input) => {
  let err = form.querySelector("small"),
    formField = input.nextElementSibling;
  input.classList.remove("valid");
  formField.classList.remove("error");
  formField.textContent = "";
};

export let Validate = {
  checkFirst: checkFirst,
  checkLast: checkLast,
  checkEmail: checkEmail,
  checkPassword: checkPassword,
};
