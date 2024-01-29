import React, { useState } from 'react';
import seller from '../../assets/seller.jpeg';
import buyer from '../../assets/buyer.png';
import './welcome.css';



const Welcome = () => {
    const [userType, setUserType] = useState('');

    const handleSelection = (selectedType) => {
        setUserType(selectedType);
    };

    const handleContinue = () => {
        // Handle continue logic based on user/seller selection
        if (userType === 'user') {
            window.location.href = '/userhome';
            // Logic for user selection
        } else if (userType === 'seller') {
            window.location.href = '/sellerhome';
            // Logic for seller selection
        }
    };

    return (
        <div className="welcome-container">
            <h1 style={{fontSize: '2cm' , justifyContent: 'top'}}>Welcome to your OnlineShop!</h1>
            <h1 style={{}}>First, let us tell about yourself...</h1>
            <h1>Are you a buyer or a seller?</h1>
            <div className="choices-container">
                <label className={`choice-label ${userType === 'user' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        name="userType"
                        value="user"
                        checked={userType === 'user'}
                        onChange={() => handleSelection('user')}
                    />
                    <p id='buyer'>Buyer</p>
                    <a href="/userhome">
                        <img src= {buyer} style={{width: '400px'}} alt="User" />
                    </a>
                </label>
                <label className={`choice-label ${userType === 'seller' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        name="userType"
                        value="seller"
                        checked={userType === 'seller'}
                        onChange={() => handleSelection('seller')}
                    />
                    <p id='seller'>Seller</p>
                    <a href="/sellerhome">
                        <img src={seller} style={{width:'300px'}} alt="Seller" />
                    </a>
                </label>
            </div>
            <button onClick={handleContinue}>Continue</button>
        </div>
    );
};

export default Welcome;
