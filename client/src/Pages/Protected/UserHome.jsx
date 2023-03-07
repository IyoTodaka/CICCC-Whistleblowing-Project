import React from "react";
import Nav from "../../Components/UserHome/Nav";
import Wrapper from "../../Components/UserHome/Layout";
import CreateMain from "../../Components/UserHome/CreateMain";

const UserHome = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <CreateMain />
      </Wrapper>
    </>
  );
};

export default UserHome;
