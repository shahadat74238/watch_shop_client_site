import { AiFillGift } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Featured = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-primary-color py-10 lg:py-20 ">
      <div className="container px-5 md:px-10 mx-auto  grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-2 ">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white "
        >
          <h1 className="text-3xl font-bold">FEATURE PRODUCT</h1>
          <h2 className="text-3xl py-5">
            Constantan <br /> Chronograph Watches
          </h2>
          <p className="pb-3 text-justify">
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi. Vestibulum purus Vivamus aliquet elit ac nisl. Suspendisse non
            nisl sit amet velit hendreritrutrum. Sed augue ipsum, egestas nec,
            vestibulum et, malesuada adipiscing, dui. Curabitur
            ullamcorperultricies nisi. Sed aliquam ultrices mauris. Nullam
            cursus lacinia erat.
          </p>
          <div className="flex justify-between">
            <div>
              <p>
                {" "}
                <MdOutlineVerified className="inline text-secondary-color text-3xl mr-3" />{" "}
                Warranty: 2 Year International
              </p>
            </div>
            <div>
              <p>
                <AiFillGift className="inline text-secondary-color text-3xl mr-3" />{" "}
                Free Gift Boxes
              </p>
            </div>
          </div>
          <div className="mt-10">
            <button className="primary-btn w-32 text-white">
              View Details
            </button>
          </div>
        </div>
        <div data-aos="fade-down"
          data-aos-duration="1000" className="flex justify-center">
          <img
            className="md:h-80 lg:h-96"
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/clock.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
