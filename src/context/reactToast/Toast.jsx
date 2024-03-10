import ToastCtx from "./Toast";
import React from "react";
import data from "../../data/data";
// toast
import { toast } from "react-toastify";
const Toast = ({ children }) => {
  const getClickedItemId = (id, value) => {
    const item = data.find((item) => item.id === id);
    if (value === "ADD") {
      notify(item);
    } else {
      deleteNotify(item);
    }
  };
  const notify = (item) => {
    toast.success(item.title + " is ordered", {
      autoClose: 2000,
      className: "toast-container",
    });
  };
  const deleteNotify = (item) => {
    toast.success(item.title + " is removed", {
      autoClose: 2000,
      className: "toast-container",
    });
  };

  return (
    <ToastCtx.Provider value={{ getClickedItemId }}>
      {children}
    </ToastCtx.Provider>
  );
};

export default Toast;
