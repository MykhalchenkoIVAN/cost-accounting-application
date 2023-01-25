import './CostItem.css'

function Costitem({ date, amount, description }) {

    const costDiscription = 'Холодильник';
    const costAmount = 999.99;

    console.log(date);

    return (
        <div className='cost-item'>
            <div>{date.toISOString()}</div>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${amount}</div>
            </div>
        </div>
    )
}


export default Costitem