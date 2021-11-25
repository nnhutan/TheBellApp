import React from "react";

function TableProduct({ products, editHandler, deleteHandler, offset }) {
  return (
    <table className="table table-responsive table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th style={{ minWidth: "100px" }}>Hình ảnh</th>
          <th>Giá</th>
          <th style={{ minWidth: "100px" }}>Danh mục</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1 + offset}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.thumbnail}
                  alt="imagea"
                  style={{ width: "68px" }}
                />
              </td>
              <td>{item.price}</td>
              <td>{item.category_name}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editHandler(item.id, item)}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableProduct;
