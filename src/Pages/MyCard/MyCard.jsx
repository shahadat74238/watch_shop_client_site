import { useLoaderData } from "react-router-dom";

const MyCard = () => {
  const cardWatch = useLoaderData();

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:3001/card/${_id}`,{
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  return (
    <div>
      <div className="container mx-auto px-5 md:px-10 my-20">
        <h1>My card page</h1>
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
                  <td><button onClick={()=>handleDelete(product._id)} className="primary-btn text-white w-32">Delete</button></td>
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
