import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdownToggle = (section) => {
    setDropdown(dropdown === section ? null : section);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>BETTER</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#buy" className="nav-item" onMouseEnter={() => handleDropdownToggle('buy')} onMouseLeave={() => handleDropdownToggle(null)}>Buy</a>
              {dropdown === 'buy' && (
                <div className="dropdown">
                  <a href="#buy1">Apply now</a>
                  <a href="#buy2">Purchaes rates</a>
                </div>
              )}
            </li>
            <li>
              <a href="#refinance" className="nav-item" onMouseEnter={() => handleDropdownToggle('refinance')} onMouseLeave={() => handleDropdownToggle(null)}>Refinance</a>
              {dropdown === 'refinance' && (
                <div className="dropdown">
                  <a href="#refinance1">Apply now</a>
                  <a href="#refinance2">Refinance rates</a>
                </div>
              )}
            </li>
            <li>
              <a href="#heloc" className="nav-item" onMouseEnter={() => handleDropdownToggle('heloc')} onMouseLeave={() => handleDropdownToggle(null)}>HELOC</a>
              {dropdown === 'heloc' && (
                <div className="dropdown">
                  <a href="#heloc1">Apply now</a>
                  <a href="#heloc2">Calculate your cash</a>
                </div>
              )}
            </li>
            <li>
              <a href="#rates" className="nav-item" onMouseEnter={() => handleDropdownToggle('rates')} onMouseLeave={() => handleDropdownToggle(null)}>Rates</a>
              {dropdown === 'rates' && (
                <div className="dropdown">
                  <a href="#rates1">Purchase mortagage rates</a>
                  <a href="#rates2">Refinance rates</a>
                </div>
              )}
            </li>
            <li>
              <a href="#betterplus" className="nav-item" onMouseEnter={() => handleDropdownToggle('betterplus')} onMouseLeave={() => handleDropdownToggle(null)}>Better+</a>
              {dropdown === 'betterplus' && (
                <div className="dropdown">
                  <a href="#betterplus1">Get insurance</a>
                  <a href="#betterplus2">Title and closing</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="#signin" className="nav-item">Sign in</a>
          <a href="#call" className="phone-icon" onMouseEnter={() => handleDropdownToggle('phone')} onMouseLeave={() => handleDropdownToggle(null)}>
            <i className="fas fa-phone"></i>
            {dropdown === 'phone' && (
              <div className="dropdown">
                <a href="#call1">Call 415-523</a>
                
              </div>
            )}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
