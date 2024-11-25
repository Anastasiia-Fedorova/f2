import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';


const processBalanceHistory = (balanceHistory) => {
  const result = [];
  for (const month in balanceHistory) {
    if (balanceHistory.hasOwnProperty(month)) {
      result.push({
        month: month.charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase(), // Скорочення місяця
        value: balanceHistory[month],
      });
    }
  }
  return result;
};
const BalanceHistoryChart = (balanceHistory={}) => {
  const data = processBalanceHistory(balanceHistory.balanceHistory);

  return (
    <div className='balance-graf'>
      <h3 style={{ color: '#4a4a8e', marginBottom: '20px' }}>Balance History</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0000FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0000FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fill: '#6e6e8c' }} />
          <YAxis tick={{ fill: '#6e6e8c' }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#0000FF"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistoryChart;