
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        const expensesTotal = expenses.reduce((total, item) => total + item.cost, 0);
        setTotalExpenses(expensesTotal);
    }, [expenses]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (event.target.value > 20000) {
            alert('Budget exceeds £20,000');
        }

        if (event.target.value < totalExpenses) {
            alert('Budget is less than spent expenses');
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;