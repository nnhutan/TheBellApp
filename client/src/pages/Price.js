import React, { useContext } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { Data } from "../Context";

function Price() {
  const DataGlobal = useContext(Data);
  const products = DataGlobal.products.map((item, index) => {
    return {
      id: index,
      name: item.title,
      price: item.price,
      updated_at: item.updated_at,
    };
  });

  return (
    <div className="price-page">
      <div className="container">
        <div className="slider py-5">
          <div className="row">
            {" "}
            <div className="col-lg-6">
              <div className="picture">
                <img
                  src="https://cdn.dribbble.com/users/2279668/screenshots/9011709/media/75d2cfb61226c4311c3d9b13ba2c1ac3.png"
                  alt="pricepagepicture"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="slide-content px-4">
                <h6 className="text-center text-uppercase text-secondary mb-1">
                  the bell - sự lựa chọn hàng đầu
                </h6>
                <h2 className="text-center text-dark test-monospace font-monospace fw-bold mb-3">
                  Dù bạn là ai, chúng tôi đều mang đến một sự trải nghiệm tuyệt
                  vời!
                </h2>
                <p className="text-secondary fst-italic px-5 mb-4">
                  Tại đây bạn sẽ có nhiều lựa chọn phù hợp với nhiều phân khúc
                  giá cả mà chúng tôi cung cấp. Chúng tôi sẽ thường xuyên cập
                  nhật giá cả để phục vụ các bạn. Hãy khám phá ngay bây giờ!
                </p>
                <div className="text-center">
                  <CSVLink
                    data={products}
                    filename={"bang_gia.csv"}
                    className="btn btn-danger py-2 px-5 fs-5 "
                  >
                    Khám phá ngay
                  </CSVLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price-content bg-light  bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className=" px-5">
                <h4 className="text-uppercase  fw-bold text-info mb-3">
                  thoải mái chọn lựa!
                </h4>
                <p className="font-monospace pe-4 mb-3">
                  Với sự đa dạng các mặt hàng, từ cũ đến mới, từ trung cấp đến
                  cao cấp. Sẽ có nhiều sự lựa chọn phù hợp với nhiều đối tượng
                  người dùng.
                </p>
                <Link to="/product">
                  <button className="btn btn-warning text-white py-3 px-4">
                    Mua sắm ngay <i className="bi bi-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="picture text-center">
                <img
                  src="https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/Vsmart%20Active%203.png"
                  alt="pricepagepicture"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price-content bg-white py-5">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-lg-6">
              <div className="picture text-center">
                <img
                  src="https://dichvuvantai.vn/wp-content/uploads/2021/05/dich_vu_van_chuyen_hang_hoa_la_gi_04.png"
                  alt="pricepagepicture"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className=" px-4">
                <h4 className="text-uppercase  fw-bold text-danger mb-3">
                  giao hàng tận tay!
                </h4>
                <p className="font-monospace pe-4 mb-3">
                  Chúng tôi sẽ vận chuyển hàng đến tận tay của khách hàng. Bất
                  kỳ mặt hàng hay hình thức thanh toán nào, phí vận chuyển sẽ là
                  miễn phí đối với bạn. Nhanh chân đặt hàng ngay nào!
                </p>
                <Link to="/product">
                  <button className="btn btn-primary text-white py-3 px-4 ">
                    Đặt hàng ngay <i className="bi bi-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
