import React from 'react';
import {ReactComponent as Arrow} from '../../img/arrow.svg';
import {ReactComponent as Card} from '../../img/card.svg';
import {AVAILABLE_INCOME_CATEGORIES, TRANSACTION_TYPE} from "../../constants/transactions";
import "./transaction-list.css"

export const IncomeTransactionsList = ({transactions=[], type}) => {
  return (
    <div className="transactions-list-root">
      <div className='transactions-list-header'>
        <span>Description</span>
        <span>Category</span>
        <span>Date</span>
        <span>Amount</span>
      </div>
      <div className='transactions-list-items-list'>
        {transactions?.map((transaction, index) => {
          const cardColor = AVAILABLE_INCOME_CATEGORIES
            .find((category) => category?.value === transaction.category)?.incomeColor;
          return (
            <div className='transactions-list-item' key={transaction.id}>
              <div
                className={`transactions-list-item-description-container ${type === TRANSACTION_TYPE.INCOME ? 'income' : 'expense'}`}>
                <Arrow/>
                <span>{transaction.description}</span>
              </div>
              <div className='transaction-list-item-column'>
                {TRANSACTION_TYPE.INCOME &&
                  <div className='transaction-list-item-income-icon-container'>
                    <div className={`transaction-list-item-income-icon ${cardColor}`}>
                      <Card/>
                    </div>
                    {transaction?.category}
                  </div>}
              </div>
              <div className='transaction-list-item-column'>{transaction?.date}</div>
              <div className='transaction-list-item-column'>

                <span className={`transaction-list-item-amount-${type}`}>
                  {type === TRANSACTION_TYPE.EXPENSE && '-'}
                  {type === TRANSACTION_TYPE.INCOME && '+'}
                  ${transaction.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};
