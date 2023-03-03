import React, { useState, useRef, useEffect } from "react";
import LoginImg from "../../Assets/Top.jpg";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const userInput = useRef(null);
  const passwordInput = useRef(null);

  const [usernameErr, setUsernameErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  useEffect(() => {
    if (usernameErr === "" && passwordErr === "") {
      alert("Sign up successful!");
    }
  }, [usernameErr, passwordErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameErr("");
    setPasswordErr("");

    const username = userInput.current.value;
    const password = passwordInput.current.value;

    //validation
    let error = false;

    if (username === "") {
      error = true;
      setUsernameErr("Please enter your name");
    }
    if (password === "") {
      error = true;
      setPasswordErr("Please enter your password");
    }

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
        <div className="bg-blue hidden md:block w-full md:w-2/3 h-screen">
          <img src={LoginImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full my-4 md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="text-6xl font-extrabold text-center text-blue">
              CICCC
            </div>
            <div className="text-3xl font-extrabold text-center  text-blue">
              Whisleblowing App
            </div>
            <h1 className="text-xl md:text-2xl leading-tight mt-6 text-center">
              Log in
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  ref={userInput}
                  type="username"
                  name="username"
                  placeholder="Enter Username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {usernameErr !== "" ? (
                <p className="text-xs text-red-600">Enter user name</p>
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
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {passwordErr !== "" ? (
                <p className="text-xs text-red-600">Enter password</p>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="w-full block bg-blue hover:opacity-80 focus:bg-blueSecond text-white rounded-lg px-4 py-3 mt-6 hover:transition duration-500"
              >
                Log In
              </button>
            </form>
            <p className="mt-8">You don't have an account yet?</p>
            <Link
              to="/signup"
              className="text-blue-500 hover:opacity-70 border-b border-blue"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
