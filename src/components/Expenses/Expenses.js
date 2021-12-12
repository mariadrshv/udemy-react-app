import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter'

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
            {filteredExpenses && filteredExpenses.map(expense =>
                (<ExpenseItem key={expense.id} {...expense}/>
            ))}
        </Card>
    </div>
    );
}

export default Expenses;