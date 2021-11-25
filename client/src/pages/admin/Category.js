import React, { useState, useContext } from "react";
import TableCategory from "../../components/admin/TableCategory";
import Pagination from "../../components/Pagination";
import { Data } from "../../Context";

function Category() {
  const { categories, addCategory, editCategory, deleteCategory } =
    useContext(Data);

  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });

  const [category, setCategory] = useState({ name: "" });

  const closeHandler = () => {
    setCategory({ name: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addCategory(category);
    } else {
      editCategory(status.id, category);
    }
    setStatus({
      id: "",
      action: "Thêm",
    });
    setCategory({ name: "" });
  };

  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá danh mục này không?"
    );
    if (option) {
      deleteCategory(id);
    }
  };

  const editHandler = (id, name) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setCategory({ name: name });
    document.querySelector(".openmodal").click();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const numberPage = Math.ceil(categories.length / itemPerPage);
  const currCategories = categories.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid">
        <h2 className="text-center my-4">Quản lý danh mục sản phẩm</h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm danh mục sản phẩm mới
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
                    {status.action} danh mục sản phẩm
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
                    Nhập tên danh mục
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tên danh mục sản phẩm"
                    name="name"
                    value={category.name}
                    onChange={(e) =>
                      setCategory((prev) => ({ ...prev, name: e.target.value }))
                    }
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
                    className={
                      category.name === ""
                        ? "btn btn-primary disabled"
                        : "btn btn-primary"
                    }
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
            <TableCategory
              categories={currCategories}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
              offset={(currentPage - 1) * itemPerPage}
            />
          </div>
          {numberPage > 1 ? (
            <Pagination
              numberPage={numberPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Category;
