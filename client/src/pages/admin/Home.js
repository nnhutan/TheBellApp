import React, { useContext } from "react";
import { Data } from "../../Context";
import NumberFormat from "react-number-format";

function Home({ clickHandler, currUser }) {
  const { products, users, newsList, comments, customerContact } =
    useContext(Data);
  return (
    <div
      className="container-fluid p-0 home-dashboard bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-6 mt-3">
            <div className="row g-2">
              <div className="col-lg-6">
                <div className=" card card-body shadow">
                  <div className="row">
                    <div className="col-7">
                      <p className="card-text text-secondary mb-0">Sản phẩm</p>
                      <h4 className="card-title fw-bold">
                        {" "}
                        <NumberFormat
                          value={products.length}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h4>
                    </div>
                    <div className="col-5 justify-content-center d-flex">
                      <i className="bi bi-box-seam fs-1 text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className=" card card-body shadow">
                  <div className="row">
                    <div className="col-7">
                      <p className="card-text text-secondary mb-0">
                        Người dùng
                      </p>
                      <h4 className="card-title fw-bold">
                        {" "}
                        <NumberFormat
                          value={users.length}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h4>
                    </div>
                    <div className="col-5 justify-content-center d-flex">
                      <i className="bi bi-person fs-1 text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className=" card card-body shadow">
                  <div className="row">
                    <div className="col-7">
                      <p className="card-text text-secondary mb-0">Tin tức</p>
                      <h4 className="card-title fw-bold">
                        {" "}
                        <NumberFormat
                          value={newsList.length}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h4>
                    </div>
                    <div className="col-5 justify-content-center d-flex">
                      <i className="bi bi-newspaper fs-1 text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className=" card card-body shadow">
                  <div className="row">
                    <div className="col-7">
                      <p className="card-text text-secondary mb-0">Phản hồi</p>
                      <h4 className="card-title fw-bold">
                        {" "}
                        <NumberFormat
                          value={comments.length}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h4>
                    </div>
                    <div className="col-5 justify-content-center d-flex">
                      <i className="bi bi-chat-left-text fs-1 text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className=" card card-body shadow">
                  <div className="row">
                    <div className="col-7">
                      <p className="card-text text-secondary mb-0">
                        Thông tin liên hệ
                      </p>
                      <h4 className="card-title fw-bold">
                        {" "}
                        <NumberFormat
                          value={customerContact.length}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h4>
                    </div>
                    <div className="col-5 justify-content-center d-flex">
                      <i className="bi bi-person-rolodex fs-1 text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className=" card card-body shadow">
                  <div className="row">
                    <div className="col-7">
                      <p className="card-text text-secondary mb-0">Đơn hàng</p>
                      <h4 className="card-title fw-bold">
                        {" "}
                        <NumberFormat
                          value={0}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h4>
                    </div>
                    <div className="col-5 justify-content-center d-flex">
                      <i className="bi bi-receipt fs-1 text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className=" card card-body shadow">
                  <h5 className="card-title text-secondary">Quản trị viên</h5>
                  <ul className="list-group list-group-flush">
                    {users
                      .filter((item) => item.role_id === "1")
                      .map((item) => (
                        <li className="list-group-item" key={item.id}>
                          <h6>{item.fullname}</h6>
                          <p className="m-0 text-secondary fst-italic">
                            {item.email}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <img
              src="https://www.wefoundit.net/wp-content/uploads/2018/11/b.png"
              alt="dashboard"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
