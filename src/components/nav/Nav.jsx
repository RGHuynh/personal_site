import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
// import {BiUser} from 'react-icons/bi'
// import {FaLaptopCode} from 'react-icons/fa'
// import {GoCheckList} from 'react-icons/go'
// import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
    </nav>
  );
};

export default Nav;
