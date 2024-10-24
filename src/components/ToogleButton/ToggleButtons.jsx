import PropTypes from "prop-types";

const ToggleButtons = (props) => {
  return (
    <div>
      <div className="flex flex-col md:flex md:flex-row  justify-end mt-6">
        <button className={"px-6 py-2  border-2 rounded-2xl "}>
          Available
        </button>
        <button className={"px-6 py-2 border-2 rounded-2xl"}>Selected</button>
      </div>
    </div>
  );
};

ToggleButtons.propTypes = {};

export default ToggleButtons;
