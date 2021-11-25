import React from "react";

function CardComment({ comment, user, deleteComment, setCommentEdit }) {
  return (
    <div
      className="container bg-white rounded-3 py-2 w-75 mb-2"
      style={{ position: "relative" }}
    >
      <div className="row">
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
          <h5 className="name mb-1">{comment.fullname}</h5>
          <p className="content mb-0 text-secondary fst-italic">
            {comment.content}
          </p>
        </div>
        <div className="col-lg-2 d-flex align-items-center justify-content-center">
          <div className="text-center ">
            <span>{comment.updated_at}</span>
          </div>
        </div>
      </div>
      {comment.user_id === user.id ? (
        <>
          <div
            role="button"
            className=""
            style={{ position: "absolute", top: "2px", right: "2px" }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() =>
              setCommentEdit({ id: comment.id, content: comment.content })
            }
          >
            <i className="bi bi-pencil text-warning"></i>
          </div>
          <div
            role="button"
            className=""
            style={{ position: "absolute", bottom: "2px", right: "2px" }}
            onClick={() => deleteComment(comment.id)}
          >
            <i className="bi bi-trash text-danger"></i>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CardComment;
