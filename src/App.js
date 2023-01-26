import Costs from "./components/Costs";

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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
