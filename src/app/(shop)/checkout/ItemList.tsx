"use client";

import React, { useState } from "react";

// components
import ProductCheckout from "@/components/product-checkout/product-checkout";
import { ProductDetails } from "@/components/product/product-card";

function ItemList() {
  const [products, setProducts] = useState<ProductDetails[]>([
    {
      img: "/vegetables.jpeg",
      price: 40000,
      rating: 4.9,
      sold: 40,
      name: "Kembang Kol",
      unit: "kg",
      itemCount: 1,
    },
    {
      img: "/vegetables.jpeg",
      price: 25000,
      rating: 4.9,
      sold: 40,
      name: "Kentang Gondangdia",
      unit: "kg",
      itemCount: 2,
    },
  ]);
  return (
    <>
      <div className="text-lg font-semibold">Barang yang dibeli</div>

      {products.map((product, index) => (
        <ProductCheckout
          key={`productCheckout${index}`}
          productDetails={product}
          onDeleteItem={() => {
            const updatedProducts = [...products];
            updatedProducts.splice(index, 1);
            setProducts(updatedProducts);
          }}
          onChangeItemCount={(count) => {
            const updatedProducts = [...products];
            updatedProducts[index].itemCount = count;
            setProducts(updatedProducts);
          }}
        />
      ))}
    </>
  );
}

export default ItemList;
