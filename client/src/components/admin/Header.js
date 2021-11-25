import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Context";

function Header() {
  const { state, logoutHandler } = useContext(Data);
  const [currPage, setCurrPage] = useState("home");
  const currUser = state.user;
  return (
    <div className="bg-dark">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">
              TheBell
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-between"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link
                  className={
                    currPage === "home" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/admin"
                  onClick={() => setCurrPage("home")}
                >
                  <i className="bi bi-house me-1"></i>
                  Trang chủ
                </Link>
                <Link
                  to="/admin/category"
                  className={
                    currPage === "category" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setCurrPage("category")}
                >
                  <i className="bi bi-folder me-2"></i>
                  Danh mục
                </Link>
                <Link
                  className={
                    currPage === "product" ? "nav-link active" : "nav-link"
                  }
                  to="/admin/product"
                  onClick={() => setCurrPage("product")}
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Sản phẩm
                </Link>

                <Link
                  className={
                    currPage === "user" ? "nav-link active" : "nav-link"
                  }
                  to="/admin/user"
                  onClick={() => setCurrPage("user")}
                >
                  <i className="bi bi-people me-2"></i>
                  Người dùng
                </Link>

                <Link
                  className={
                    currPage === "news" ? "nav-link active" : "nav-link"
                  }
                  to="/admin/news"
                  onClick={() => setCurrPage("news")}
                >
                  <i className="bi bi-newspaper me-2"></i>
                  Tin tức
                </Link>

                <li className="nav-item dropdown">
                  <a
                    className={
                      currPage === "feedback" ||
                      currPage === "contact" ||
                      currPage === "order"
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    href="!#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currPage === "feedback" ? (
                      <>
                        <i className="bi bi-question-circle me-2 "></i>
                        Phản hồi
                      </>
                    ) : currPage === "contact" ? (
                      <>
                        {" "}
                        <i className="bi bi-person-rolodex me-2"></i>
                        Thông tin liên hệ
                      </>
                    ) : currPage === "order" ? (
                      <>
                        <i className="bi bi-minecart me-2"></i>
                        Đơn hàng
                      </>
                    ) : (
                      <>
                        <i className="bi bi-plus-circle me-2"></i>
                        Chức năng khác
                      </>
                    )}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className={
                          currPage === "feedback"
                            ? "dropdown-item active"
                            : "dropdown-item"
                        }
                        to="/admin/feedback"
                        onClick={(e) => {
                          setCurrPage("feedback");
                          e.target.parentNode.parentNode.classList.toggle(
                            "show"
                          );
                        }}
                      >
                        <i className="bi bi-question-circle me-2 "></i>
                        Phản hồi
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          currPage === "contact"
                            ? "dropdown-item active"
                            : "dropdown-item"
                        }
                        to="/admin/contact"
                        onClick={(e) => {
                          setCurrPage("contact");
                          e.target.parentNode.parentNode.classList.toggle(
                            "show"
                          );
                        }}
                      >
                        <i className="bi bi-person-rolodex me-2"></i>
                        Thông tin liên hệ
                      </Link>
                    </li>
                    <Link
                      className={
                        currPage === "order"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      to="/admin/order"
                      onClick={(e) => {
                        setCurrPage("order");
                        e.target.parentNode.parentNode.classList.toggle("show");
                      }}
                    >
                      <i className="bi bi-minecart me-2"></i>
                      Đơn hàng
                    </Link>
                  </ul>
                </li>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="input-group">
                    <input
                      className="form-control form-control-sm bg-light border-0 rounded-pill rounded-end shadow-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="input-group-text bg-light border-0 rounded-pill rounded-start"
                      // type="submit"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex ms-3">
                  <div>
                    <button className="btn btn-success rounded-circle">
                      <i className="bi bi-person-circle"></i>
                    </button>
                  </div>
                  <div className="text-light d-flex flex-column justify-content-center ms-1">
                    <span className="lh-1 fs-6 fst-italic fw-light">
                      Xin chào!
                    </span>
                    <span className="lh-1 fw-bold">{currUser.fullname}</span>
                  </div>
                </div>

                <button
                  className="btn btn-outline-warning ms-4"
                  onClick={logoutHandler}
                >
                  <i className="bi bi-box-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
