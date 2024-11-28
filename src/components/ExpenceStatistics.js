import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';


const processTransactions = (transactions = [], threshold = 800) => {
  // тільки витрати
  const expenses = transactions?.filter(transaction => transaction.type === "expense");

  // Групуємо витрати за категоріями
  const grouped = expenses?.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.amount;
    return acc;
  }, {});

  //  об'єднуємо дрібні транзакції
  const result = [];
  let otherTotal = 0;

  Object.entries(grouped).forEach(([category, total]) => {
    if (total > threshold) {
      result.push({ name: category, value: total });
    } else {
      otherTotal += total;
    }
  });

  // категорія Other для дрібних транзакцій
  if (otherTotal > 0) {
    result.push({ name: "Other", value: otherTotal });
  }

  return result;
};


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6347", "#AF19FF"];



const CustomPieChart = ({transactions}) => {
  

  // Обробка транзакцій
  const data = processTransactions(transactions, 1000);

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
              cx="70%"
              cy="50%"
              innerRadius={90}
              outerRadius={150}
              label={({ percent, name }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="top" align="right" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


export default CustomPieChart;