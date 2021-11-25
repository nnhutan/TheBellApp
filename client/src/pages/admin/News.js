import React, { useState, useContext } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TableNews from "../../components/admin/TableNews";
import Pagination from "../../components/Pagination";
import { Data } from "../../Context";

function News() {
  const { newsList, addNews, editNews, deleteNews } = useContext(Data);
  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [news, setNews] = useState({ title: "", thumbnail: "", content: "" });

  const closeHandler = () => {
    setNews({ title: "", thumbnail: "", content: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addNews(news);
    } else {
      editNews(status.id, news);
    }
    setNews({ title: "", thumbnail: "", content: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };
  const deleteHandler = (id) => {
    var option = window.confirm("Bạn có chắc chắn muốn xoá tin tức này không?");
    if (option) {
      deleteNews(id);
    }
  };

  const editHandler = (id, news) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setNews(news);
    document.querySelector(".openmodal").click();
  };
  const setContent = (e, content) => {
    setNews((prev) => ({ ...prev, content: content }));
  };
  const seeDetail = (id) => {
    setNews(newsList.find((item) => item.id === id));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const offset = (currentPage - 1) * itemPerPage;
  const numberPage = Math.ceil(newsList.length / itemPerPage);
  const currDisplay = newsList.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid">
        <h2 className="text-center my-4">Quản lý tin tức</h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm tin tức mới
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" style={{ minWidth: "70%" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {status.action} tin tức
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="title" className="form-label">
                    Tiêu đề
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tiêu đề"
                    name="title"
                    value={news.title}
                    onChange={(e) =>
                      setNews((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                  <label htmlFor="thumbnail" className="form-label">
                    Hình ảnh
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Link hình ảnh"
                    name="thumbnail"
                    value={news.thumbnail}
                    onChange={(e) =>
                      setNews((prev) => ({
                        ...prev,
                        thumbnail: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="content" className="form-label">
                    Nội dung
                  </label>
                  <SunEditor
                    setContents={news.content}
                    showToolbar={true}
                    onBlur={setContent}
                    setDefaultStyle="height: auto"
                    setOptions={{
                      buttonList: [
                        [
                          "undo",
                          "redo",
                          "bold",
                          "underline",
                          "italic",
                          "strike",
                          "list",
                          "align",
                          "fontSize",
                          "formatBlock",
                          "table",
                          "image",
                          "link",
                          "fontColor",
                          "hiliteColor",
                        ],
                      ],
                    }}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={
                      news.name === ""
                        ? "btn btn-primary disabled"
                        : "btn btn-primary"
                    }
                    data-bs-dismiss="modal"
                    onClick={submitHandler}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <TableNews
              newsList={currDisplay}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
              seeDetail={seeDetail}
              offset={offset}
            />
          </div>
          {numberPage > 1 ? (
            <Pagination
              numberPage={numberPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" style={{ minWidth: "75%" }}>
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
                    onClick={closeHandler}
                  ></button>
                </div>
                <div
                  className="modal-body"
                  dangerouslySetInnerHTML={{
                    __html: news.content,
                  }}
                ></div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
