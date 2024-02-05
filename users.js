let users = [];

function registerUser(email, username, password) {
  if (users.some((user) => user.username === username)) {
    return {
      success: false,
      message: "Username already taken! Try another!",
    };
  }
  users.push({ email, username, password });
  return {
    success: true,
    message: "Registration successful! Go to Login!",
  };
}

function loginUser(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return {
      success: true,
      message: "Login successful!",
    };
  } else {
    return {
      success: false,
      message: "Invalid username or password! Make sure you have registered!",
    };
  }
}
