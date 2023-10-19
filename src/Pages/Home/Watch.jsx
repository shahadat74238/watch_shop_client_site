import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Watch = ({ watch }) => {
  const { _id, image, name, brand, price } = watch;
  return (
    <div className="bg-[#f5f5f5]">
      <div className="overflow-hidden">
        <img
          className="scale-100 hover:scale-110 duration-500"
          src={image}
          alt="Loading Image"
        />
      </div>
      <div className="text-center  pt-3">
        <h3 className="text-2xl font-bold">{brand}</h3>
        <h1 className="text-lg text-secondary-color my-2 font-semibold">
          {name}
        </h1>
        <p className="font-bold">${price}</p>
        <div className="mt-3">
          <Link to={`/watches/${_id}`}>
            <button className="primary-btn text-white w-full">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Watch.propTypes = {
  watch: PropTypes.object,
};

export default Watch;
