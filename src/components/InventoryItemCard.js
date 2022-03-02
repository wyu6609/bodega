import React from "react";

function InventoryItemCard({ item, addItem, deleteHandler }) {
  const clickHandler = () => {
    addItem(item);
  };
  return (
    <div className="card" onClick={clickHandler}>
      <img src={item.image}></img>
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <button onClick={() => deleteHandler(item)}>Delete</button>
    </div>
  );
}

export default InventoryItemCard;
