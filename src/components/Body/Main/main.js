
import Divider from "../../Divider/divider";
import Posts from "../Posts/posts";
import MainPost from "./MainPost/mainPost"
import './main.css';

const Main =()=>{
    return(
        <div className="main">
      <MainPost/>
      <Divider/>
      <Posts/>
        </div>
    )
}
export default Main;