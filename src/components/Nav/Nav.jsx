import { useContext, useState } from "react";
import Button from "../../common/Button/Button";
import ProductCtx from "../../context/ProductTrackerCtx/ProductTracker";
const Nav = ({ changeRoute }) => {
  const { lists } = useContext(ProductCtx);
  return (
    <nav
      className="py-[0.4rem] scroll-smooth z-50 h-[5rem] fixed top-0 left-0 px-[1.8rem] w-full  flex items-center justify-between "
      style={{ backgroundColor: "#252b48" }}
    >
      <Button onClick={() => changeRoute("header")}>
        <svg
          className="text-white"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="icon-in-div"
          height="2.5em"
          width="2.8em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M9 8v8"></path>
          <path d="M15 8v8"></path>
          <path d="M9 12h6"></path>
        </svg>
      </Button>
      <Button className={["relative"]} onClick={() => changeRoute("market")}>
        <svg
          className="text-white hover:text-pink "
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          id="hand-bag"
          height="2.5em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
        </svg>
        <span className="absolute text-[17px] w-[23px] h-[23px] text-white top-[32px] right-[-20px] bg-red-500 rounded-full">
          {lists.length}
        </span>
      </Button>
    </nav>
  );
};

export default Nav;
