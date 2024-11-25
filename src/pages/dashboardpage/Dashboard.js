import React, { useEffect } from 'react';
import './dashboard.css'
import Sidebar from '../../components/SideBar'
import Header from '../../components/Header'
import DashboardSummary from '../../components/DashboardSummary';
import TransactionsList from '../../components/TransactionsList';
import BalanceHistory from '../../components/BalanceHistory';
import ExpenseStatistics from '../../components/ExpenceStatistics';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store/store';
import { getDashboard } from '../../store/actions/getDashboardAction';

function Dashboard() {
  let dispatch = useDispatch();
  useEffect(() => {
      dispatch(getDashboard(localStorage.user_id));
  }, []);

  let transactions = useSelector((state) => state?.promiseReducer?.dashboard_info?.transactions);
  let balanceHistory = useSelector((state) => state?.promiseReducer?.dashboard_info?.balanceHistory);

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
            <BalanceHistory balanceHistory={balanceHistory}/>
          </div>
          <ExpenseStatistics  transactions={transactions}/> 
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;