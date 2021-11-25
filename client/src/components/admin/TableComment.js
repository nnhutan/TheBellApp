import React from "react";

function TableComment({ comments, deleteHandler, offset }) {
  return (
    <table className="table table-hover table-responsive">
      <thead>
        <tr>
          <th>STT</th>
          <th>Thành viên</th>
          <th>Sản phẩm</th>
          <th>Nội dung</th>
          <th>Ngày đăng</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {comments.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1 + offset}</td>
            <td>{item.fullname}</td>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.created_at}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(item.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComment;
