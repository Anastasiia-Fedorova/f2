import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../../store/actions/getExpensesActions";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import ExpenseBarChart from "../../components/addIncomeComponents/ExpenseChart";
import { IncomeTransactionsList } from "../../components/TransactionsList/TransactionsList";
import axios from "axios";
import { IncomeExpenseForm } from "../../components/IncomeExpenseForm/IncomeExpenseForm";



export let ExpensesPage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExpenses(localStorage.user_id))
    }, []);
  
    const categories = useSelector((state) => state?.promiseReducer?.expenses?.categories);
    const summary = useSelector((state) => state?.promiseReducer?.expenses?.summary);
    const transactions = useSelector((state) => state?.promiseReducer?.expenses?.transactions);

    const onSave = async (categoryId, date, amount, description) => {
        try {

          const payload = {
            userId: localStorage?.user_id, 
            categoryId: categoryId, 
            date: date, 
            amount: parseFloat(amount), 
            description: description || null, 
          };
      
          const response = await axios.post('https://fintracker-cpbg.onrender.com/expenses/create', payload);
      
          console.log('Запит успішно відправлено:', response.data);
          dispatch(getExpenses(localStorage.user_id));
        } catch (error) {
          console.error('Помилка під час надсилання запиту:', error.response?.data || error.message);
        }
      };

return (
    <div className="income-outside">
        <Sidebar />
        <div className="main-content">
            <Header />
            <div className="income-inner">

                <div className="income-data">
                    <div className="income-form-outer">

                        <div className="income-span">
                            <span> Add expense </span>
                        </div>
                        <div className="income-form">
                            <IncomeExpenseForm availableCategories={categories} onSave={onSave}/>
                        </div>
                    </div>

                    <div className="income-diagram-outer">
                        <div className="income-span">
                            <span> My Expenses </span>
                        </div>
                        <div className="income-diagram">
                            <ExpenseBarChart summary={summary}/>
                        </div>
                    </div>

                </div>

                <div className="income-transactions">
                    <div className="income-span">
                        <span> Recent expenses transactions </span>
                    </div>
                    <IncomeTransactionsList transactions={transactions} type='expense'/>
                </div>


            </div>
        </div>
    </div>
)
}

const deleteExpense = async (expenseId) => {
    try {
      // Відправка DELETE-запиту
      const response = await axios.delete(`https://fintracker-cpbg.onrender.com/expenses/${expenseId}`);
  
      console.log('Запит на видалення успішний:', response.data);
    } catch (error) {
      console.error('Помилка під час видалення витрати:', error.response?.data || error.message);
    }
  };

//   deleteExpense('3d728396-4423-4fd8-bb19-992f0ee99fcf');