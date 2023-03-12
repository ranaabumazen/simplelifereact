import LeftNav from './LeftNav/leftNav';
import NavList from './RightNav/NavList/navList';
import './header.css';
const Header = ()=>{
    return(
    <div className="header">
        <LeftNav/>
        <NavList/>
    </div>
    )
}
export default Header;