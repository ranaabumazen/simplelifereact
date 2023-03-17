import NavItem from "./NavItem/navItem";
import "./navList.css";

const NavList = (props) => {
  return (
    <div className="List">
      {props.items.map((el) => {
        return <NavItem 
        item={el} 
        key={el} 
        underline={el=='Home' ? 'underline':'none'}
        />;
      })}
    </div>
  );
};
export default NavList;
