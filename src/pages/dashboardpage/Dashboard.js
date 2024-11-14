import React from 'react';
import './dashboard.css'
import Sidebar from '../../components/SideBar'
import Header from '../../components/Header'
import DashboardSummary from '../../components/DashboardSummary';
import TransactionsList from '../../components/TransactionsList';
import BalanceHistory from '../../components/BalanceHistory';
import ExpenseStatistics from '../../components/ExpenceStatistics';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { getDashboard } from '../../store/actions/getDashboardAction';

function Dashboard() {
  
  store.dispatch(getDashboard(localStorage?.user_id))
  return (
    <div className="dashboard">
    <Sidebar />
    <div className="main-content">
      <Header />
      <div className="dashboard-content">
        <DashboardSummary />
        <div className="dashboard-body">
          <div>
            <TransactionsList/>
            <BalanceHistory />
          </div>
          <ExpenseStatistics />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;