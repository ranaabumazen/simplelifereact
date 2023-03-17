import MainTitle from "../../../../MainTitle/mainTitle";
import Photo from "../../../../Photo/photo";
import "./recentPost.css";

const RecentPost = (props) => {
  return (
    <div
      className={
        props.index !== 2
          ? "widget-recent-post"
          : "widget-recent-post-last-child"
      }
    >
      <MainTitle className="widget-post-title" title={props.title} />
      <Photo className="widget-image" src={props.src} />
    </div>
  );
};
export default RecentPost;
