import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses ({expenses}) {
    return (
    <Card className='expenses'>
        {expenses && expenses.map(exp=> (
            <ExpenseItem key={exp.id} {...exp}/>
        ))}
    </Card>
    );
}

export default Expenses;