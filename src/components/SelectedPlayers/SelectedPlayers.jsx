import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers }) => {
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
          <span>
            {player.name} - {player.role}
          </span>
          <button className=" text-red-600 text-2xl px-4 py-2 rounded">
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
