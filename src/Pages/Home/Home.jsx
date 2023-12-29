import { useLoaderData } from "react-router-dom";
import Watch from "./Watch";
import Brand from "./Brand";
import Featured from "./Featured/Featured";
import Banner from "./Banner";

const Home = () => {
  const watches = useLoaderData();


  return (
    <div>
      <Banner />
      <div>
        <div className="container px-5 md:px-10 mx-auto my-20 grid gap-6 ">
          <Brand />
        </div>
        <div>
          <Featured />
        </div>
        {/* Card Container */}
        <div className="py-20">
          <div className="container  px-5 md:px-10 mx-auto  grid gap-6 ">
            <h1 className="text-4xl text-primary-color dark:text-white uppercase font-bold mb-10 text-center ">
              New Watches
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-6">
              {watches.slice(0, 4).map((watch) => (
                <Watch key={watch._id} watch={watch} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
