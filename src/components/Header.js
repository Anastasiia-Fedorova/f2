import React from 'react';
import search from '../img/search.svg';
import notific from '../img/notification.svg';
import settings from '../img/settings.svg';
import avatar from '../img/avatar.jpg';

const Header = () => (
  <header className="header">
    <h2>Summary</h2>
    
    <div className="profile">
    <div className="search-bar">
      <div className="search-icon">
      <img src={search}/>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for something"
      />
    </div>
      <div className='header-details'>
        <img src={notific}/>
      </div>
      <div className='header-details'>
        <img src={settings}/>
      </div>
      
      <div className="profile-pic">
        <img src={avatar}/>
      </div>
    </div>
  </header>
);

export default Header;