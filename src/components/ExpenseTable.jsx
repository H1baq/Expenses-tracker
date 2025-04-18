import React from "react";
const ExpenseTable = ({ expenses}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>description</th>
                    <th>category</th>
                    <th>amount</th>
                    <th>date</th>  
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{expense.description}</td>
                        <td>{expense.category}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default ExpenseTable;