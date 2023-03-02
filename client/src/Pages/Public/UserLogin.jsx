import React from "react";
import LoginImg from "../../Assets/Login.jpg";

const UserLogin = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-blue hidden md:block w-full md:w-2/3 h-screen ">
          <img src={LoginImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full my-4 md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="text-6xl font-extrabold text-center">CICCC</div>
            <div className="text-3xl font-extrabold text-center">
              Whisleblowing App
            </div>
            <h1 className="text-xl md:text-2xl leading-tight mt-6 text-center">
              Log in
            </h1>

            <form className="mt-6" action="/login" method="POST">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="username"
                  name="password"
                  placeholder="Enter Username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-blue hover:opacity-80 focus:bg-blueSecond text-white font-semibold rounded-lg px-4 py-3 mt-6 hover:transition duration-500"
              >
                Log In
              </button>
            </form>

            <p className="mt-8">You don't have an account yet?</p>
            <a
              href="#"
              className="text-blue-500 hover:opacity-70 border-b border-blue"
            >
              Create an account
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
