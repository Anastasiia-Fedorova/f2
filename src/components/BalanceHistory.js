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

const data = [
  { month: 'May', value: 200 },
  { month: 'Jun', value: 400 },
  { month: 'Jul', value: 600 },
  { month: 'Aug', value: 800 },
  { month: 'Sep', value: 500 },
  { month: 'Oct', value: 700 },
  { month: 'Nov', value: 650 },
];

const BalanceHistoryChart = () => {
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