import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from "recharts";


const processSummaryData = (summary) => {
    const result = [];
    for (const month in summary) {
      if (summary.hasOwnProperty(month)) {
        result.push({
          month: month.charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase(), // Скорочення місяця
          value: summary[month],
        });
      }
    }
    return result;
  };

const IncomeBarChart = (summary={}) => {
    const dataForChart = processSummaryData(summary?.summary) ;
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={dataForChart}
          margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: "#6e6e8c" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
          <Bar
            dataKey="value"
            radius={[10, 10, 10, 10]} 
            barSize={30}
            fill="#e0e0e0"
          >
             {dataForChart.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value > 0 ? "#16DBCC" : "#e0e0e0"} 
              />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              style={{ fill: "#6e6e8c", fontWeight: "bold" }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeBarChart;