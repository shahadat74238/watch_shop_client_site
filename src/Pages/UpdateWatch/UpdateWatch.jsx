import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateWatch = () => {
  const watch = useLoaderData();
  const { _id, image, name, price, rating } = watch;

  const handleUpdateWatch = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const updatedWatch = {
      image,
      name,
      brand,
      type,
      price,
      rating,
    };
    console.log(updatedWatch);

    fetch(
      `https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/watches/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedWatch),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Watch Updated!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-[url('https://www.esquireme.com/cloud/2021/09/08/BjTwYX8x-Seiko-Automatic-Diver-(1)-1200x800.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="min-h-screen bg-black/50 pb-10">
        <div className="h-[40vh]   bg-cover bg-no-repeat bg-center">
          <h1 className="text-3xl pt-[20vh] text-white font-bold text-center uppercase">
            Update Watch Details
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="w-5/6 mx-auto">
            <div className=" bg-primary-color/80 text-secondary-color lg:py-16 p-5 lg:px-32 space-y-8">
              <form onSubmit={handleUpdateWatch}>
                <div className="md:flex justify-between gap-6">
                  <div className="flex-1">
                    <div className="pb-6">
                      <p className="pb-4">Image</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="text"
                        defaultValue={image}
                        required
                        name="image"
                        placeholder="Enter watch image URL"
                      />
                    </div>
                    <div className="pb-6">
                      <p className="pb-4">Name</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="text"
                        required
                        defaultValue={name}
                        name="name"
                        placeholder="Enter watch name"
                      />
                    </div>
                    <div className="pb-6">
                      <p className="pb-4">Brand Name</p>

                      <select
                        className="select w-full rounded-none"
                        required
                        name="brand"
                      >
                        <option>Rolex</option>
                        <option>Apple</option>
                        <option>Casio</option>
                        <option>Omega</option>
                        <option>Seiko</option>
                        <option>Citizen</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="pb-6">
                      <p className="pb-4">Type</p>

                      <select
                        className="select w-full rounded-none"
                        required
                        name="type"
                      >
                        <option>Smartwatch</option>
                        <option>Dual Time Watch</option>
                        <option>Digital Watch</option>
                        <option>Sports Watch</option>
                      </select>
                    </div>
                    <div className="pb-6">
                      <p className="pb-4">Price</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="number"
                        required
                        defaultValue={price}
                        name="price"
                        placeholder="Enter watch price"
                      />
                    </div>
                    <div className="pb-6">
                      <p className="pb-4">Rating</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="number"
                        required
                        defaultValue={rating}
                        name="rating"
                        placeholder="Enter watch rating"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center  my-5">
                  <input
                    type="submit"
                    value="Update Watch"
                    className="w-full uppercase primary-btn !rounded-none text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWatch;
