import React from "react";
import { images } from "../../assets/image";
import { logout } from "../../firebase";

function Header({ userName }) {
  return (
    <div className="header-outer flex-1">
      <div className="flex-0-8 pr-4">
        <img src={images.logo} alt="logo" className="logo-size" />
      </div>
      <div className="display-f-row flex-0-2">
        <div className="display-f-row center-v">
          <img src={images.logo} alt="logo" className="logo-size" />
          <div className="ms-2">{userName}</div>
          <a onClick={logout} className="mx-2">
            logout
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
