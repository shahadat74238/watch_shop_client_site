import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Rating from "react-rating";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const WatchDetails = () => {
  const watch = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { image, name, brand, type, price, rating, description } = watch;

  const handleAddToCard = () => {
    const watchAdded = { email, image, name, brand, type, price, rating };
    console.log(watchAdded);

    // send data to mongodb.
    fetch(
      "https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/card",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(watchAdded),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added Card Successfully!");
      });
  };

  return (
    <div>
      <div className="container px-5 md:px-10 mx-auto grid items-center gap-6 grid-cols-1 md:grid-cols-2 h-screen my-10">
        <div className="w-full h-full">
          <img
            className="w-full h-[90vh] object-cover"
            src={image}
            alt="Loading Image"
          />
        </div>
        <div className="dark:text-white">
          <p className="text-lg font-semibold">Price: ${price}</p>
          <h2 className="text-3xl font-bold">Model: {name}</h2>
          <div className="flex justify-between items-center my-2">
            <h1 className="text-2xl font-semibold">Brand: {brand}</h1>
            <div className="text-center">
              <h3 className="font-medium">Type: {type}</h3>
              <p className="">
                <Rating
                  emptySymbol={
                    <MdOutlineStarOutline className="text-2xl text-yellow-500" />
                  }
                  fullSymbol={
                    <MdOutlineStarPurple500 className="text-2xl text-yellow-500 " />
                  }
                  readonly
                  initialRating={rating}
                  fractions={2}
                />
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <h1 className="text-center font-bold text-2xl underline mb-3">
            Specification
          </h1>
          <p className="font-semibold text-justify">{description}</p>
          <div className="mt-5">
            <button
              onClick={handleAddToCard}
              className="primary-btn w-36 text-white"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default WatchDetails;
