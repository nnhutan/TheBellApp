import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Context";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import NumberFormat from "react-number-format";

function ProductDetail() {
  const { id } = useParams();
  const {
    state,
    products,
    comments,
    addComment,
    editComment,
    deleteComment,
    addToCart,
  } = useContext(Data);
  const product = products.find((item) => item.id === id);

  const addHandler = (content) => addComment(id, content);
  const commentsDisplayed = comments.filter((item) => item.product_id === id);
  if (product === undefined)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <div className="product-detail-page">
      <div className="container mt-3 mb-5">
        <nav aria-label="breadcrumb" className="ms-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/product">Sản phẩm</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Chi tiết sản phẩm
            </li>
          </ol>
        </nav>
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="img text-center">
              <img src={product.thumbnail} alt="productdetail" className="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="">
              <h3 className="title">{product.title}</h3>
              <p className="text-danger fw-bold fs-5">
                <NumberFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" ₫ "}
                />
              </p>
              <p className="text-secondary fst-italic">
                {product.description !== undefined &&
                  product.description.slice(0, 250)}
                ...
              </p>
              <button
                className="btn btn-outline-primary py-2 px-4"
                onClick={() => addToCart(id)}
              >
                <i className="bi bi-cart-plus"></i> Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="comment bg-light">
        <Comment
          comments={commentsDisplayed}
          addComment={addHandler}
          user={state.user}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
