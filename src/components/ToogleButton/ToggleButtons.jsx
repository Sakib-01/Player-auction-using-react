import PropTypes from "prop-types";

const ToggleButtons = ({ viewSelected, setViewSelected, selectedPlayers }) => {
  return (
    <div>
      <div className="flex flex-col md:flex md:flex-row  justify-end mt-6">
        <button
          className={`px-6 py-2 border-2 rounded-2xl ${
            !viewSelected
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => setViewSelected(false)}
        >
          Available
        </button>
        <button
          className={`px-6 py-2 border-2 rounded-2xl ${
            viewSelected
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => setViewSelected(true)}
        >
          Selected
          <span>({selectedPlayers.length})</span>
        </button>
      </div>
    </div>
  );
};

ToggleButtons.propTypes = {
  viewSelected: PropTypes.bool,
  setViewSelected: PropTypes.func,
  selectedPlayers: PropTypes.array,
};

export default ToggleButtons;
