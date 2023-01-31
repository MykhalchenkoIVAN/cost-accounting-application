import React, { useState } from 'react';
import './NewCost.css'
import CostForm from './CostForm';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);



    // getting data from costData to the NewCost component
    const saveCostDataHendler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        // transferring data from costData to the App.js component
        props.onAddCost(costData);
        setIsFormVisible(false)
    }

    const inputCostDataHendler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostDataHendler}>add cost</button>}
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHendler} onCancel={cancelCostHandler} />}
    </div>


}
export default NewCost;