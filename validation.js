document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    let username = document.querySelector(".form .register [name='username']");
    let password = document.querySelector(".form .register [name='password']");
  
    form.addEventListener("submit", (event) => {
      if (!validateUsername() || !validatePassword()) {
        event.preventDefault();
      }
    });
  
    const setError = (element, message) => {
      const inputElement = element.parentElement;
      const errorDisplay = inputElement.querySelector(".error");
      errorDisplay.innerText = message;
      inputElement.classList.add("error");
    };
  
    const clearError = (element) => {
      const inputElement = element.parentElement;
      const errorDisplay = inputElement.querySelector(".error");
      errorDisplay.innerText = "";
      inputElement.classList.remove("error");
    };
  
    const isValidUsername = (username) => /^[A-Z][a-zA-Z]*$/.test(username);
    const isValidPassword = (password) => /^[a-zA-Z\d]+$/.test(password);
  
    const validateUsername = () => {
      username = document.querySelector(".form .register [name='username']");
      const usernameValue = username.value.trim();
  
      if (usernameValue === "") {
        setError(username, "Username is required!");
        return false;
      } else if (/\s/.test(usernameValue)) {
        setError(username, "Username should not contain spaces.");
        return false;
      } else if (!isValidUsername(usernameValue)) {
        setError(username, "Username should start with a capital letter.");
        return false;
      } else if (usernameValue.length < 5 || usernameValue.length > 10) {
        setError(
          username,
          "Username length should be between 5 and 10 characters."
        );
        return false;
      } else {
        clearError(username);
        return true;
      }
    };
  
    const validatePassword = () => {
      password = document.querySelector(".form .register [name='password']");
      const passwordValue = password.value.trim();
  
      if (passwordValue === "") {
        setError(password, "Password is required!");
        return false;
      } else if (/\s/.test(passwordValue)) {
        setError(password, "Password should not contain spaces.");
        return false;
      } else if (!isValidPassword(passwordValue)) {
        setError(password, "Password should contain only letters and numbers!");
        return false;
      } else if (passwordValue.length < 10 || passwordValue.length > 15) {
        setError(
          password,
          "Password length should be between 10 and 15 characters."
        );
        return false;
      } else {
        clearError(password);
        return true;
      }
    };
  });
  