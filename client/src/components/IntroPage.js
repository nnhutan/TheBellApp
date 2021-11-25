import React from "react";
// import background1 from "../img/laptops.jpg";
import "./Intro.css";
function IntroPage() {
  return (
    <div>
      <header className="container-fluid masthead">
        <div className="container-fluid position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="text-center text-white">
                <h1 className="mb-5">Công ty TNHH BTLWD</h1>
                <h1 className="mb-5">Chuyên phân phối thiết bị công nghệ</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className="testimonials text-center bg-light"
        style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
      >
        <div className="container">
          <h2 className="mb-5">Những Lãnh Đạo Của Công Ty Chúng Tôi</h2>
          <div className="row">
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={"./img/testimonials-1.jpg"}
                  alt="..."
                />
                <h5>Đinh Như Tân</h5>
                <p className="font-weight-light mb-0">"Full-stack Director"</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={"./img/testimonials-2.jpg"}
                  alt="..."
                />
                <h5>Hồ Vũ Đại Hải</h5>
                <p className="font-weight-light mb-0">"Backend Director"</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={"./img/testimonials-3.jpg"}
                  alt="..."
                />
                <h5>Nguyễn Thọ Nam</h5>
                <p className="font-weight-light mb-0">
                  "Half-Frontend Director"
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={"./img/testimonials-3.jpg"}
                  alt="..."
                />
                <h5>Trịnh Đức Mạnh</h5>
                <p className="font-weight-light mb-0">
                  "Half-Frontend Director"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 col-md-12 order-lg-2 text-white showcase-img showcasebg1"></div>
            <div className="col-lg-6 col-md-12 order-lg-1 my-auto showcase-text">
              <h2>Tận tâm với khách hàng</h2>
              <p className="lead mb-0">
                Nhân viên với sự chuyên nghiệp luôn hướng đến sự thoải mái của
                khách hàng
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 text-white showcase-img showcasebg2"></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Sản phẩm đa dạng</h2>
              <p className="lead mb-0">
                Với nhiều sản phẩm như laptop, tablet, smartphone,... cùng với
                nhiều mẫu thiết kế và màu sắc ấn tượng
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img showcasebg3"></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Giá cả luôn bám sát thị trường</h2>
              <p className="lead mb-0">
                Sản phẩm luôn có mức giá hợp lý với từng đối tượng khách hàng
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default IntroPage;
