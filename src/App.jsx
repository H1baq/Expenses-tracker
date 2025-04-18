import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
import "./App.css";

function App  (){
    const [expenses, setExpenses] = useState([]);
    const [searchTerm, setSearchTerm] =useState('');
     const addExpense =(expense) => {
        setExpenses([expense, ...expenses]);
     };
     const filteredExpenses = expenses.filter((exp) =>exp.name.toLowerCase().includes(searchTerm.toLowerCase()) || exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='container'>
            <h1>Expense Tracker</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <ExpenseForm onAddExpense={addExpense}/>
            <ExpenseTable expenses={filteredExpenses}/>
        </div>
    );
};




export default App;