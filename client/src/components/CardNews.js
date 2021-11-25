import React from "react";

function CardNews({ news, setNews }) {
  const { title, thumbnail, updated_at } = news;
  return (
    <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
      <div
        className="position-relative image-hover"
        style={{ minHeight: "160px" }}
      >
        <img src={thumbnail} className="img-fluid" alt="world-news" />
      </div>
      <h5
        className="font-weight-bold mt-3"
        style={{ fontFamily: "Montserrat", minHeight: "48px" }}
      >
        {title.slice(0, 40).trim()}...
      </h5>
      <p className="mb-2 text-secondary">{updated_at}</p>
      <button
        className="btn btn-outline-primary"
        style={{ fontFamily: "Montserrat", textDecoration: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setNews(news)}
      >
        Xem chi tiết <span className="bi bi-arrow-right"></span>
      </button>
    </div>
  );
}

export default CardNews;
