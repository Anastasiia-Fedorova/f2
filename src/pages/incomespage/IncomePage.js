import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getIncome } from "../../store/actions/getIncomeActions";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import './incomes-page.css'
import IncomeBarChart from "../../components/addIncomeComponents/IncomeChart";
import TransactionsList from "../../components/TransactionsList";
import { IncomeTransactionsList } from "../../components/TransactionsList/TransactionsList";
import { IncomeExpenseForm } from "../../components/IncomeExpenseForm/IncomeExpenseForm";
import axios from "axios";



export let IncomePage = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIncome(localStorage.user_id))
    }, []);
  
    const categories = useSelector((state) => state?.promiseReducer?.incomes?.categories);
    const summary = useSelector((state) => state?.promiseReducer?.incomes?.summary);
    const transactions = useSelector((state) => state?.promiseReducer?.incomes?.transactions);

    const onSave = async (categoryId, date, amount, description) => {
        try {

          const payload = {
            userId: localStorage?.user_id, 
            categoryId: categoryId, 
            date: date, 
            amount: parseFloat(amount), 
            description: description || null, 
          };
      
          const response = await axios.post('https://fintracker-cpbg.onrender.com/incomes/create', payload);
      
          console.log('Запит успішно відправлено:', response.data);
          dispatch(getIncome(localStorage.user_id));
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
                        <span> Add income </span>
                </div>
                <div className="income-form">
                    <IncomeExpenseForm availableCategories={categories} onSave={onSave}/>
                </div>
                

                </div>

                <div className="income-diagram-outer">
                    <div className="income-span">
                        <span> My Income </span>
                    </div>
                    <div className="income-diagram">
                        <IncomeBarChart summary={summary}/>
                    </div>
                </div>

            </div>

            <div className="income-transactions">
                <div className="income-span">
                        <span> Recent income transactions </span>
                </div>
                <IncomeTransactionsList transactions={transactions} type='income'/>
            </div>

 
      </div>
    </div>
  </div>
)
}