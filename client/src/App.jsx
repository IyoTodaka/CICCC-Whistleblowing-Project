import React from "react";
import UserLogin from "./Pages/Public/UserLogin";
import UserSignup from "./Pages/Public/UserSignup";
import UserHome from "./Pages/Protected/UserHome";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <UserLogin /> */}
      {/* <UserSignup /> */}
      {/* <Navbar /> */}
      {/* これはただの仮だようううう！！！！！ */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/signup" element={<UserSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
