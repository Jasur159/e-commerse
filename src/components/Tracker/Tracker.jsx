import Button from "../../common/Button/Button";
import { MdDelete } from "react-icons/md";
import ProductCtx from "../../context/ProductTrackerCtx/ProductTracker";
import { useContext } from "react";
import ToastCtx from "../../context/reactToast/Toast";
const Tracker = ({ product }) => {
  const { getClickedItemId } = useContext(ToastCtx);
  const { getItemId, deleteItem } = useContext(ProductCtx);
  return (
    <div
      className="flex   p-[13px] flex-col justify-between items-center rounded-[10px] "
      style={{ boxShadow: "0 0 2px #252b48" }}
    >
      <div>
        <img
          className="w-[160px] h-[105px] mb-[50px] rounded-[10px] "
          src={product.thumbnail}
          alt={product.title}
          style={{ boxShadow: "0 3px #9d174d" }}
        />
      </div>
      <span className="text-black mb-[16px] ">{product.brand}</span>
      <span className="text-black mb-[16px] ">{product.title}</span>
      <div className="flex w-full justify-between items-center">
        <div className="calc flex items-center">
          {product.count !== 1 ? (
            <Button
              onClick={() => getItemId(product.id, "DEC")}
              className={"w-[40px] bg-slate-100"}
              style={{ border: "1px solid #dcd9d9", color: "#9d174d" }}
            >
              -
            </Button>
          ) : (
            <button
              disabled
              onClick={() => getItemId(product.id, "DEC")}
              className={"w-[40px] bg-slate-100"}
              style={{ border: "1px solid #dcd9d9", color: "#9d174d" }}
            >
              -
            </button>
          )}
          <span
            className="w-[40px] flex items-center justify-center"
            style={{ border: "1px solid #dcd9d9", color: "#9d174d" }}
          >
            {product.count}
          </span>
          <Button
            onClick={() => getItemId(product.id, "INC")}
            className={"w-[40px] bg-slate-100"}
            style={{ border: "1px solid #dcd9d9", color: "#9d174d" }}
          >
            +
          </Button>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-[24px] ">
            <span style={{ color: "#9d174d" }}>$</span>
            {product.price * product.count}
          </p>
          <Button
            onClick={() => {
              getClickedItemId(product.id, "DEL");
              deleteItem(product.id);
            }}
          >
            <MdDelete
              className="text-[30px] focus:scale-[1.1] "
              style={{ color: "#9d174d" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
