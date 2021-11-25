import React, { useState } from "react";
import CardComment from "./CardComment";
import Pagination from "../components/Pagination";

function Comment({ comments, addComment, deleteComment, editComment, user }) {
  const [commentEdit, setCommentEdit] = useState({
    id: "",
    content: "",
  });
  const [content, setContent] = useState("");
  const changeHandler = (e) => {
    setContent(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;
  const numberPage = Math.ceil(comments.length / itemPerPage);
  const currDisplay = comments.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container py-4">
      <div className="">
        <h4 className="ms-5">Bình luận</h4>
        {user.id !== undefined ? (
          <div className="row justify-content-center g-2 align-items-center">
            <div className="col-lg-1">
              <div className="avata rounded-circle">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="avata"
                  className="rounded-circle mx-auto d-block"
                  style={{ width: "60px" }}
                />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={content}
                  onChange={changeHandler}
                ></textarea>
                <label htmlFor="floatingTextarea">Bình luận</label>
              </div>
            </div>
            <div className="col-lg-1">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  addComment(content);
                  setContent("");
                }}
              >
                Đăng
              </button>
            </div>
          </div>
        ) : (
          <span className="text-center d-block">
            Hãy đăng nhập để có thể đăng bình luận!
          </span>
        )}
      </div>
      <hr />
      {currDisplay.map((item) => (
        <CardComment
          comment={item}
          key={item.id}
          user={user}
          deleteComment={deleteComment}
          setCommentEdit={setCommentEdit}
        />
      ))}
      {numberPage > 1 ? (
        <Pagination
          numberPage={numberPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
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
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() =>
                  setCommentEdit({
                    id: "",
                    content: "",
                  })
                }
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={commentEdit.content}
                  onChange={(e) =>
                    setCommentEdit((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                ></textarea>
                <label htmlFor="floatingTextarea">Bình luận</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() =>
                  setCommentEdit({
                    id: "",
                    content: "",
                  })
                }
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  editComment(commentEdit);
                  setCommentEdit({
                    id: "",
                    content: "",
                  });
                }}
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
