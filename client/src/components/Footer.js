import React, { useContext } from "react";
import { Data } from "../Context";
import { Link } from "react-router-dom";

function Footer() {
  const { setCurrage } = useContext(Data);
  return (
    <footer className="w-100 py-4 flex-shrink-0 footer bg-dark">
      <div className="container py-4">
        <div className="row gy-4 px-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="h1 text-white">The Bell</h5>
            <p className="small text-muted">Công ty TNHH 4 thành viên</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Khám phá</h5>
            <ul className="list-unstyled text-muted">
              <li onClick={() => setCurrage("home")}>
                <Link to="/" className="text-decoration-none text-secondary">
                  Trang chủ
                </Link>
              </li>
              <li onClick={() => setCurrage("intro")}>
                <Link
                  to="/intro"
                  className="text-decoration-none text-secondary"
                >
                  Giới thiệu
                </Link>
              </li>
              <li onClick={() => setCurrage("product")}>
                <Link
                  to="/product"
                  className="text-decoration-none text-secondary"
                >
                  Sản phẩm
                </Link>
              </li>
              <li onClick={() => setCurrage("contact")}>
                <Link
                  to="/news"
                  className="text-decoration-none text-secondary"
                >
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6"></div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Theo dõi chúng tôi trên</h5>
            <div className="d-flex">
              <button className="btn btn-outline-light rounded-circle">
                <i className="bi bi-facebook"></i>
              </button>
              <button className="btn btn-outline-light rounded-circle mx-2">
                <i className="bi bi-instagram"></i>
              </button>
              <button className="btn btn-outline-light rounded-circle">
                <i className="bi bi-twitter"></i>
              </button>
              <button className="btn btn-outline-light rounded-circle ms-2">
                <i className="bi bi-pinterest"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
