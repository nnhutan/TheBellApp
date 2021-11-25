import React, { useEffect, useContext } from "react";
import { Data } from "../Context";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Header() {
  const DataGlobal = useContext(Data);
  const { numProductInCart, currPage, setCurrage } = DataGlobal;

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const mainNavbar = document.getElementById("main-navbar");
      if (mainNavbar !== null) {
        const topHeader_height =
          document.querySelector(".js-top-header").offsetHeight;
        if (window.scrollY > topHeader_height) {
          mainNavbar.classList.add("fixed-top");
          const navbar_height = document.querySelector(
            ".main-navbar__navbar"
          ).offsetHeight;
          document.body.style.paddingTop = navbar_height + "px";
        } else {
          mainNavbar.classList.remove("fixed-top");
          document.body.style.paddingTop = "0";
        }
      }
    });
  }, []);

  return (
    <div className="bg-light main-navbar__navbar" id="main-navbar">
      <div className="container">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-flex align-items-center"
              to="/"
              onClick={() => setCurrage("home")}
            >
              <img src={logo} alt="logo" />
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
                  to="/"
                  onClick={() => setCurrage("home")}
                >
                  Trang chủ
                </Link>
                <Link
                  to="/intro"
                  className={
                    currPage === "intro" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setCurrage("intro")}
                >
                  Giới thiệu
                </Link>
                <Link
                  className={
                    currPage === "product" ? "nav-link active" : "nav-link"
                  }
                  to="/product"
                  onClick={() => setCurrage("product")}
                >
                  Sản phẩm
                </Link>
                <Link
                  className={
                    currPage === "price" ? "nav-link active" : "nav-link"
                  }
                  to="/price"
                  onClick={() => setCurrage("price")}
                >
                  Bảng giá
                </Link>
                <Link
                  className={
                    currPage === "contact" ? "nav-link active" : "nav-link"
                  }
                  to="/contact"
                  onClick={() => setCurrage("contact")}
                >
                  Liên hệ
                </Link>
                <Link
                  className={
                    currPage === "news" ? "nav-link active" : "nav-link"
                  }
                  to="/news"
                  onClick={() => setCurrage("news")}
                >
                  Tin tức
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control bg-white border-0 rounded-pill rounded-end shadow-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="input-group-text bg-white border-0 rounded-pill rounded-start"
                      // type="submit"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
                <Link to="/cart">
                  <button
                    className={
                      currPage === "cart"
                        ? "btn btn-outline-primary rounded-circle position-relative ms-4 active"
                        : "btn btn-outline-primary rounded-circle position-relative ms-4"
                    }
                    onClick={() => setCurrage("cart")}
                  >
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-1 start-100 translate-middle bg-danger border border-light rounded-circle text-white px-2">
                      {numProductInCart}
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
