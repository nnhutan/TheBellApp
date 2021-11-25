import React from "react";

function TableCustomerContact({ customerContact, deleteHandler, offset }) {
  return (
    <table className="table table-responsive table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>
        {customerContact.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1 + offset}</td>
              <td>{item.lastname}</td>
              <td>{item.firstname}</td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(item.id, true)}
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

export default TableCustomerContact;
