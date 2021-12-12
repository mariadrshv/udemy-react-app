import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import ExpensesList from './ExpensesList';
import './ExpensesList.css';

function Expenses ({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear() === parseInt(filteredYear)});

    return (
    <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>
    );
}

export default Expenses;