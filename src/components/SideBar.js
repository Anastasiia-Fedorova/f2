import React, { useState } from 'react';
import logo from '../img/logo.svg';
import side from '../img/side.svg';
import logout from '../img/logout.png';
import { store } from '../store/store';
import { actionAuthLogout } from '../store/reducers/authReducer';
import { useNavigate } from 'react-router-dom';


const menuItems = [
  { id: 1, name: 'Dashboard', icon: '🏠', active: true },
  { id: 2, name: 'Transactions',  active: false },
  { id: 3, name: 'Add Expense',  active: false },
  { id: 4, name: 'Add Income',  active: false },
  { id: 5, name: 'Category', active: false },
  { id: 6, name: 'Reports',  active: false },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-inner"> 
        <div className='sidebar-logo'>
          <img src={logo}/>
          <span>FinTracker</span>

        </div>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => handleItemClick(item.name)}
          >
            <img src={side} className="icon"/>
            <span className="text">{item.name}</span>
          </div>
        ))}

        <div className='log-out'
          onClick={() => {
            store.dispatch(actionAuthLogout());
            navigate('/signin');
          }}> 
          <span>Log out</span>
          <div className='log-out-img'><img src={logout}/></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;