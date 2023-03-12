import AboutMe from './AboutMe/aboutMe';
import RecentPosts from './RecentPosts/recentPosts';
import './sideBar.css';
import ProfilePhoto from '../../../images/Rana.jpg';

const SideBar = ()=>{
    return(
<div>
   <AboutMe src={ProfilePhoto}/>
   <RecentPosts/>
   </div>
    )
}
export default SideBar;