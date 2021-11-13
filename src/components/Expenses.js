import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses (ExpensesProps) {
    return (
    <Card className='expenses'>
        <ExpenseItem title={ExpensesProps.expenses[0].title} amount={ExpensesProps.expenses[0].amount} date={ExpensesProps.expenses[0].date}/>
        <ExpenseItem title={ExpensesProps.expenses[1].title} amount={ExpensesProps.expenses[1].amount} date={ExpensesProps.expenses[1].date}/>
        <ExpenseItem title={ExpensesProps.expenses[2].title} amount={ExpensesProps.expenses[2].amount} date={ExpensesProps.expenses[2].date}/>
        <ExpenseItem title={ExpensesProps.expenses[3].title} amount={ExpensesProps.expenses[3].amount} date={ExpensesProps.expenses[3].date}/>
    </Card>
    );
}

export default Expenses;