import { useLoaderData } from "react-router-dom";

const BrandProducts = () => {
    const brandProducts = useLoaderData();
    console.log(brandProducts);

    return (
        <div>
            <h1>Brands Products</h1>
            <div>
            {brandProducts.map(product => (
                    <div key={product._id}>
                        <h1>{product.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandProducts;