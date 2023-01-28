import './NewCost.css'
import CostForm from './CostForm';

const NewCost = (props) => {
    // getting data from costData to the NewCost component
    const saveCostDataHendler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        // transferring data from costData to the App.js component
        props.onAddCost(costData)
    }
    return <div className='new-cost'>
        <CostForm onSaveCostData={saveCostDataHendler} />
    </div>


}
export default NewCost;