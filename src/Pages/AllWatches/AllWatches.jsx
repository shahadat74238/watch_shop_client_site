import { Link, useLoaderData } from "react-router-dom";
import Brand from "../Home/Brand";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AllWatches = () => {
  const watches = useLoaderData();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="container my-10 md:my-20 mx-auto px-5 md:px-10">
        <Brand />
        <div className="mt-10 md:mt-20">
          <h1 className="text-4xl dark:text-white uppercase font-bold mb-10 text-center ">
            New Watches
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-6">
            {watches.map((watch) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-[#f5f5f5] "
                key={watch._id}
              >
                <div className="bg-[#f5f5f5] dark:bg-primary-color">
                  <div className="overflow-hidden">
                    <img
                      className="scale-100 hover:scale-110 h-60 w-full object-cover duration-500"
                      src={watch.image}
                      alt="Loading Image"
                    />
                  </div>
                  <div className="text-center  pt-3">
                    <h3 className="text-2xl dark:text-white font-bold">{watch.brand}</h3>
                    <h1 className="text-lg text-secondary-color my-2 font-semibold">
                      {watch.name}
                    </h1>
                    <p className="font-bold dark:text-white">${watch.price}</p>
                    <div className="mt-3">
                      <Link to={`/watches/${watch._id}`}>
                        <button className="primary-btn text-white w-full">
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
    </div>
  );
};

export default AllWatches;
