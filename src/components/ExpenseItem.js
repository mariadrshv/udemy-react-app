import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem (ExpenseItemProps) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={ExpenseItemProps.date}/>
            <div className="expense-item__description">
                <h2>{ExpenseItemProps.title}</h2>
                <div className="expense-item__price">${ExpenseItemProps.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;