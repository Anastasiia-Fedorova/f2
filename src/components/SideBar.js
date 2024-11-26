import React, { useState } from 'react';
import logo from '../img/logo.svg';
import side from '../img/side.svg';
import logout from '../img/logout.png';
import { store } from '../store/store';
import { actionAuthLogout } from '../store/reducers/authReducer';
import { useNavigate, useLocation } from 'react-router-dom';



const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 1, name: 'Dashboard', path: '/dashboard' },
    { id: 2, name: 'Transactions', path: '/' },
    { id: 3, name: 'Add Expense', path: '/expenses' },
    { id: 4, name: 'Add Income', path: '/incomes' },
    { id: 5, name: 'Category', path: '/' },
    { id: 6, name: 'Reports', path: '/' },
  ];

  return (

    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
          <span>FinTracker</span>
        </div>

        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${
              location.pathname === item.path ? 'active' : ''
            }`}
            onClick={() => navigate(item.path)}
          >
            <img src={side} className="icon" alt="icon" />
            <span className="text">{item.name}</span>
          </div>
        ))}

        <div
          className="log-out"
          onClick={() => {
            store.dispatch(actionAuthLogout());
            navigate('/signin');
          }}
        >
          <span>Log out</span>
          <div className="log-out-img">
            <img src={logout} alt="logout-icon" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;