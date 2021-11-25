import React, { useState, useContext } from "react";
import TableCustomerContact from "../../components/admin/TableCustomerContact";
import Pagination from "../../components/Pagination";
import { Data } from "../../Context";

function Contact() {
  const {
    publicContact,
    customerContact,
    addPublicContact,
    editPublicContact,
    deletePublicContact,
    deleteCustomerContact,
  } = useContext(Data);
  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [contact, setContact] = useState({ type: "", content: "" });

  const closeHandler = () => {
    setContact({ type: "", content: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addPublicContact(contact);
    } else {
      editPublicContact(status.id, contact);
    }
    setContact({ type: "", content: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const deleteHandler = (id, isCustomerContact = "false") => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá thông tin liên hệ này không?"
    );
    if (option) {
      if (isCustomerContact) deleteCustomerContact(id);
      else deletePublicContact(id);
    }
  };

  const editHandler = (id, contact) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setContact(contact);
    document.querySelector(".openmodal").click();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const offset = (currentPage - 1) * itemPerPage;
  const numberPage = Math.ceil(customerContact.length / itemPerPage);
  const currDisplay = customerContact.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid">
        <h2 className="text-center my-4">
          Quản lý các thông tin liên hệ của công ty
        </h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm thông tin liên hệ mới
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
                    {status.action} thông tin liên hệ
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
                  <label htmlFor="type" className="form-label">
                    Nhập loại liên hệ
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Loại liên hệ"
                    name="type"
                    value={contact.type}
                    onChange={(e) =>
                      setContact((prev) => ({ ...prev, type: e.target.value }))
                    }
                  />
                  <label htmlFor="content" className="form-label">
                    Nội dung
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Nội dung"
                    name="content"
                    value={contact.content}
                    onChange={(e) =>
                      setContact((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
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
                      contact.name === ""
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
          <table className="table table-responsive table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Loại</th>
                <th>Nội dung</th>
                <th style={{ width: "80px" }}></th>
                <th style={{ width: "80px" }}></th>
              </tr>
            </thead>
            <tbody>
              {publicContact.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.type}</td>
                    <td>{item.content}</td>
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
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center my-4">
          Quản lý các thông tin liên hệ của khách hàng
        </h2>
        <div className="container">
          <div className="overflow-auto">
            <TableCustomerContact
              customerContact={currDisplay}
              deleteHandler={deleteHandler}
              offset={offset}
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

export default Contact;
