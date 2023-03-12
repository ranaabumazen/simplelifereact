import NavItem from "./NavItem/navItem";
import './navList.css';

const NavList =()=>{
    const items = ['Home','About','Recent Posts'];

    return(
        <div className="List">
        {items.map((el)=>{
        return (<div key={el}>{el}</div>)
        })}
     </div>

    )
}
export default NavList;