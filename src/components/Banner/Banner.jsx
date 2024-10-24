import PropTypes from "prop-types";

const Banner = ({ handleAddCoin }) => {
  return (
    <div>
      <div
        className=" bg-slate-800 text-center py-16 flex flex-col justify-center items-center mt-10 rounded-2xl space-y-8"
        style={{ backgroundImage: "url('/assets/bg-shadow.png')" }}
      >
        <img className="w-36" src="/assets/banner-main.png" alt="" />
        <h2 className="text-4xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-2xl text-slate-200">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={handleAddCoin}
          className=" btn mt-5 bg-yellow-400 text-slate-800 px-5 py-2 rounded-lg "
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleAddCoin: PropTypes.func,
};

export default Banner;
