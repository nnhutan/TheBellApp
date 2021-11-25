import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { Data } from "../Context";

function Checkout() {
  const DataGlobal = useContext(Data);
  const { productsInCart, deleteProductInCart } = DataGlobal;

  const resetCart = () => {
    productsInCart.map((item) => deleteProductInCart(item.id));
  };

  const totalProductMoney = productsInCart.reduce(
    (a, b) => a + b.price * b.num,
    0
  );
  const vat = 0.1 * totalProductMoney;
  return (
    <div className="checkout-page">
      <div className="container mb-4" style={{ position: "relative" }}>
        <Link
          to="/cart"
          style={{
            position: "absolute",
            top: "8px",
            left: "12px",
          }}
        >
          <button className="btn btn-outline-success btn-sm">
            <i class="bi bi-arrow-90deg-left"></i> Quay lại
          </button>
        </Link>
        <h3 className="text-center mt-3">Thông tin đơn hàng</h3>
        <hr />
        <div className="row g-2">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header bg-info text-dark">
                <h5 className="card-title">Thông tin khách hàng</h5>
              </div>
              <div className="card-body">
                <form action="">
                  <label htmlFor="fullname" className="form-label">
                    Tên đầy đủ
                  </label>
                  <input type="text" className="form-control" />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                  <label htmlFor="phone_number" className="form-label">
                    Số điện thoại
                  </label>
                  <input type="text" className="form-control" />
                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input type="text" className="form-control" />
                  <label htmlFor="payment" className="form-label">
                    Hình thức thanh toán
                  </label>
                  <select
                    name="payment"
                    id="payment"
                    className="form-select"
                    defaultValue="1"
                  >
                    <option value="1">Thanh toán khi nhận hàng</option>
                  </select>
                </form>
                <div className="text-center">
                  <button
                    className="btn btn-outline-success mt-3 w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <i className="bi bi-check2-square"></i> Xác nhận đơn hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-header bg-warning bg-gradient">
                <h5 className="card-title">Giỏ hàng của bạn</h5>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table-hover table-borderless">
                    <tbody>
                      {productsInCart.map((item) => (
                        <tr key={item.id}>
                          <td
                            style={{ maxWidth: "300px" }}
                            className="fst-italic"
                          >
                            {item.title}
                          </td>
                          <td className="text-center" style={{ width: "30px" }}>
                            {item.num}
                          </td>
                          <td className="text-center" style={{ width: "30px" }}>
                            <i className="bi bi-x"></i>
                          </td>
                          <td className="text-end">
                            <NumberFormat
                              id="total"
                              value={item.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" ₫ "}
                            />
                          </td>
                          <td className="text-center" style={{ width: "40px" }}>
                            =
                          </td>
                          <td className="text-end text-danger">
                            <NumberFormat
                              id="total"
                              value={item.price * item.num}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" ₫ "}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="6">
                          <hr />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4" className="text-end">
                          Phí vận chuyển
                        </td>
                        <td className="text-center">:</td>
                        <td className="text-end text-danger">
                          {" "}
                          <NumberFormat
                            id="total"
                            value={0}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" ₫ "}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="text-end">
                          VAT (10%)
                        </td>
                        <td className="text-center">:</td>
                        <td className="text-end text-danger">
                          {" "}
                          <NumberFormat
                            id="total"
                            value={vat}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" ₫ "}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5" className="text-end fw-bold fs-5"></td>

                        <td className="">
                          <hr />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="text-end fw-bold fs-5">
                          Tổng
                        </td>
                        <td className="text-center">:</td>
                        <td className="text-end text-danger fw-bold">
                          {" "}
                          <NumberFormat
                            id="total"
                            value={vat + totalProductMoney}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" ₫ "}
                          />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body fst-italic fw-bold">
              Cảm ơn quý khách đã tin tưởng và ủng hộ, chúng tôi sẽ nhanh chóng
              xử lý đơn hàng của quý khách!
            </div>
            <div className="text-end">
              <Link to="/product">
                <button
                  type="button"
                  className="btn btn-primary mb-2 me-2"
                  data-bs-dismiss="modal"
                  onClick={resetCart}
                >
                  Tiếp tục mua sắm <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
