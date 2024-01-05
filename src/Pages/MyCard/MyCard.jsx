import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCard = () => {
  const { user } = useContext(AuthContext);
  const [cardWatch, setCardWatch] = useState([]);
  console.log("m-7", user.email);

  useEffect(() => {
    fetch(
      `https://watch-server-jfc727j6g-md-shahadat-hosens-projects.vercel.app/userCard/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("m-12", data);
        setCardWatch(data);
      });
  }, [user.email]);

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
              const remaining = cardWatch.filter((watch) => watch._id !== _id);
              setCardWatch(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      {!cardWatch.length > 0 ?  (
        <div className="h-screen container mx-auto px-5 flex justify-center items-center  md:px-10">
          <div>
            <h1 className="text-center text-primary-color dark:text-white font-bold text-2xl md:text-5xl uppercase">
              You do not added Product!
            </h1>
          </div>
        </div>)
        :
        (
          <div className="container mx-auto px-5 md:px-10 my-20">
            <h1 className="uppercase text-primary-color dark:text-white text-center text-3xl font-bold my-10">
              My Card Products
            </h1>
            <div className="overflow-x-auto dark:text-white">
              <table className="table">
                {/* head */}
                <thead className="dark:text-white text-black">
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {cardWatch.map((product, index) => (
                  <tbody key={product._id} className="text-black dark:text-white">
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
        ) 
      }
    </div>
  );
};

export default MyCard;
