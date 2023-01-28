import './CostForm.css'
import React, { useState } from 'react';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        // transferring data from costData to the NewCost component
        props.onSaveCostData(costData);

        // cleaning of input fields
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__controls'>
                    <label>Title</label>
                    <input type='text' value={inputName} onChange={nameChangeHandler} />
                </div>
                <div className='new-cost__controls'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-cost__controls'>
                    <label>Date</label>
                    <input type='date' value={inputDate} onChange={dateChangeHandler} />
                </div>
                <div className='new-cost__controls'>
                    <button type='submit' >Add Cost</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;