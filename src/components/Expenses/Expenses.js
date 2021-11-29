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

    return (
    <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            {expenses && expenses.map(exp=> (
                <ExpenseItem key={exp.id} {...exp}/>
            ))}
        </Card>
    </div>
    );
}

export default Expenses;