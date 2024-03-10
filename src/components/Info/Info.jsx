import { useContext } from "react";
import ProductCtx from "../../context/ProductTrackerCtx/ProductTracker";
import ToastCtx from "../../context/reactToast/Toast";
import Button from "../../common/Button/Button";
const Info = () => {
  const { item, addItem } = useContext(ProductCtx);
  const { getClickedItemId } = useContext(ToastCtx);

  return (
    <>
      <h1 className="text-[29px] font-medium text-center mb-[20px] pt-[100px]">
        DETAILS
      </h1>
      <div className=" flex items-center justify-center flex-col max-w-[90%] mx-auto">
        <div
          className="p-[16px] max-w-[320px] h-[320px] "
          style={{ boxShadow: "0 0 1px 3px #9d174d" }}
        >
          <img
            src={item.thumbnail}
            className="w-full h-full"
            alt={item.title}
          />
        </div>
        <div className="info_text">
          <h1
            className="text-[32px] text-center mt-[16px] mb-[8px] "
            style={{ color: "#9d174d" }}
          >
            {item.brand}
          </h1>
          <p
            className=" text-[23px] mb-[32px] text-center"
            style={{ color: "#212529" }}
          >
            {item.title}
          </p>
          <p className="text-[17px] my-[32px] text-center td:max-w-[500px]">
            {item.description}
          </p>
          <p
            className="text-[14px] text-center mb-[16px]"
            style={{ color: "#212529" }}
          >
            category: <span>{item.category}</span>
          </p>
          <h1
            className="text-center text-[40px] my-[16px]"
            style={{ color: "#212529" }}
          >
            <span style={{ color: "#9d174d" }}>$</span>
            {item.price}
          </h1>
          <div className="flex items-center justify-center pb-[40px]">
            <Button
              onClick={() => {
                getClickedItemId(item.id,"ADD");
                addItem(item);
              }}
              className={["rounded-[5px]  p-[8px] text-white "]}
              style={{ backgroundColor: "#9d174d" }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
