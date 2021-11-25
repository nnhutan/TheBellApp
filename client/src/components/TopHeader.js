import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Data } from "../Context";

function TopHeader() {
  const { state, publicContact, logoutHandler } = useContext(Data);
  const clickHandler = () => {
    logoutHandler();
  };

  if (
    publicContact === undefined ||
    state === undefined ||
    logoutHandler === undefined
  )
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <div className="bg-white js-top-header">
      <div
        className="container d-flex justify-content-sm-between justify-content-end align-items-center px-4 py-1"
        style={{ fontSize: "14px" }}
      >
        <div
          className="d-md-flex d-none text-uppercase text-secondary"
          style={{ fontSize: "14px" }}
        >
          <p className="my-0 me-3">
            <i className="bi bi-telephone-fill"></i>{" "}
            {publicContact.length !== 0 &&
              publicContact[0].type + ": " + publicContact[0].content}
          </p>
          <p className="my-0">
            <i className="bi bi-envelope-fill"></i>{" "}
            {publicContact.length !== 0 &&
              publicContact[1].type + ": " + publicContact[1].content}
          </p>
        </div>
        <div className="d-flex align-items-center">
          {!state.isLoggedIn ? (
            <>
              {" "}
              <Link
                to="/login"
                className="me-3 text-secondary text-decoration-none"
              >
                <i className="bi bi-person-fill"></i> Login
              </Link>
              <Link
                className="text-secondary text-decoration-none"
                to="/signup"
              >
                <i className="bi bi-person-plus-fill"></i> Sign Up
              </Link>
            </>
          ) : (
            <>
              {" "}
              <div className=" d-md-flex flex-column justify-content-center me-1">
                <span className="lh-1 fs-6 fst-italic fw-light me-md-0 me-2">
                  Xin chào!
                </span>
                <span className="lh-1 fw-bold">{state.user.fullname}</span>
              </div>
              <div className="btn-group">
                <button
                  className="btn btn-success rounded-circle"
                  // style={{ padding: "1px 10px", lineHeight: "0.5" }}
                >
                  <i className="bi bi-person-circle"></i>
                </button>
                <button
                  type="button"
                  className="  btn btn-white dropdown-toggle dropdown-toggle-split rounded-circle shadow-none"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  style={{ zIndex: "1031" }}
                >
                  {state.user !== {} && state.user.role_id === "1" ? (
                    <li>
                      <Link className="dropdown-item" to="/admin">
                        <i className="bi bi-person-badge"></i> Trang quản trị
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <Link className="dropdown-item" to="/user">
                      <i className="bi bi-gear-fill"></i> Thay đổi thông tin cá
                      nhân
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span
                      role="button"
                      className="dropdown-item"
                      onClick={clickHandler}
                    >
                      <i className="bi bi-box-arrow-left me-2"></i>
                      Đăng xuất
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
