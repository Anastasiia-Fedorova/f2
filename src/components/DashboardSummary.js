import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import mymoney from '../img/money.png';
import income from '../img/Group2.png';
import expense from '../img/Group.png';
import savings from '../img/saving.png';
import { useSelector } from 'react-redux';


const DashboardSummary = () => {
  const dashboardInfo = useSelector(state =>  state?.promiseReducer?.dashboard_info);
  return (
    <div className="summary-cards">
      <div className="card">
        <div className='card-img'>
          <img src={mymoney}/>
        </div>
        <div>
          My Balance 
          <span>${dashboardInfo?.balance || 0}</span>
        </div>
      </div>

      <div className="card">
        <div className='card-img card-img-income'>
          <img src={income}/>
        </div>
        <div>
          Income
          <span>${dashboardInfo?.incomeAmount || 0}</span>
        </div>
      </div>
      

      <div className="card">
        <div className='card-img card-img-expense'>
          <img src={expense}/>
        </div>
        <div>
          Expense
          <span>${dashboardInfo?.expenseAmount || 0}</span>
        </div>
      </div>


      {/* <div className="card">
        <div className='card-img card-img-savings'>
          <img src={savings}/>
        </div>
        <div>
          Savings
          <span>$0</span>
        </div>
      </div> */}
  </div>
  );
};

export default DashboardSummary;