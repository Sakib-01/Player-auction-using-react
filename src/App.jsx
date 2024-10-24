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

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayerSelected = (player) => {
    if (selectedPlayers.find((p) => p.id == player.id)) {
      alert("player already selected");
    } else if (selectedPlayers.length >= 6) {
      alert("can't add more then 6 players");
    } else if (coins < player.biddingPrice) {
      alert(" dont have enough money");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setCoins(coins - player.biddingPrice);
    }
  };
  console.log(selectedPlayers);

  const handlePlayerRemove = (id) => {
    const updatePlayer = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(updatePlayer);
  };

  const handleAddCoin = () => {
    setCoins(coins + 10000000);
  };
  return (
    <div className="body">
      <Header coins={coins}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <div>
        <ToggleButtons
          viewSelected={viewSelected}
          setViewSelected={setViewSelected}
          selectedPlayers={selectedPlayers}
        ></ToggleButtons>

        {!viewSelected ? (
          <AllPlayers handlePlayerSelected={handlePlayerSelected}></AllPlayers>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            handlePlayerRemove={handlePlayerRemove}
          ></SelectedPlayers>
        )}
      </div>
      <div className=" relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
