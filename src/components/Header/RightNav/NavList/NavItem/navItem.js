import Link from "../../../../Link/link"
import './navItem.css';

const NavItem = (props)=>{
    return(
   <Link 
   text={props.item} 
   className="link-item" 
   current={props.item}
   href={props.item}
   underline={props.underline}
   />
    )
}
export default NavItem;