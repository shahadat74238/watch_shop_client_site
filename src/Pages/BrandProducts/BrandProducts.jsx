import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const BrandProducts = () => {
  const brandProducts = useLoaderData();
  console.log(brandProducts);

  return (
    <div>
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 md:grid-cols-2  gap-6">
          {brandProducts.length > 0 ? (
            brandProducts.map((product) => (
              <div key={product._id}>
                <div className="bg-[#f5f5f5]">
                  <div className="overflow-hidden">
                    <img
                      className="scale-100 hover:scale-110 duration-500"
                      src={product.image}
                      alt="Loading Image"
                    />
                  </div>
                  <div className="text-center  pt-3">
                    <h3 className="text-2xl font-bold">{product.brand}</h3>
                    <h1 className="text-lg text-secondary-color my-2 font-semibold">
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
            ))
          ) : (
            <div>
              <h1>Data not found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
