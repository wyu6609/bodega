import React from "react";
import InventoryItemCard from "./InventoryItemCard";
import { v4 as uuid } from "uuid";
function ReorderInventoryList({ reorderItems, deleteHandler2, addItem }) {
  return (
    <div id="reorder-container">
      <h2>Reorder</h2>
      <div>
        {reorderItems.map((item) => {
          return (
            <InventoryItemCard
              key={uuid()}
              item={item}
              deleteHandler={deleteHandler2}
              addItem={addItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReorderInventoryList;
