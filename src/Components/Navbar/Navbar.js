import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleDropDownClick = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <button
          className="block lg:hidden text-white"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

        <ul

          className={`${
            Mobile ? "block" : "hidden"
          } lg:flex lg:justify-end lg:items-center`}
          onClick={() => setMobile(false)}
        >
          <li>
            home
          </li>
          <li>
            about us
          </li>
         hdfhdh
          <li>
            sdfsdfg
          </li>
          <li>
            asasd
          </li>
          <li>
            asdgasdg
          </li>
          <li>
            asdsdf
          </li>
          <li>
            asdfadsf
          </li>
          <li>
            asdasd
          </li>
          <li>
            asdfadf
          </li>
        </ul>
      </nav>
    </>
  );
}


