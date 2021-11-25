import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { Data } from "../Context";

function Cart() {
  const DataGlobal = useContext(Data);
  const { productsInCart, deleteProductInCart, changeNumOfProductInCart } =
    DataGlobal;
  const deleteHandler = (id) => {
    deleteProductInCart(id);
  };

  const changeNumHandler = (e, index, id) => {
    changeNumOfProductInCart(e, index, id);
  };
  const totalProductMoney = productsInCart.reduce(
    (a, b) => a + b.price * b.num,
    0
  );
  const vat = 0.1 * totalProductMoney;
  return (
    <div className="cart-page">
      <div className="container">
        <h3 className="text-center my-3">Giỏ hàng</h3>
        <hr />
        <div className="cart-container">
          <div className="cart-head">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" style={{ width: "120px" }}>
                      Tùy chọn
                    </th>
                    <th scope="col" style={{ width: "120px" }}>
                      Hình ảnh
                    </th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col" style={{ width: "120px" }}>
                      Số lượng
                    </th>
                    <th scope="col">Giá</th>
                    <th scope="col" className="text-right">
                      Tổng tiền
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsInCart.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <span className="text-danger">
                          <i
                            className="bi bi-trash"
                            role="button"
                            onClick={() => deleteHandler(item.id)}
                          ></i>
                        </span>
                      </td>
                      <td>
                        <img
                          src={item.thumbnail}
                          className="img-fluid"
                          width="35"
                          alt="product"
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>
                        <div className="form-group mb-0">
                          <input
                            type="number"
                            className="form-control cart-qty"
                            name="cartQty1"
                            id="cartQty1"
                            defaultValue={item.num}
                            onChange={(e) =>
                              changeNumHandler(e, index, item.id)
                            }
                            min="1"
                          />
                        </div>
                      </td>
                      <td>
                        <NumberFormat
                          value={item.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" ₫ "}
                        />
                      </td>
                      <td className="text-right">
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
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div className="body">
            <div className="row">
              <div className="col-md-12 col-lg-6 order-2 order-lg-1 col-lg-5 col-xl-6">
                <div className="order-note">
                  <form>
                    <div className="form-group">
                      {/* <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Mã giảm giá"
                          aria-label="Search"
                          aria-describedby="button-addonTags"
                        />
                        <div className="input-group-append">
                          <button
                            className="input-group-text rounded-0 rounded-end"
                            type="submit"
                            id="button-addonTags"
                          >
                            Áp dụng
                          </button>
                        </div>
                      </div> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="specialNotes" className="mt-2 mb-1">
                        Ghi chú:
                      </label>
                      <textarea
                        className="form-control"
                        name="specialNotes"
                        id="specialNotes"
                        rows="3"
                        placeholder="Ghi chú"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 order-1 order-lg-2 col-lg-7 col-xl-6">
                <div className="order-total table-responsive ">
                  <table className="table table-borderless text-end">
                    <tbody>
                      <tr>
                        <td>Tổng tiền hàng:</td>
                        <td>
                          <NumberFormat
                            id="total"
                            value={totalProductMoney}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" ₫ "}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Vận chuyển:</td>
                        <td>
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
                        <td>VAT (10%):</td>
                        <td>
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
                        <td className="">
                          <h4>Tổng:</h4>
                        </td>
                        <td className="">
                          <h4>
                            {" "}
                            <NumberFormat
                              id="total"
                              value={totalProductMoney + vat}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" ₫ "}
                            />
                          </h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="cart-footer d-flex justify-content-end mb-3">
            <Link to="/checkout" className="btn btn-success my-1">
              Proceed to Checkout
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
