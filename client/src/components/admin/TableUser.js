import React from "react";

function TableUser({ users, editHandler, deleteHandler, currUser, offset }) {
  return (
    <table className="table table-responsive table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ Tên</th>
          <th>Email</th>
          <th>SĐT</th>
          <th style={{ minWidth: "80px" }}>Địa chỉ</th>
          <th>Quyền</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1 + offset}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td>{item.address}</td>
              <td>{item.role_name}</td>
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
                  className={
                    item.id === currUser.id
                      ? "btn btn-danger disabled"
                      : "btn btn-danger"
                  }
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

export default TableUser;
