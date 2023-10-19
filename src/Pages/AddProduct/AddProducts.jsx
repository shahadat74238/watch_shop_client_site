const AddProducts = () => {
  const handleAddWatch = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newWatch = {
      image,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };
    console.log(newWatch);

    fetch('http://localhost:3001/watches', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(newWatch)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  };

  return (
    <div className="bg-[url('https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider3.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="min-h-screen bg-black/50 pb-10">
        <div className="h-[40vh]   bg-cover bg-no-repeat bg-center">
          <h1 className="text-3xl pt-[20vh] text-white font-bold text-center uppercase">
            Add New Watch
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="w-5/6 mx-auto">
            <div className=" bg-primary-color/80 text-secondary-color lg:py-16 p-5 lg:px-32 space-y-8">
              <form onSubmit={handleAddWatch}>
                <div className="md:flex justify-between gap-6">
                  <div className="flex-1">
                    <div className="pb-6">
                      <p className="pb-4">Image</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="text "
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
                        name="name"
                        placeholder="Enter watch name"
                      />
                    </div>
                    <div className="pb-6">
                      <p className="pb-4">Brand Name</p>

                      <select className="select w-full rounded-none" required name="brand">
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

                      <select className="select w-full rounded-none" required name="type">
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
                        type="text "
                        required
                        name="price"
                        placeholder="Enter watch price"
                      />
                    </div>
                    <div className="pb-6">
                      <p className="pb-4">Rating</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="text"
                        required
                        name="rating"
                        placeholder="Enter watch rating"
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-6">
                  <p className="pb-4">Description</p>
                  <textarea
                    className="block w-full py-3 px-[1rem]"
                    type="text "
                    required
                    name="description"
                    placeholder="Write Short Description"
                  />
                </div>
                <div className="flex justify-center  my-5">
                  <input
                    type="submit"
                    value="Add New Watch"
                    className="w-full primary-btn !rounded-none text-white"
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

export default AddProducts;
