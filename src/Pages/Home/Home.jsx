import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Watch from "./Watch";
import Brand from "./Brand";

const Home = () => {
  const watches = useLoaderData();
  

  return (
    <div>
      <Banner />
      <div className="container px-5 md:px-10 mx-auto my-20 grid gap-6 lg:grid-cols-4 ">
        <div className="lg:col-span-1 border">
          <Brand />
        </div>
        {/* Card Container */}
        <div className="lg:col-span-3">
          <h1 className="text-5xl font-bold mb-10 text-center">New Watches</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">
            {watches.map((watch) => (
              <Watch key={watch._id} watch={watch} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
