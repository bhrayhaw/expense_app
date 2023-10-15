import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveDataHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }
        props.addExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveData= {saveDataHandler}/>
        </div>
    );
};

export default NewExpense;