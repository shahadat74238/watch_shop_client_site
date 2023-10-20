import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetch(
      "https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div>
      <div className="">
        <h1 className="text-4xl uppercase font-bold mb-10 text-center">
          Our Trusted Brands
        </h1>
        <div className="">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand._id}>
                <Link to={`/brand/${brand.name}`}>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                    className="cursor-pointer h-40 w-full  relative rounded-lg overflow-hidden border"
                  >
                    <div className="absolute duration-500 hover:bg-primary-color/90 bg-primary-color/60   w-full flex items-center justify-center h-40">
                      <div className="">
                        <h1 className=" text-white text-4xl uppercase font-bold ">
                          {brand.name}
                        </h1>
                      </div>
                    </div>
                    <div className="h-40">
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
