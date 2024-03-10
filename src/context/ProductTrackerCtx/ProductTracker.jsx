import React, { useReducer, useState } from "react";
import ProductCtx from "./ProductTracker";
import data from "../../data/data";

const calcTotal = (value) =>
  value.reduce((sum, el) => el.price * el.count + sum, 0);

const reducer = (state, action) => {
  let copiedArr = [];
  let overallSum = 0;
  switch (action.type) {
    case "ADD":
      copiedArr = [...state.lists];
      const existedList = copiedArr.find((el) => el.id === action.payload.id);
      if (existedList) {
        existedList.count += 1;
      } else {
        copiedArr.unshift({ ...action.payload, count: 1 });
      }
      overallSum = calcTotal(copiedArr);
      return { overallSum, lists: copiedArr };

    case "FUN":
      copiedArr = [...state.lists];
      let updated = [];
      if (action.check === "INC") {
        updated = copiedArr.map((el) =>
          el.id === action.payload ? { ...el, count: el.count + 1 } : el
        );
      } else {
        updated = copiedArr.map((el) =>
          el.id === action.payload ? { ...el, count: el.count - 1 } : el
        );
      }
      overallSum = calcTotal(updated);
      return { overallSum, lists: updated };

    case "DEL":
      copiedArr = [...state.lists];
      const updatedArr = copiedArr.filter((el) => el.id !== action.payload);
      overallSum = calcTotal(updatedArr);
      return { overallSum, lists: updatedArr };
  }
};

const ProductTracker = ({ children }) => {
  const [item, setItem] = useState({});
  const [state, dispatch] = useReducer(reducer, { lists: [], overallSum: 0 });
  const getItemId = (id, value) =>
    dispatch({ type: "FUN", payload: id, check: value });
  const addItem = (obj) => dispatch({ type: "ADD", payload: obj });
  const deleteItem = (id) => dispatch({ type: "DEL", payload: id });

  const getElId = (id) => {
    setItem(data.find((el) => el.id === id));
  };

  return (
    <ProductCtx.Provider
      value={{
        addItem,
        ...state,
        getItemId,
        deleteItem,
        getElId,
        item,
      }}
    >
      {children}
    </ProductCtx.Provider>
  );
};

export default ProductTracker;
