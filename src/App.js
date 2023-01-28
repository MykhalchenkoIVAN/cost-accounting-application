import Costs from "./components/Costs/Costs";
import NewCost from "./components/Costs/NewCost/NewCost"
import React, { useState } from "react";

const initialCost = [
  {
    id: 'c1',
    date: new Date(2023, 0, 25),
    description: "Холодильник",
    amount: 999.99
  }, {
    id: 'c2',
    date: new Date(2023, 0, 30),
    description: "MacBook",
    amount: 1400.99
  },
  {
    id: 'c3',
    date: new Date(2023, 8, 25),
    description: "Холодильник",
    amount: 49.99
  }
]
const App = () => {

  const [costs, setCosts] = useState(initialCost)

  // getting data from NewCost to the App.js component
  const addCostHendler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });

  }

  return (
    <div>
      <NewCost onAddCost={addCostHendler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
