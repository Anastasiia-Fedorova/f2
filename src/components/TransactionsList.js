import React from 'react';
import { useSelector } from 'react-redux';
import money from '../img/mon.png'

const TransactionsList = () => {
  const lastTransactions = useSelector(state =>  state?.promiseReducer?.dashboard_info?.transactions);

  return (
    <>
      <h3 className="transactions-title">Last Transactions</h3>
      <div className="transactions-card">
        <ul className="transactions-list">
        {lastTransactions?.slice(0,3)?.map((transaction, index) => {
          console.log(index);
        return (
          <li key={index} className="transaction-item">
            <div className="transaction-icon">
              <img src={money}/>
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction?.category}</div>
              <div className="transaction-date">{transaction?.date}</div>
            </div>
            <div className="transaction-category">
              {transaction.category}
            </div>
            <div
              className={`transaction-amount ${
                transaction?.type === 'expense' ? 'negative' : 'positive'
              }`}
            >
              {transaction?.type === 'expense' ? `-$${Math.abs(transaction?.amount)}` : `+$${transaction?.amount}`}
            </div>
          </li>
        )
        })}
      </ul>
    </div>
  </>
  );
};

export default TransactionsList;