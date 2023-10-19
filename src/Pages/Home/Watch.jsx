import { PropTypes } from "prop-types";

const Watch = ({ watch }) => {
  const { image, name, brand,  price, } = watch;
  return (
    <div className="bg-[#f5f5f5]">
      <div className="overflow-hidden">
        <img className="scale-100 hover:scale-110 duration-500" src={image} alt="Loading Image" />
      </div>
      <div className="text-center pt-3">
        <h3>{brand}</h3>
        <h1>{name}</h1>
        <p>${price}</p>
        <div>
            <button className="primary-btn text-white w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

Watch.propTypes = {
  watch: PropTypes.object,
};

export default Watch;
