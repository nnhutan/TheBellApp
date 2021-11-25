import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Pagination from "./Pagination";

function ProductGrid({ products, addToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;
  const numberPage = Math.ceil(products.length / itemPerPage);
  const currDisplay = products.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );
  return (
    <div className="container">
      <div className="row g-2">
        {currDisplay.map((item) => (
          <div className="col-lg-3" key={item.id}>
            <Link
              to={"/product-detail/" + item.id}
              className="text-decoration-none"
            >
              <Product product={item} addToCart={addToCart} />
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination mt-3 d-flex justify-content-center">
        {numberPage > 1 ? (
          <Pagination
            numberPage={numberPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ProductGrid;
