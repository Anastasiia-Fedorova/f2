import React, { useState } from 'react';
import logo from '../img/logo.svg';
import side from '../img/side.svg';
import logout from '../img/logout.png';
import { store } from '../store/store';
import { actionAuthLogout } from '../store/reducers/authReducer';
import { useNavigate } from 'react-router-dom';



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

      <div
        key="1"
        className={`sidebar-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
        onClick={() => handleItemClick('Dashboard')}
      >
        <img src={side} className="icon" alt="icon" />
        <span className="text">Dashboard</span>
      </div>

      <div
        key="2"
        className={`sidebar-item ${activeItem === 'Transactions' ? 'active' : ''}`}
        onClick={() => handleItemClick('Transactions')}
      >
        <img src={side} className="icon" alt="icon" />
        <span className="text">Transactions</span>
      </div>

      <div
        key="3"
        className={`sidebar-item ${activeItem === 'Add Expense' ? 'active' : ''}`}
        onClick={() => {
          navigate('/expenses');
          handleItemClick('Add Expense')
        }}
      >
        <img src={side} className="icon" alt="icon" />
        <span className="text">Add Expense</span>
      </div>


      <div
        key="4"
        className={`sidebar-item ${activeItem === 'Add Income' ? 'active' : ''}`}
        onClick={() => {
          handleItemClick('Add Income');
          navigate('/incomes');
        }}
      >
        <img src={side} className="icon" alt="icon" />
        <span className="text">Add Income</span>
      </div>

 
      <div
        key="5"
        className={`sidebar-item ${activeItem === 'Category' ? 'active' : ''}`}
        onClick={() => handleItemClick('Category')}
      >
        <img src={side} className="icon" alt="icon" />
        <span className="text">Category</span>
      </div>

 
      <div
        key="6"
        className={`sidebar-item ${activeItem === 'Reports' ? 'active' : ''}`}
        onClick={() => handleItemClick('Reports')}
      >
        <img src={side} className="icon" alt="icon" />
        <span className="text">Reports</span>
      </div>
      
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