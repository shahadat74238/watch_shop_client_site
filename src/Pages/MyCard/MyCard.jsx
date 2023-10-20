import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

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
        fetch(`http://localhost:3001/card/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0){
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = loadedCardWatch.filter(
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
      <div className="container mx-auto px-5 md:px-10 my-20">
        <h1 className="uppercase text-center text-3xl font-bold my-10">
          My Card Products
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
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
    </div>
  );
};

export default MyCard;
