import './CostItem.css'
import CostDate from './CostDate'
function Costitem({ date, amount, description }) {

    console.log('costitem', date);

    return (
        <div className='cost-item'>
            <CostDate date={date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${amount}</div>
            </div>
        </div>
    )
}


export default Costitem