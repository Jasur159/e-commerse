import Button from "../../common/Button/Button";
import { BsCart3 } from "react-icons/bs";
import ProductCtx from "../../context/ProductTrackerCtx/ProductTracker";
import { useContext } from "react";
import routeCtx from "../../context/routerHandler/route";
import ToastCtx from "../../context/reactToast/Toast";
const Product = ({ product }) => {
  const { addItem, getElId } = useContext(ProductCtx);
  const { changeRoute } = useContext(routeCtx);
  const { getClickedItemId } = useContext(ToastCtx);
  return (
    <div
      className="p-[24px] pb-[10px] rounded-[10px] flex flex-col justify-between items-center"
      style={{ boxShadow: "0 0 3px #252b48" }}
    >
      <Button
        className={["img"]}
        onClick={() => {
          changeRoute("context");
          getElId(product.id);
        }}
      >
        <img
          src={product.thumbnail}
          className="w-[176px] h-[7rem] rounded-[10px] hover:scale-[1.1]"
          title="img"
          style={{ boxShadow: "0 3px #9d174d" }}
        />
      </Button>
      <h1 className="text-center text-[18px] my-[24px] mb-[35px] font-medium">
        {product.title}
      </h1>
      <div className="flex w-full items-center  justify-between">
        <p className="text-[28px] text-black uppercase">
          <span style={{ color: "#9d174d" }}>$</span>
          {product.price}
        </p>
        <div>
          <Button
            onClick={() => {
              addItem(product);
              getClickedItemId(product.id, "ADD");
            }}
          >
            <BsCart3
              className="text-[32px] hover:scale-[1.1]"
              style={{ color: "#005b41" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
