import React, { useContext, useState } from "react";
import Pagination from "../../components/Pagination";
import TableProduct from "../../components/admin/TableProduct";
import { Data } from "../../Context";

function Product() {
  const { categories, products, addProduct, editProduct, deleteProduct } =
    useContext(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category_id: "",
    thumbnail: "",
    price: "",
    discount: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const closeHandler = () => {
    setProduct({
      title: "",
      description: "",
      category_id: "",
      thumbnail: "",
      price: "",
      discount: "",
    });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addProduct(product);
    } else {
      editProduct(status.id, product);
    }
    setProduct({
      title: "",
      description: "",
      category_id: "",
      thumbnail: "",
      price: "",
      discount: "",
    });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá sản phẩm này không?"
    );
    if (option) {
      deleteProduct(id);
    }
  };

  const editHandler = (id, product) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setProduct(product);
    document.querySelector(".openmodal").click();
  };

  const productPerPage = 5;
  const numberPage = Math.ceil(products.length / productPerPage);
  const currProducts = products.slice(
    (currentPage - 1) * productPerPage,
    currentPage * productPerPage
  );

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid">
        <h2 className="text-center my-4">Quản lý sản phẩm</h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm sản phẩm mới
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {status.action} sản phẩm
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="name" className="form-label">
                    Tên sản phẩm
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tên sản phẩm"
                    name="title"
                    value={product.title}
                    onChange={changeHandler}
                  />
                  <label htmlFor="description" className="form-label">
                    Mô tả
                  </label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    placeholder="Mô tả"
                    name="description"
                    value={product.description || ""}
                    onChange={changeHandler}
                  ></textarea>
                  <label htmlFor="thmbnail" className="form-label">
                    Hình ảnh
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Link hình ảnh"
                    name="thumbnail"
                    value={product.thumbnail}
                    onChange={changeHandler}
                  />
                  <label htmlFor="name" className="form-label">
                    Danh mục sản phẩm
                  </label>
                  <select
                    name="category_id"
                    id="category_id"
                    className="form-control"
                    onChange={(e) => {
                      changeHandler(e);
                      setProduct((prev) => ({
                        ...prev,
                        category_name: categories.find(
                          (item) => item.id === e.target.value
                        ).name,
                      }));
                    }}
                    value={product.category_id}
                  >
                    <option value="">-- Chọn --</option>
                    {categories.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="price" className="form-label">
                    Giá
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Giá sản phẩm"
                    name="price"
                    value={product.price}
                    onChange={changeHandler}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={submitHandler}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <TableProduct
              products={currProducts}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
              offset={(currentPage - 1) * productPerPage}
            />
          </div>

          {numberPage > 1 ? (
            <Pagination
              numberPage={numberPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
