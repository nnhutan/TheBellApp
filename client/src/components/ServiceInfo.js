import React from "react";

function ServiceInfo() {
  return (
    <div className="bg-white" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card card-body text-center p-4">
              <i className="bi bi-coin text-danger fs-2 mb-2"></i>
              <h6 className="text-uppercase mb-0 fw-bold">đảm bảo hoàn tiền</h6>
              <p className="text-secondary mb-0 fst-italic fw-light">
                Một trải nghiệm an toàn
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-body text-center p-4">
              <i className="bi bi-truck text-danger fs-2 mb-2"></i>
              <h6 className="text-uppercase mb-0 fw-bold">
                miễn phí vận chuyển
              </h6>
              <p className="text-secondary mb-0 fst-italic fw-light">
                Hàng ngàn ưu đãi hấp dẫn
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-body text-center p-4">
              <i className="bi bi-headset text-danger fs-2 mb-2"></i>
              <h6 className="text-uppercase mb-0 fw-bold">Tư vấn nhiệt tình</h6>
              <p className="text-secondary mb-0 fst-italic fw-light">
                Đội ngũ tư vấn viên lớn
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-body text-center p-4">
              <i className="bi bi-shield-fill-check text-danger fs-2 mb-2"></i>
              <h6 className="text-uppercase mb-0 fw-bold">
                An toàn thanh toán
              </h6>
              <p className="text-secondary mb-0 fst-italic fw-light">
                Hệ thống thanh toán an toàn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
