import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ToggleButtons from "./components/ToogleButton/ToggleButtons";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  const [coins, setCoins] = useState(0);

  const [viewSelected, setViewSelected] = useState(false);

  const handleAddCoin = () => {
    setCoins(coins + 100000);
  };
  return (
    <div className="body">
      <Header coins={coins}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <div className=" relative">
        <ToggleButtons
          viewSelected={viewSelected}
          setViewSelected={setViewSelected}
        ></ToggleButtons>

        {!viewSelected ? (
          <AllPlayers></AllPlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
