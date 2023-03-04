import React, { useState, useRef, useEffect } from "react";
import SignupImg from "../../Assets/Top.jpg";
import Logo from "../../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  validateUsername,
  validatePassword,
  validateConfirmPassword,
} from "../../util/validators";

const AdminSignup = () => {
  const navigate = useNavigate();
  const userInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const [usernameErr, setUsernameErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");

    const username = userInput.current.value;
    const password = passwordInput.current.value;
    const confirmPassword = confirmPasswordInput.current.value;

    const userNameHintValidate = validateUsername(username);
    console.log(userNameHintValidate);
    setUsernameErr(
      userNameHintValidate
        ? "Username requires minimum length of 8 characters"
        : ""
    );

    const passwordHintValidate = validatePassword(password);
    setPasswordErr(passwordHintValidate ? passwordHintValidate : "");

    const confirmPasswordHintValidate = validateConfirmPassword(
      confirmPassword,
      password
    );
    console.log(confirmPasswordHintValidate);
    setConfirmPasswordErr(
      confirmPasswordHintValidate ? confirmPasswordHintValidate : ""
    );

    try {
      // console.log(username);
      // console.log(password);
      // navigate("/home");
    } catch (err) {
      const errors = err.data.errors;
      console.log(errors);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-blue hidden md:block w-full md:w-2/3 h-screen ">
          <img src={SignupImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full my-4 md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="justify-center ml-auto flex mb-3">
              <img src={Logo} alt="CICCC_Logo" className="w-20 h-20 " />
            </div>
            <div className="text-2xl font-extrabold text-center text-blue font-second">
              Whisleblowing App
            </div>
            <div className="text-xl font-extrabold text-center text-blueSecond font-second">
              Admin
            </div>
            <h3 className="text-md font-bold leading-tight mt-6 text-left ">
              Sign up
            </h3>

            <form className="mt-6" onSubmit={handleSubmit}>
              <label className="block text-gray-700">Username</label>

              <input
                ref={userInput}
                type="username"
                name="password"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />

              {usernameErr !== "" ? (
                <p className="text-xs text-red-600">{usernameErr}</p>
              ) : (
                ""
              )}

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  ref={passwordInput}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {passwordErr !== "" ? (
                <p className="text-xs text-red-600">{passwordErr}</p>
              ) : (
                ""
              )}
              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  ref={confirmPasswordInput}
                  type="password"
                  name="confirm password"
                  placeholder="Enter Confirm password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {confirmPasswordErr !== "" ? (
                <p className="text-xs text-red-600">{confirmPasswordErr}</p>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="w-full block bg-blue hover:opacity-80 focus:bg-blueSecond text-white rounded-lg px-4 py-3 mt-6 hover:transition duration-500"
              >
                Sign up
              </button>
            </form>
            <p className="mt-8"> Already have an account?</p>
            <Link
              to="/admin/login"
              className="text-blue-500 hover:opacity-70 border-b border-blue"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminSignup;
