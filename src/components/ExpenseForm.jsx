import React, {useState} from "react";
const ExpenseForm= ({ onAddExpense}) => {
    const [form,setForm]=useState({
        name: '',
        description: '',
        category: '',
        amount: '',
        date: '',
    });
    const handleChange = (e) => {
        setForm ({...form, [e.target.name]: e.target.value});
    };
    const  handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            ...form,
            id: Date.now()
        };
        onAddExpense(newExpense);
        setForm({ name:'', description:'', amount: '', category: '', date:''});
    }; 
    return (
        <form onSubmit={handleSubmit}>
            <input name= "name" value={form.name} onChange={handleChange} placeholder="Expense Name" required/>
            <input name= "description" value={form.description} onChange={handleChange} placeholder="Description" required/>
            <input name= "category" value={form.category} onChange={handleChange} placeholder="Category" required/>
            <input name= "amount" value={form.amount} onChange={handleChange} type= "number" placeholder="Amount"/>
            <input name= "date" value={form.date} onChange={handleChange} type="date" placeholder="Date" />
            <button type="submit">Submit</button>
        </form>
    );
    
};
export default ExpenseForm;