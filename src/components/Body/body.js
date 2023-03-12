import Main from "./Main/main"
import SideBar from "./Sidbar/sideBar";
import './body.css';

const Body = ()=>{
    return(
        <div className="body">
        <Main/>
        <SideBar/>
        </div>
    )
}
export default Body;