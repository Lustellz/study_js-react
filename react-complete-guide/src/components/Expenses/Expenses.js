import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const {items} = props;

    return (
        <Card className='expenses'>
            {
                items.map(
                    expense => {
                        return <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
                    }
                )
            }
        </Card>
    )
}

export default Expenses;