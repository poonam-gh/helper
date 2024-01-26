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


import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;

