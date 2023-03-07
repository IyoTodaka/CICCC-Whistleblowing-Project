import React from "react";
// import {children} from "../UserH"

const Wrapper = ({ children }) => {
  return (
    <>
      <div
        className="min-h-screen px-6 pt-14 lg:pb-0 md:max-w-5xl md:mx-auto"
        style={{ minHeight: "90vh" }}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
