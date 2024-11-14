// import React from 'react';
// import statistic from '../img/statistic.svg'

// const ExpenseStatistics = () => {
//   return (
//     <div>
//     <h3  className="transactions-title">Expense Statistics (img)</h3>
//     <div className="statistics">
    
//     <div className="pie-chart-placeholder">
//       <img src={statistic}/>
//     </div>
//   </div>
//   </div>
//   );
// };

// export default ExpenseStatistics
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Donations', value: 1200, color: '#ff00ff' }, // Фіолетовий
  { name: 'Food', value: 1345, color: '#1e90ff' }, // Синій
  { name: 'Clothes', value: 500, color: '#20c997' }, // Зелений
];

const COLORS = ['#ff00ff', '#1e90ff', '#20c997'];

const CustomPieChart = () => {
  return (
    <div>
      <div className="transactions-title">
        <h3>Expense Statistics</h3>
      </div>

      <div className="statistics">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={110}
              outerRadius={200}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="middle" align="right" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomPieChart;