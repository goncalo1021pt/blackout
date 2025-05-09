import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import settingsIcon from '../assets/images/Settings.png';
import accountIcon from '../assets/images/Account.png';
import menuIcon from '../assets/images/menu.png';
import blackout from '../assets/images/Blackout.png';

function Home() {
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);
	const navigate = useNavigate();

    const toggleNavBar = () => {
        setIsNavBarVisible(!isNavBarVisible);
    };

    const handleButtonClick = () => {
        console.log('Blackout button clicked');
        alert('Blackout button clicked');
    };

	const handleOutsideClick = (event) => {
        if (isNavBarVisible && !event.target.closest('.nav-bar') && !event.target.closest('.menu')) {
            setIsNavBarVisible(false);
        }
    };

	const handleAccountClick = () => {
		navigate('/login');
	};
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isNavBarVisible]);
    return (
      <div className="home">
        <div className="top-menu">
            {/* Top Left Menu */}
            <div className="menu">
                <img src={menuIcon} alt="Menu" onClick={toggleNavBar} />
            </div>

            {/* Top Right Buttons */}
            <div className="top-right">
                <img src={settingsIcon} alt="Settings" className="icon" />
                <img src={accountIcon} alt="Account" className="icon" onClick={handleAccountClick}/>
            </div>
        </div>

        {/* Side Navigation Bar */}
        <div className={`nav-bar ${isNavBarVisible ? 'visible' : ''}`}>
            <ul className="nav-list">
                <li>Rules</li>
                <li>Leaderboard</li>
            </ul>
        </div>

        {/* Centered Main Button */}
        <div className="main-button">
            <img src={blackout} alt="Blackout Button" className="start-button" onClick={handleButtonClick} />
        </div>
      </div>
    );
}

export default Home;