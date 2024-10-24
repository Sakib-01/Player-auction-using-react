import PropTypes from "prop-types";
import { FaUser, FaFlag } from "react-icons/fa";

const Player = ({ player, handlePlayerSelected }) => {
  const {
    id,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPrice,
  } = player;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="h-48 w-full rounded-2xl" src={image} alt="Player" />
      </figure>
      <div className="card-body text-start space-y-2">
        <div className="flex gap-3 items-center ">
          <FaUser className="h-16" />
          <h2 className="card-title">{name}</h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <FaFlag />
            <span className="text-gray-500"> {country}</span>
          </p>
          <p className="text-end ">{role}</p>
        </div>
        <hr />
        <p className="font-bold ">Rating</p>
        <h3 className="font-bold ">
          Batting Type : {battingType && battingType}
        </h3>
        <h3 className="font-bold ">
          Bowling Type : {bowlingType && bowlingType}
        </h3>
        <div className="card-actions justify-between flex items-center ">
          <h3 className="font-bold ">Price:${biddingPrice}</h3>
          <button
            onClick={() => handlePlayerSelected(player)}
            className="btn bg-yellow-300"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object,
  handlePlayerSelected: PropTypes.func,
};

export default Player;
