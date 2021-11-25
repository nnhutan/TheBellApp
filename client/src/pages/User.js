import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Data } from "../Context";
var md5 = require("md5");

const styleSignup = {
  borderRadius: "30px",
  boxShadow: "0px 15px 16.83px 0.17px rgb(0,0,0,0.2)",
};

function User() {
  const DataGlobal = useContext(Data);
  const { state, logoutHandler, editUser } = DataGlobal;
  const [user, setUser] = useState(state.user);
  const [status, setStatus] = useState(state);

  useEffect(() => {
    setUser(state.user);
    setStatus(state);
  }, [state]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = () => {
    logoutHandler();
  };

  const submitHandler = (type) => {
    const newPassword = document.getElementById("new-password").value;
    const oldPassword = md5(
      md5(document.getElementById("old-password").value) +
        "sjdgfsdj(*&*&6234jhsdgfjhsdsdfk&*^UUUdd"
    );
    if (oldPassword !== state.user.password && type === "password")
      alert("Mật khẩu cũ không đúng!");
    else if (newPassword.length < 6 && type === "password")
      alert("Vui lòng nhập mật khẩu mới tối thiểu 6 ký tự!");
    else {
      const newUser = { ...user, password: newPassword };
      editUser(newUser);
    }
    setUser((prev) => ({ ...prev, password: "" }));
    document.getElementById("new-password").value = "";
    document.getElementById("old-password").value = "";
  };
  const closeHandler = (type) => {
    switch (type) {
      case "1":
        break;
      case "2":
        setUser(state.user);
        break;
      case "3":
        setUser((prev) => ({ ...prev, password: "" }));
        document.getElementById("new-password").value = "";
        document.getElementById("old-password").value = "";
        break;
      default:
        break;
    }
  };

  return status.isLoggedIn ? (
    <>
      <div
        className="signup bg-light d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className=" bg-white container py-5 pe-3 position-relative"
          style={styleSignup}
        >
          <Link to="/">
            <button
              className="btn btn-primary position-absolute top-0 start-0 px-4 bg-gradient"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <i className="bi bi-arrow-return-left"></i>
            </button>
          </Link>
          <button
            className="btn btn-warning position-absolute top-0 end-0 px-4 bg-gradient"
            style={{
              borderTopRightRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
            onClick={clickHandler}
          >
            <i className="bi bi-box-arrow-in-right"></i>
          </button>
          <div className="signup-content row py-0 g-0 ps-lg-4 pe-lg-4 justify-content-center">
            <div className="row g-0 gx-md-2">
              <div className="col-lg-4 col-md-5 col-12">
                <div className="card" style={{ borderRadius: "4px" }}>
                  <img
                    src="https://pdp.edu.vn/wp-content/uploads/2021/05/avatar-hinh-anh-dai-dien-nguoi-giau-mat.jpg"
                    className="card-img-top"
                    alt="avata"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <span className="fw-light">Xin chào</span>{" "}
                      {state.user.fullname}!
                    </h5>
                    <ul className="list-group list-group-flush border-0">
                      <li
                        className="list-group-item list-group-item-action px-lg-2 px-0"
                        role="button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#change-avata"
                      >
                        <i className="bi bi-person-bounding-box"></i> Thay đổi
                        ảnh đại diện
                      </li>
                      <li
                        className="list-group-item list-group-item-action px-lg-2 px-0"
                        role="button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#change-info"
                      >
                        <i className="bi bi-person-rolodex"></i> Thay đổi thông
                        tin cá nhân
                      </li>
                      <li
                        className="list-group-item list-group-item-action px-lg-2 px-0"
                        role="button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#change-password"
                      >
                        <i className="bi bi-file-lock"></i> Thay đổi mật khẩu
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <table className="table table-responsive pt-0">
                  <thead>
                    <tr>
                      <td className="p-0 h-0" style={{ width: "160px" }}></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Họ và Tên</td>
                      <td>:</td>
                      <td>{state.user.fullname}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{state.user.email}</td>
                    </tr>
                    <tr>
                      <td>Số điện thoại</td>
                      <td>:</td>
                      <td>{state.user.phone_number}</td>
                    </tr>
                    <tr>
                      <td>Địa chỉ</td>
                      <td>:</td>
                      <td>{state.user.address}</td>
                    </tr>
                  </tbody>
                </table>
                <figure>
                  <img
                    className="d-block mx-auto"
                    src={process.env.PUBLIC_URL + "./img/signup-image.jpg"}
                    alt="singupimage"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="change-avata"
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
                Thay đổi ảnh đại diện
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeHandler("1")}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="avata" className="form-label mb-0 mt-2">
                Ảnh đại diện
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Link hình ảnh"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeHandler("1")}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="change-info"
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
                Thay đổi thông tin cá nhân
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeHandler("2")}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="fullname" className="form-label mb-0 mt-2 ">
                Họ và Tên
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Họ và Tên"
                name="fullname"
                value={user.fullname}
                onChange={changeHandler}
              />
              <label htmlFor="email" className="form-label mb-0 mt-2">
                Email
              </label>
              <input
                type="email"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={changeHandler}
              />
              <label htmlFor="phone_number" className="form-label mb-0 mt-2">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Số điện thoại"
                name="phone_number"
                value={user.phone_number}
                onChange={changeHandler}
              />
              <label htmlFor="address" className="form-label mb-0 mt-2">
                Địa chỉ
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Địa chỉ"
                name="address"
                value={user.address}
                onChange={changeHandler}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeHandler("2")}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => submitHandler("info")}
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="change-password"
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
                Thay đổi mật khẩu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeHandler("3")}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="old_password" className="form-label mb-0 mt-2">
                Mật khẩu cũ
              </label>
              <input
                type="password"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Mật khẩu cũ"
                id="old-password"
              />
              <label htmlFor="new_password" className="form-label mb-0 mt-2">
                Mật khẩu mới
              </label>
              <input
                type="password"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Mật khẩu mới"
                id="new-password"
                name="password"
                onChange={changeHandler}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeHandler("3")}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => submitHandler("password")}
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : status.isLoading ? (
    "Loading..."
  ) : (
    <Redirect to="/" />
  );
}
export default User;
