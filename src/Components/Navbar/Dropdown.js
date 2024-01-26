import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
const MenuItems = [{
        title: "Technical Tracks",
        path: "/tracks",
        cName: "dropdown-link",
    },
    {
        title: "Papers Submission",
        path: "/paperssubmission",
        cName: "dropdown-link",
    },
];
function Dropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        if (window.innerWidth <= 768) {
            setClick(!click);
        }
    };
    const handleHover = () => {
        if (window.innerWidth > 768) {
            setClick(!click);
        }
    };
    return (
        <>
            <ul
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className={click ? "dropdown-menu mobile-view" : "dropdown-menu"}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;
