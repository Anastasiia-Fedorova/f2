import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./income-expense-form.css"


export const IncomeExpenseForm = ({ availableCategories, onSave }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');


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
            {availableCategories.map((category) => (
              <MenuItem key={category.value} value={category.value}>{category.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <DatePicker  value={date} label='Date' onChange={(date) => setDate(date)} />
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
        <Button size='medium' variant='contained' onClick={() => onSave(category, date, amount, description)}>Save</Button>
      </div>
    </div>
  );
}
