import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./income-expense-form.css"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


export const IncomeExpenseForm = ({ availableCategories=[], onSave }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const formatDate = (date) => {
    // Перетворення дати у формат YYYY-MM-DD
    const year = date.getFullYear(); // Отримуємо рік
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Отримуємо місяць (0-11) і додаємо 1
    const day = String(date.getDate()).padStart(2, '0'); // Отримуємо день
  
    return `${year}-${month}-${day}`; // Формат YYYY-MM-DD
  };

  return (
    <div className="income-expense-form-root">
      <div>
        <FormControl fullWidth>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {availableCategories?.map((category) => (
              <MenuItem key={category?.name} value={category?.id}>{category?.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <LocalizationProvider  dateAdapter={AdapterDateFns}>
            <DatePicker  value={date} label='Date' onChange={(date) => setDate(date)} />
          </LocalizationProvider>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
        <TextField
          labelId="amount"
          id="amount"
          value={amount}
          label="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <TextField
            labelId="description"
            id="description"
            value={description}
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
      </div>
      <div className='income-expense-form-save-button-container'>
        <Button 
          size='large' 
          variant='contained' 
          style={{
            backgroundColor: '#1814F3',
            width: '160px', 
            height: '50px',
          }}
          onClick={() => onSave(category, formatDate(date), amount, description)}>
          Save
        </Button>
      </div>
    </div>
  );
}
