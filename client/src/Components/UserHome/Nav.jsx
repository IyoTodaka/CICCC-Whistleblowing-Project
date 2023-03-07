import React from "react";
import Logo from "../../Assets/Logo.png";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ReportMain from "./ReportMain";

const Nav = () => {
  return (
    <nav className="flex  py-4 bg-blue font-second text-white text-md">
      <div className="w-4/5 flex justify-between mx-auto">
        <ul className="flex items-center">
          <li className="pl-4 ">
            <a className="block ">
              {/* <Link to="/login"> */}
              {/* <img src={Logo} alt="CICCC_Logo" className="w-10 h-10 " /> */}
              {/* </Link> */}
              {/* {username} */}testUser
            </a>
          </li>
          <li className="pl-4">
            <a className="block text-blueSecond">|</a>
          </li>
          <li className="pl-4 hover:cursor-pointer hover:transition duration-300 hover:opacity-50">
            <Link to="/home">Create</Link>
          </li>
          <li className="pl-4 hover:cursor-pointer hover:transition duration-300 hover:opacity-50">
            <Link to="/history">History</Link>
          </li>
        </ul>
        <ul className="ml-auto items-center flex ">
          {/*✅何かしらの設定が必要 */}
          <Link to="/">
            <li className="pl-4 hover:cursor-pointer hover:transition duration-300 hover:opacity-50">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
