import PropTypes from "prop-types";

const Banner = ({ handleAddCoin }) => {
  return (
    <div>
      <div
        className=" bg-slate-800 text-center py-10 flex flex-col justify-center items-center mt-10 rounded-2xl space-y-5"
        style={{ backgroundImage: "url('/public/assets/bg-shadow.png')" }}
      >
        <img className="w-36" src="/public/assets/banner-main.png" alt="" />
        <h2 className="text-4xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-2xl text-slate-200">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={handleAddCoin}
          className="mt-5 bg-green-500 text-white px-5 py-2 rounded"
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
