import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ToggleButtons from "./components/ToogleButton/ToggleButtons";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const [coins, setCoins] = useState(0);
  const handleAddCoin = () => {
    setCoins(coins + 100000);
  };
  return (
    <div className="body">
      <Header coins={coins}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <div className="relative">
        <ToggleButtons></ToggleButtons>
        <AllPlayers></AllPlayers>
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
