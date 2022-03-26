import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { date, title, price } = props;

    const clickHandler = () => {

    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='exponse-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price} KRW</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;