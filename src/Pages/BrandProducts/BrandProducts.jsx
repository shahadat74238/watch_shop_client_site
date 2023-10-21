import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "../../Shared/Slider/Slider";

const BrandProducts = () => {
  const brandProducts = useLoaderData();

  return (
    <div>
      <div>
        {brandProducts.length > 0 ? (
          <div>
            <Slider />
            <div className="container mx-auto py-10 justify-between items-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 my-10 md:grid-cols-2  gap-6">
                {brandProducts.map((product) => (
                  <div key={product._id}>
                    <div className="bg-[#f5f5f5] dark:bg-primary-color">
                      <div className="overflow-hidden">
                        <img
                          className="scale-100 hover:scale-110 h-80 w-full object-cover duration-500"
                          src={product.image}
                          alt="Loading Image"
                        />
                      </div>
                      <div className="text-center  py-3">
                        <h3 className="text-2xl dark:text-white font-bold">{product.brand}</h3>
                        <h1 className="text-lg dark:text-white text-secondary-color my-2 font-semibold">
                          {product.name}
                        </h1>
                        <p className="font-bold">${product.price}</p>
                        <div className="mt-3 flex justify-between px-5">
                          <Link to={`/update/${product._id}`}>
                            <button className="primary-btn text-white w-28">
                              Update
                            </button>
                          </Link>
                          <Link to={`/watches/${product._id}`}>
                            <button className="primary-btn text-white w-24">
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center px-5 md:px-10">
            <div>
            <h1 className="text-center font-bold text-2xl md:text-5xl uppercase">This Brands Has No Products !</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
