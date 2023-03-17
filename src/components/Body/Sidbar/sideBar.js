import AboutMe from "./AboutMe/aboutMe";
import RecentPosts from "./RecentPosts/recentPosts";
import "./sideBar.css";
const ProfilePhoto = "/images/Rana.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
    {window.location.pathname !== '/About%20Me' &&
     <AboutMe src={ProfilePhoto} />}

      <RecentPosts />
    </div>
  );
};
export default SideBar;
