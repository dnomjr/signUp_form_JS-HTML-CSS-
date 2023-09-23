import { Validate } from "./validate.module.js";

let form = document.querySelector(".register-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFirstnameValid = Validate.checkFirst(),
    isLastnameValid = Validate.checkLast(),
    isEmailValid = Validate.checkEmail(),
    isPasswordValid = Validate.checkPassword();

  let isFormValid =
    isFirstnameValid && isLastnameValid && isEmailValid && isPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    e.currentTarget.submit();
  }
});




































/* let form = document.querySelector(".register-form"),
  first = document.querySelector(".first-name"),
  last = document.querySelector(".last-name"),
  email = document.querySelector(".email"),
  pass = document.querySelector(".password"),
  submit = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFirstnameValid = checkFirst(),
    isLastnameValid = checkLast(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();

  let isFormValid =
    isFirstnameValid && isLastnameValid && isEmailValid && isPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    e.currentTarget.submit();
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args)
      }, delay);
  };
};


//reusable functions
const isRequired = (value) => (value === "" ? false : true);

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//error & successfunctions
const showError = (input, message) => {
  const formField = input.nextElementSibling;

  input.classList.add("valid");
  formField.classList.add("error");

  formField.textContent = message;
};

const success = (input) => {
  let err = form.querySelector("small"),
    formField = input.nextElementSibling;
  input.classList.remove("valid");
  formField.classList.remove("error");
  formField.textContent = "";
};

const checkFirst = () => {
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

const checkLast = () => {
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

const checkEmail = () => {
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

const checkPassword = () => {
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
 */