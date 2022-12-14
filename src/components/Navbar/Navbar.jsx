import React from "react";
import DropDownMenu from "./DropDownMenu";
import Logo from "./Logo";
import NavItem from "./NavItem";

function Navbar({ fixed }) {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-4">
          <Logo/>
          <DropDownMenu/>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-3xl lg:flex-grow"></div>
          <div>
            <div className="text-3xl lg:flex-grow"> 
              <NavItem text = "News" route = "/News"/>
              <NavItem text = "Events" route = "/Events"/>
              <NavItem text = "Executives" route = "/Executives"/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;