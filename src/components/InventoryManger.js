import React, { useState, useEffect } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList";

function InventoryManager() {
  // state for currentInventory
  const [currentItems, setCurrentItems] = useState([]);
  // state for clickedItems
  const [reorderItems, setReorderItems] = useState([]);

  //useEffect fetch called
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:8001/inventory")
      .then((resp) => resp.json())
      .then((data) => setCurrentItems(data));
  };

  //addItem Handler
  const addItem = (clickedObj) => {
    if (reorderItems.includes(clickedObj) === false) {
      setReorderItems([...reorderItems, clickedObj]);
    }
  };
  // deleteHandler
  const deleteHandler = (deletedObj) => {
    //delete
    fetch(`http://localhost:8001/inventory/${deletedObj.id}`, {
      method: "DELETE",
    }).then(() => {
      setCurrentItems(currentItems.filter((Item) => Item.id !== deletedObj.id));
      setReorderItems(reorderItems.filter((Item) => Item.id !== deletedObj.id));
    });
  };

  const deleteHandler2 = (deletedObj) => {
    setReorderItems(reorderItems.filter((Item) => Item.id !== deletedObj.id));
  };
  return (
    <div className="container">
      <CurrentInventoryList
        currentItems={currentItems}
        addItem={addItem}
        deleteHandler={deleteHandler}
      />
      <ReorderInventoryList
        reorderItems={reorderItems}
        deleteHandler2={deleteHandler2}
        addItem={addItem}
      />
    </div>
  );
}

export default InventoryManager;
