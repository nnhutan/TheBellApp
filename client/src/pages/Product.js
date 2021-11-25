import React, { useState, useContext } from "react";
import SidebarCategory from "../components/SidebarCategory";
import ProductGrid from "../components/ProductGrid";
import { Data } from "../Context";

function Product() {
  const DataGlobal = useContext(Data);
  const { products, categories, addToCart } = DataGlobal;
  const [currCate, setCurrCate] = useState("all");

  var productsDisplayed =
    currCate === "all"
      ? products
      : products.filter((item) => item.category_id === currCate);
  const setProductDisplayed = (cId) => {
    console.log(cId);
    setCurrCate(cId);
  };
  return (
    <div className="product-page">
      <div className="container py-4">
        <div className="row g-2">
          <div className="col-lg-2">
            <SidebarCategory
              categories={categories}
              setProductDisplayed={setProductDisplayed}
            />
          </div>
          <div className="col-lg-10">
            <ProductGrid products={productsDisplayed} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
