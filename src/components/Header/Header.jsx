import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="navbar md:mb-7 border-b-2">
        <div className="flex-1">
          <a className="btn btn-ghost hidden block sm:block normal-case text-3xl font-bold">
            Code Cafe
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal md:px-5 font-bold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FontAwesomeIcon icon={faUser} />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
