import "./CostList.css"
import Costitem from "./Costitem";

const CostList = (props) => {

    if (props.costs.length === 0) {
        return <h2 className="cost-list__fallback">There were no expenses this year</h2>
    }

    return <ul className="cost-list">
        {props.costs.map(cost => (
            <Costitem
                key={cost.id}
                date={cost.date}
                amount={cost.amount}
                description={cost.description}
            />
        ))}
    </ul>

}

export default CostList;