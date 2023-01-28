import './Costs.css'
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CostList from './CostList';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2023')


    const yearChangeHandler = (year) => {

        setSelectedYear(year)
    }
    // filtering the costs by year
    const filteredCost = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })
    console.log("ds", filteredCost);

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
                {/* Dynamically create a Costitem */}
                <CostList costs={filteredCost} />
            </Card>
        </div>

    )



}

export default Costs;