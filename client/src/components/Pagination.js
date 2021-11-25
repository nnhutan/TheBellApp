import React from "react";

function Pagination({ numberPage, currentPage, setCurrentPage }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {currentPage === 1 ? (
          <li className="page-item disabled">
            <button className="page-link shadow-none" href="#">
              Previous
            </button>
          </li>
        ) : (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <button className="page-link shadow-none" href="#">
              Previous
            </button>
          </li>
        )}
        {currentPage === 1 || currentPage - 1 === 1 ? (
          <></>
        ) : (
          <li className="page-item" onClick={() => setCurrentPage(1)}>
            <button className="page-link shadow-none" href="#">
              1
            </button>
          </li>
        )}
        {currentPage >= 4 ? (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage - 2)}
          >
            <button className="page-link shadow-none" href="#">
              ...
            </button>
          </li>
        ) : (
          <></>
        )}
        {currentPage - 1 < 1 ? (
          <></>
        ) : (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <button className="page-link shadow-none" href="#">
              {currentPage - 1}
            </button>
          </li>
        )}
        <li className="page-item active">
          <button className="page-link shadow-none " href="#">
            {currentPage}
          </button>
        </li>
        {currentPage + 1 > numberPage ? (
          <></>
        ) : (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <button className="page-link shadow-none" href="#">
              {currentPage + 1}
            </button>
          </li>
        )}
        {currentPage <= numberPage - 3 ? (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            <button className="page-link shadow-none" href="#">
              ...
            </button>
          </li>
        ) : (
          <></>
        )}
        {currentPage === numberPage || currentPage + 1 === numberPage ? (
          <></>
        ) : (
          <li className="page-item " onClick={() => setCurrentPage(numberPage)}>
            <button className="page-link shadow-none" href="#">
              {numberPage}
            </button>
          </li>
        )}

        {currentPage === numberPage ? (
          <li className="page-item disabled">
            <button className="page-link shadow-none" href="#">
              Next
            </button>
          </li>
        ) : (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <button className="page-link shadow-none" href="#">
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
