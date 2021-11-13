import './ExpenseDate.css';

function ExpenseDate (ExpenseDateProps) {
    const month = ExpenseDateProps.date.toLocaleString('en-US', {month: 'long'});
    const day = ExpenseDateProps.date.toLocaleString('en-US', { day: '2-digit'});
    const year = ExpenseDateProps.date.getFullYear();
    return (
        <div className='expense-date'>  
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;