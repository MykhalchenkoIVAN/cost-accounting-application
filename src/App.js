import Costitem from "./components/Costitem";

function App() {
  const costs = [
    {
      date: new Date(2023, 0, 25),
      description: "Холодильник",
      amount: 999.99
    }, {
      date: new Date(2023, 0, 30),
      description: "MacBook",
      amount: 1400.99
    },
    {
      date: new Date(2023, 8, 25),
      description: "Холодильник",
      amount: 49.99
    }
  ]


  return (
    <div>
      <Costitem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}></Costitem>
      <Costitem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}></Costitem>
      <Costitem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}></Costitem>
    </div>
  );
}

export default App;
