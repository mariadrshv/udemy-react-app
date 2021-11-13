import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses ({expenses}) {
    return (
    <Card className='expenses'>
        {expenses && expenses.map(exp=> (
            <ExpenseItem {...exp}/>
        ))}
    </Card>
    );
}

export default Expenses;