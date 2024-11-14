import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MoreVert } from '@mui/icons-material';

const data = [
  { month: 'Jan', investment: 100, profit: 60, loss: 20, maintenance: 40 },
  { month: 'Feb', investment: 150, profit: 80, loss: 30, maintenance: 50 },
  { month: 'Mar', investment: 80, profit: 70, loss: 10, maintenance: 30 },
  { month: 'Apr', investment: 130, profit: 100, loss: 20, maintenance: 40 },
  { month: 'May', investment: 200, profit: 150, loss: 50, maintenance: 70 },
  { month: 'Jun', investment: 180, profit: 120, loss: 60, maintenance: 90 },
  { month: 'Jul', investment: 120, profit: 80, loss: 20, maintenance: 40 },
  { month: 'Aug', investment: 140, profit: 110, loss: 50, maintenance: 60 },
  { month: 'Sep', investment: 160, profit: 100, loss: 40, maintenance: 70 },
  { month: 'Oct', investment: 170, profit: 120, loss: 30, maintenance: 50 },
  { month: 'Nov', investment: 210, profit: 160, loss: 70, maintenance: 90 },
  { month: 'Dec', investment: 190, profit: 130, loss: 60, maintenance: 80 },
];

const GrowthChart = () => {
  return (
    <Card sx={{ p: 3, borderRadius: '16px', backgroundColor: '#F5F5F5' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Графік витрат</Typography>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>
      <Typography variant="h4" sx={{ mt: 2, mb: 4, fontWeight: 'bold' }}>
        $961
      </Typography>

      {/* Recharts Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#81D4FA" />
          <Bar dataKey="profit" stackId="a" fill="#7E57C2" />
          <Bar dataKey="loss" stackId="a" fill="#FF7043" />
          <Bar dataKey="maintenance" stackId="a" fill="#FFD54F" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default GrowthChart;