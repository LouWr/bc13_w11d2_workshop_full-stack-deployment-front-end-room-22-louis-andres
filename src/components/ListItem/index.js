//This is the component which shows each individual list item.
import React from "react";
import "./listItem.css";

function ListItem({ name, completed, tickItem, deleteClick, index }) {
  return (
    <div className="list-items">
      <li
        data-testid="list-item"
        className={completed ? "tickedItem" : "untickedItem"}
        onClick={tickItem}
      >
        {name}
      </li>
      <button
        className="del-button"
        onClick={() => {
          deleteClick(index);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;
