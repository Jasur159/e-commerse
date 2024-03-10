import Tracker from "../Tracker/Tracker";
import { useContext } from "react";
import ProductCtx from "../../context/ProductTrackerCtx/ProductTracker";
const TrackerList = () => {
  const { lists, overallSum } = useContext(ProductCtx);

  return (
    <>
      <h1 className="text-center uppercase text-[28px] font-medium pt-[100px] mb-[20px]">
        Shopping cart
      </h1>
      {lists.length ? (
        <>
          <div className="grid grid-cols-1 gap-y-[10px] max-w-[80%] mx-auto sm:grid-cols-2 sm:gap-[1.5rem] md:grid-cols-3 td:grid-cols-4 ">
            {lists.map((product) => (
              <Tracker key={product.id} product={product} />
            ))}
          </div>
          <div className=" flex justify-center">
            {/* <Button
              className={[
                "text-[28px] p-1 rounded-[10px] text-black mt-[30px] border-2 border-solid",
              ]}
              style={{ borderColor: "green" }}
            >
              Clear All
            </Button> */}
          </div>
          <h1 className="text-[28px] text-black uppercase text-center mt-[20px] mb-[10px]">
            total price: <span style={{ color: "#9d174d" }}>$</span>
            {overallSum}
          </h1>
        </>
      ) : (
        <div className=" min-h-[50vh] flex items-center justify-center">
          <p className="text-[20px] text-center">
            There is no product in your card <span className="block">🙁</span>
          </p>
        </div>
      )}
    </>
  );
};

export default TrackerList;
