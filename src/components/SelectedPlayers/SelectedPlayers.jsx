import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers, handlePlayerRemove }) => {
  console.log(selectedPlayers);
  return (
    <div className="mb-40">
      <h2 className="text-2xl mb-4">
        Selected Players ({selectedPlayers.length}/6)
      </h2>
      {selectedPlayers.map((player) => (
        <div
          key={player.playerId}
          className="flex justify-between items-center border p-2 mb-2"
        >
          <div className=" flex gap-2">
            {/* <div className="w-5 rounded-full">{player.image}</div> */}
            <div className="flex flex-col text-left">
              <h2>{player.name}</h2>
              <p className="text-gray-500">{player.role}</p>
            </div>
          </div>
          <button
            onClick={() => handlePlayerRemove(player.id)}
            className=" text-red-600 text-2xl px-4 py-2 rounded"
          >
            <MdDeleteForever />
          </button>
        </div>
      ))}
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array,
};

export default SelectedPlayers;
