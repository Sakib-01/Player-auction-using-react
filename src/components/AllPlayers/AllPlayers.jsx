import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";

const AllPlayers = ({ handlePlayerSelected }) => {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);
  return (
    <div className="pb-52  lg:relative">
      <h1 className="flex justify-start font-bold">Available players</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-5">
        {allPlayers.map((player) => (
          <Player
            handlePlayerSelected={handlePlayerSelected}
            key={player.id}
            player={player}
          ></Player>
        ))}
      </div>
    </div>
  );
};

AllPlayers.propTypes = {
  handlePlayerSelected: PropTypes.func,
};

export default AllPlayers;
