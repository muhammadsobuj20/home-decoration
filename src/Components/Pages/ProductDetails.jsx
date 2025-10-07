import React from "react";
import { useParams } from "react-router";
import { updateList } from "../Utilities/LocalStorage";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) return <p>Loading.......</p>;
  const product = products?.find((p) => p.id === Number(id));
  // console.log("Products from useProducts:", products);

  if (!product) return <p className="text-3xl">Product Not Found.</p>;
  const { name, image, category, price, description } = product || {};

  return (
    <div className="card bg-base-100 border shadow-sm">
      <figure className="h-84 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              product && updateList(product);
            }}
            className="btn btn-outline"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
