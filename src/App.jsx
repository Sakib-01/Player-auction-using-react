import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  const [coins, setCoins] = useState(0);
  const handleAddCoin = () => {
    setCoins(coins + 100000);
  };
  return (
    <div className="body">
      <Header coins={coins}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
    </div>
  );
}

export default App;
