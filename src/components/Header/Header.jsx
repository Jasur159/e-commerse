import hero from "../../assets/gallery.png";
import ProductList from "../ProductList/ProductList";
const Header = () => {
  return (
      <header className="flex scroll-smooth items-center justify-center flex-col max-w-[93%] mx-auto pt-[100px] xl:max-w-[1190px]">
        <div className="py-[24px]">
          <img src={hero} />
        </div>
        <ProductList />
      </header>
  );
};

export default Header;
