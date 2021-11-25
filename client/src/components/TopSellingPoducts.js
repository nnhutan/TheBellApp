import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { Data } from "../Context";

function TopSellingPoducts() {
  const DataGlobal = useContext(Data);
  const { products, addToCart } = DataGlobal;
  return (
    <div className="top-selling bg-white mb-5">
      <h3 className="text-center py-4">Sản phẩm bán chạy nhất</h3>
      <div className="container">
        <div className="row g-3">
          {products
            .filter((item) => item.category_name === "Xiaomi")
            .map((product, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <Link
                  to={"/product-detail/" + product.id}
                  className="text-decoration-none"
                >
                  <Product product={product} addToCart={addToCart} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopSellingPoducts;
