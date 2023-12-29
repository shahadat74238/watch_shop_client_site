import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="md:h-screen h-[60vh] bg-[url('https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE=')] bg-top bg-cover bg-no-repeat">
              <div className="bg-black/60 md:h-screen h-[60vh]">
                <div className="container mx-auto flex justify-center px-5 md:px-10 items-center  h-full">
                  <div className="text-center">
                    <p className="text-white text-xl uppercase ">
                      Extra 20% off
                    </p>
                    <h1 className=" font-semibold uppercase pt-5 pb-2 text-white text-4xl md:text-7xl">
                      {" "}
                      Spring
                    </h1>
                    <h1 className=" font-semibold uppercase pt-5 pb-2 text-white text-4xl md:text-7xl">
                      {" "}
                      Collection
                    </h1>
                    <div className="mt-10">
                      <button className="primary-btn !rounded-none text-white w-32">
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:h-screen h-[60vh] bg-[url('https://thumbs.dreamstime.com/b/luxury-watches-27723897.jpg')] bg-top bg-cover bg-no-repeat">
              <div className="bg-black/60 md:h-screen h-[60vh]">
                <div className="container mx-auto justify-center flex px-5 md:px-10 items-center  h-full">
                  <div className="text-center">
                    <p className="text-white text-xl uppercase ">
                      Extra 20% off
                    </p>
                    <h1 className=" font-semibold uppercase pt-5 pb-2 text-white text-4xl md:text-7xl">
                      {" "}
                      New
                    </h1>
                    <h1 className=" font-semibold uppercase pt-5 pb-2 text-white text-4xl md:text-7xl">
                      {" "}
                      Arrivals
                    </h1>
                    <div className="mt-10">
                      <button className="primary-btn !rounded-none text-white w-32">
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:h-screen h-[60vh] bg-[url('https://hodinkee.imgix.net/uploads/images/85867caf-a6ca-45ec-8abc-eae50c39cfd0/WODHEROFINAL4.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12')] bg-top bg-cover bg-no-repeat">
              <div className="bg-black/60 md:h-screen h-[60vh]">
                <div className="container mx-auto flex justify-center px-5 md:px-10 items-center  h-full">
                  <div className="text-center">
                    <p className="text-white text-xl uppercase ">
                      Extra 20% off
                    </p>
                    <h1 className=" font-semibold uppercase pt-5 pb-2 text-white text-4xl md:text-7xl">
                      {" "}
                      Exclusive
                    </h1>
                    <h1 className=" font-semibold uppercase pt-5 pb-2 text-white text-4xl md:text-7xl">
                      {" "}
                      Collection
                    </h1>
                    <div className="mt-10">
                      <button className="primary-btn !rounded-none text-white w-32">
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
