import LeftNav from "./LeftNav/leftNav";
import NavList from "./RightNav/NavList/navList";
import "./header.css";
const Header = () => {
const items = ["Home", "About Me", "Recent Posts"];


  return (
    <div className="header">
      <div className=" container container-flex">
        <LeftNav  />
        <NavList items={items} />
      </div>
    </div>
  );
};
export default Header;
