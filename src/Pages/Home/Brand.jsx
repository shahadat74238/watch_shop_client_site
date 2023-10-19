import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div>
      <div className="px-5">
        <h1 className="text-3xl uppercase underline font-bold mb-10 text-center">
          Our Brands
        </h1>
        <div className="">
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand._id}>
                <Link to={`/brand/${brand.name}`}>
                  <div className="cursor-pointer h-10 w-full relative rounded overflow-hidden border">
                    <div className="absolute duration-500 hover:bg-primary-color/60  w-full flex items-center justify-center">
                      <div className="h-10">
                        <h1 className=" text-secondary-color text-2xl font-bold ">
                          {brand.name}
                        </h1>
                      </div>
                    </div>
                    <div className="h-10">
                      <img
                        className="object-cover h-full w-full"
                        src={brand.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Brand;
