import React from "react";
import Nav from "../../Components/UserHome/Nav";
import Wrapper from "../../Components/UserHome/Layout";
import ReportMain from "../../Components/UserHome/ReportMain";

const UserReportList = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <ReportMain />
      </Wrapper>
    </>
  );
};

export default UserReportList;
