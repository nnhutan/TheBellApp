import React, { useContext, useState } from "react";
import { Data } from "../Context";
import "./News.css";
import CardNews from "../components/CardNews";
import Pagination from "./Pagination";

function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState({
    title: "",
    content: "",
  });
  const { newsList } = useContext(Data);
  if (newsList.length === 0) return <span>Loading...</span>;
  else {
    const itemPerPage = 4;
    const numberPage = Math.ceil((newsList.length - 4) / itemPerPage);
    const currDisplay = newsList
      .slice(3, newsList.length - 1)
      .slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
    return (
      <div className="newspage">
        <div className="container" style={{ marginTop: "4rem" }}>
          <div className="row align-middle">
            <div className="col-lg-4">
              <div className="d-flex position-relative float-left">
                <h3 className="section-title">Tin tức mới</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-5 mb-sm-5">
              <div className="position-relative image-hover">
                <img
                  src={newsList[0].thumbnail}
                  className="img-fluid"
                  alt="world-news"
                />
                <span className="thumb-title">NEWS</span>
              </div>
              <h5
                className="font-weight-bold mt-3"
                style={{ fontFamily: "Montserrat", fontSize: "30px" }}
              >
                {newsList[0].title}
              </h5>

              <button
                className=" btn btn-outline-primary"
                style={{
                  fontFamily: "Montserrat",
                  textDecoration: "none",
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setNews(newsList[0])}
              >
                Xem chi tiết <span className="bi bi-arrow-right"></span>
              </button>
            </div>
            <div className="col-lg-6  col-md-11 mb-5 mb-sm-2">
              <div className="row">
                <div
                  className="col-md-12 col-lg-12 column"
                  style={{ height: "20vh" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setNews(newsList[1])}
                >
                  <div
                    className="card gr-1"
                    style={{
                      height: "11vh",
                    }}
                  >
                    <div className="col-lg-8 txt">
                      <h1>{newsList[1].title.slice(0, 58).trim()}...</h1>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <small className="txt">
                          <span className="bi bi-alarm"></span>{" "}
                          {newsList[1].updated_at}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 col-lg-12 column"
                  style={{ height: "20vh" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setNews(newsList[2])}
                >
                  <div className="card gr-2" style={{ height: "10vh" }}>
                    <div className="col-lg-8 txt">
                      <h1>{newsList[2].title.slice(0, 58).trim()}...</h1>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <small className="txt">
                          <span className="bi bi-alarm"></span>{" "}
                          {newsList[2].updated_at}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 col-lg-12 column"
                  style={{ height: "20vh" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setNews(newsList[3])}
                >
                  <div className="card gr-3" style={{ height: "10vh" }}>
                    <div className="col-lg-8 txt">
                      <h1>{newsList[3].title.slice(0, 58).trim()}...</h1>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <small className="txt">
                          <span className="bi bi-alarm"></span>{" "}
                          {newsList[3].updated_at}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <section className="wrapper mb-5 mt-5">
            <div className="container">
              <div className="row align-middle">
                <div className="col-lg-3">
                  <div className="d-flex position-relative float-left">
                    <h3 className="section-title">Tin tức liên quan</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {currDisplay.map((item) => (
                  <CardNews news={item} setNews={setNews} key={item.id} />
                ))}
              </div>
              <div className="pagination mt-3 d-flex justify-content-center">
                {numberPage > 1 ? (
                  <Pagination
                    numberPage={numberPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                ) : null}
              </div>
            </div>
          </section>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable"
            style={{ maxWidth: "75%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {news.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                dangerouslySetInnerHTML={{ __html: news.content }}
              ></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsPage;
