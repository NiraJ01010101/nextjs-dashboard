"use client";
import Image from "next/image";
import React from "react";

function ProductsList() {
  const productsList = [
    {
      image:
        "https://images.unsplash.com/photo-1643408875993-d7566153dd89?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Crypter - NFT",
      subtitle: "Ul kit",
      price: "2,453.80",
      status: "Active",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543312872-6800b9d9e30f?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bento Matte 3D",
      subtitle: "illustration 1.0",
      price: "105.60",
      status: "Deactive",
    },
    {
      image:
        "https://images.unsplash.com/photo-1658211312038-4293c7bdd37e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Excellent material",
      subtitle: "3D chair",
      price: "648.60",
      status: "Active",
    },
    {
      image:
        "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fleet - travel",
      subtitle: "shopping kit",
      price: "648.60",
      status: "Active",
    },
  ];

  return (
    <>
      <div className="p-4 bg-backgroundPrimary rounded-md">
        <h2 className="text-textPrimary text-2xl font-bold">
          <span className="bg-[#afe6fd] w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
          Popular products
        </h2>

        <div className="flex justify-between items-center mt-5">
          <p className="text-textPrimary text-opacity-50">Products</p>
          <p className="text-textPrimary text-opacity-50">Earning</p>
        </div>
        <div className="border-t border-textSecondary border-opacity-50 my-4"></div>

        {productsList?.map((product, i) => (
          <div
            className="product-list flex justify-between items-center my-8"
            key={i}
          >
            <div className="w-full md:w-5/6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg overflow-hidden h-16 w-16">
                  <Image
                    alt="image.com"
                    src={`${product.image}`}
                    width={100}
                    height={20}
                  />
                </div>
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="font-semibold">{product.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/6">
              <p className="font-semibold">${product.price}</p>
              <div
                className={`flex items-center justify-center rounded-lg text-sm p-1 ${
                  product.status === "Active"
                    ? "bg-accent1 text-[#4d793c]"
                    : "bg-accent2 rounded-lg text-[#bc5e51]"
                }`}
              >
                {product.status}
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="w-full text-center border border-textSecondary p-3 rounded-xl"
        >
          All products
        </button>
      </div>
    </>
  );
}

export default ProductsList;
