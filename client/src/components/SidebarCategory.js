import React, { useState } from "react";

function SidebarCategory({ categories, setProductDisplayed }) {
  const [active, setActive] = useState("all");
  const clickHandler = (id) => {
    // console.log(id);
    setActive(id);
    setProductDisplayed(id);
  };
  return (
    <div className="sidebar-categories">
      <div className="list-group">
        <div className="list-group-item  px-1 d-flex align-items-center">
          <i className="bi bi-list-ul fs-4 me-2"></i>
          <h5 className="mb-0 text-uppercase font-monospace fw-bold">
            Danh mục
          </h5>
        </div>
        <span
          role="button"
          className={
            active === "all"
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => clickHandler("all")}
        >
          Tất cả
        </span>
        {categories.map((item) => (
          <span
            role="button"
            className={
              active === item.id
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={item.id}
            onClick={() => clickHandler(item.id)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SidebarCategory;
