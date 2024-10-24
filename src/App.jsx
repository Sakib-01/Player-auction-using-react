import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ToggleButtons from "./components/ToogleButton/ToggleButtons";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coins, setCoins] = useState(0);

  const [viewSelected, setViewSelected] = useState(false);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayerSelected = (player) => {
    if (selectedPlayers.find((p) => p.id == player.id)) {
      toast.error("Player already selected!");
    } else if (selectedPlayers.length >= 6) {
      toast.error(`Can't select more than 6 players!`);
    } else if (coins < player.biddingPrice) {
      toast.error(" Don't have enough money");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setCoins(coins - player.biddingPrice);
      toast.success(`${player.name} has been added to your team!`);
    }
  };
  console.log(selectedPlayers);

  const handlePlayerRemove = (id) => {
    const updatePlayer = selectedPlayers.filter((player) => player.id !== id);
    const removedPlayer = selectedPlayers.find((player) => player.id === id);

    setSelectedPlayers(updatePlayer);
    toast.info(`${removedPlayer.name} has been removed from your team!`);
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
            setViewSelected={setViewSelected}
          ></SelectedPlayers>
        )}
      </div>
      <div className=" relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
