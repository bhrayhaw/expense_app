import './App.css';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const AddExpenseHandler = (expense) => {
    console.log(expense)
  };
  return (
    <div className="App">
      <NewExpense addExpense = {AddExpenseHandler}/>
      <Expense/>
    </div>
  );
}

export default App;
