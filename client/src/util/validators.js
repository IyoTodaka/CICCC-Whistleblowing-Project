export const validateUsername = (username) => {
  if (username.trim().length < 8) {
    return "Username requires minimum length of 8 characters";
  }
};

export const validatePassword = (password) => {
  //validate lower case
  if (!password.trim().match(/[a-z]/g)) {
    return "Password requires lowercase letters";
  }
  //validate uppers case
  if (!password.trim().match(/[A-Z]/g)) {
    return "Password requires uppercase letters";
  }
  //validate numbers
  if (!password.trim().match(/[0-9]/g)) {
    return "Password requires numerical values";
  }
  if (password.trim().length < 8) {
    return "Password requires minimum length of 8 characters";
  }

  if (!password.trim().match(/[?!@#$%^&*]/g)) {
    return "Password requires special character(s)";
  }
  return null;
};

export const validateConfirmPassword = (confirmPassword, password) => {
  if (confirmPassword === "") {
    return "Please enter your confirmPassword";
  }

  if (confirmPassword !== password) {
    return "Password doesn't match";
  }
};
