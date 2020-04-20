import React from "react";
import style from "./Listitems.module.css";
import FlipMove from "react-flip-move";

function Listitems(props) {
  const items = props.items;
  const listItems = items.map((items) => {
    return (
      <div className={style.list} key={items.key}>
        <p>
          <input
            type="text"
            id={items.key}
            value={items.text}
            onChange={(e) => props.setUpdate(e.target.value, items.key)}
          />

          <span
            className={style.icon}
            onClick={() => props.deleteItem(items.key)}
          >
            X
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={200} easing="easing-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default Listitems;
