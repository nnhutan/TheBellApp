import React, { useState } from "react";
import axios from "axios";
import API from "../API/api";

function ContactPage() {
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    phone_number: "",
  });
  const showAlert = (content, type) => {
    var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    var alertTrigger = document.getElementById("liveAlertBtn");

    function alert(message, type) {
      var wrapper = document.createElement("div");
      wrapper.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

      alertPlaceholder.append(wrapper);
    }

    if (alertTrigger) {
      alert(content, type);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      user.lastname !== "" &&
      user.firstname !== "" &&
      user.email !== "" &&
      user.phone_number !== ""
    ) {
      axios
        .post(API + "customer-contact.php/addCustomerContact", { ...user })
        .then((res) =>
          showAlert("Cảm ơn bạn đã đăng ký nhận thông tin!", "success")
        )
        .catch((res) => console.log(res));
      setUser({
        lastname: "",
        firstname: "",
        email: "",
        phone_number: "",
      });
    } else {
      showAlert("Bạn cần nhập đầy đủ các thông tin!", "warning");
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="container py-5">
      <div className="row g-2">
        <div className="col-lg-7 d-flex flex-column justify-content-between">
          <div className="px-3">
            <h4
              className="font-monospace fw-bold text-center"
              style={{ color: "#1c4c90" }}
            >
              Hãy liên hệ với chúng tôi để nhận những ưu đãi mới nhất!
            </h4>
            <p className="text-secondary m-0 fst-italic text-center">
              Đội ngũ tư vấn viên của chúng tôi sẽ luôn có mặt để tư vấn và hỗ
              trợ bạn!
            </p>
          </div>
          <div className="">
            <img
              src="https://dbgallery.com/assets/img/Vector-Smart-Object3.png"
              alt="bg"
              className="w-100"
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div
            className="card card-body border-0 px-5 py-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 className="card-title text-center fw-bolder mb-4">
              Contact Us
            </h3>
            <form
              method=""
              className="register-form needs-validation"
              id="signup-form"
              noValidate
            >
              <div className="input-group mb-5 w-lg-75">
                <label
                  htmlFor="fullname"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-person-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Họ"
                  required
                  value={user.lastname}
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-5 w-lg-75">
                <label
                  htmlFor="fullname"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-person-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Tên"
                  required
                  value={user.firstname}
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-5 w-lg-75">
                <label
                  htmlFor="email"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-envelope-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={user.email}
                  onChange={changeHandler}
                />
              </div>

              <div className="input-group mb-5 w-lg-75">
                <label
                  htmlFor="phone_number"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-telephone-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  value={user.phone_number}
                  placeholder="Số điện thoại"
                  required
                  onChange={changeHandler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary my-3 py-2 px-5 rounded-pill w-75 mx-auto d-block"
                onClick={submitHandler}
                style={{ backgroundColor: "#682780", borderColor: "#682780" }}
                id="liveAlertBtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="liveAlertPlaceholder"></div>
    </div>
  );
}
export default ContactPage;
