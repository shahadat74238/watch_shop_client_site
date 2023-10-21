import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = () => {
  const loadedCardWatch = useLoaderData();
  const [cardWatch, setCardWatch] = useState(loadedCardWatch);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/card/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cardWatch.filter(
                (watch) => watch._id !== _id
              );
              setCardWatch(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      {
        cardWatch.length > 0 ?
      <div className="container mx-auto px-5 md:px-10 my-20">
        <h1 className="uppercase text-center text-3xl font-bold my-10">
          My Card Products
        </h1>
        <div className="overflow-x-auto dark:text-white">
          <table className="table">
            {/* head */}
            <thead className="dark:text-white">
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {cardWatch.map((product, index) => (
              <tbody key={product._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="primary-btn text-white w-32"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      : 
      (
        <div className="h-screen container mx-auto px-5 flex justify-center items-center px-5 md:px-10">
            <div>
            <h1 className="text-center font-bold text-2xl md:text-5xl uppercase">You do not added Product!</h1>
            </div>
          </div>
      )
      }
    </div>
  );
};

export default MyCard;
