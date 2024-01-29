// import React from 'react';
// import './Navigation.css'; // Assuming the CSS file is in the same directory

// const Navigation = () => {
//     return (
//         <div className="navbar-container">
//             <img src="/logo192.png" alt="Your Logo" className="logo" />
//             <div className="nav-links">
//                 <a href="#" className="nav-link">Home</a>
//                 <a href="#" className="nav-link">Products</a>
//                 <a href="#" className="nav-link">Services</a>
//                 <a href="#" className="nav-link">About Us</a>
//                 <a href="#" className="nav-link">Contact Us</a>
//                 <a href="#" className="nav-link">Update Profile</a>
//             </div>
//         </div>
//     );
// };

// export default Navigation;


import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo192.png';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Dropdown from './Dropdown';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    const [Mobile, setMobile] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);

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

    if (isSignedIn) {
        return (
            <nav className="bg-gray-800 p-4">
                <button
                    className="block lg:hidden text-white"
                    onClick={() => setMobile(!Mobile)} >
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer' style={{ fontSize: '0.7cm', paddingRight: '0.3cm', cursor: 'pointer' }}>Sign Out</p>
                <p>youtube</p> */}
                    <ul className={`${Mobile ? "block" : "hidden"
                        } lg:flex lg:justify-end lg:items-center`}
                        onClick={() => setMobile(false)}>
                    <li onClick={() => onRouteChange('signout')} 
                    className='f3 link dim black underline pa3 
                    pointer' style={{ fontSize: '0.7cm', 
                    paddingRight: '0.3cm', cursor: 'pointer' }}>
                    Sign Out
                    </li>
                    <li className="block py-2 px-4 text-white 
                    text-lg font-bold font-serif hover:bg-gray-700 rounded-lg cursor-pointer"
                    onClick={handleDropDownClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        For Authors
                        <FaChevronDown
                            className="inline w-3 h-4 mt-1 ml-2 transition-transform"
                        />
                        {dropdown && <Dropdown />}
                    </li>
                </ul>
            </nav>
            </nav>
        );
    } else {
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img className="mr3 mb3" src={logo} style={{ display: 'flex', justifyContent: 'flex-end', width: '3cm', padding: '0.3cm' }} />
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer' style={{ fontSize:'0.7cm', paddingRight:'0.3cm', cursor:'pointer' }}>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer' style={{ fontSize: '0.7cm', paddingRight: '0.3cm', cursor:'pointer' }} >Register</p>
                </nav>
            </div>
        );
    }
}


export default Navigation;

