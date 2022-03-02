import React from "react";
import InventoryItemCard from "./InventoryItemCard";
import { v4 as uuid } from "uuid";

function CurrentInventoryList({ currentItems, addItem, deleteHandler }) {
  return (
    <div id="current-inventory">
      <h2>Current Inventory</h2>
      <div>
        {currentItems.map((item) => {
          return (
            <InventoryItemCard
              key={uuid()}
              item={item}
              addItem={addItem}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CurrentInventoryList;
