import React from "react";

function TableCategory({ categories, editHandler, deleteHandler, offset }) {
  return (
    <table className="table table-responsive table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>
        {categories.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1 + offset}</td>
              <td>{item.name}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editHandler(item.id, item.name)}
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

export default TableCategory;
