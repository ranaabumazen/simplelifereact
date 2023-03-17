import RecentPost from "./RecentPost/recentPost";
import "./recentPosts.css";

const workImg = "/images/work.jpg";
const decorImg = "/images/decor.jpg";

const foodImg = "/images/food.jpg";

const RecentPosts = () => {
  const posts = [
    {
      title: "Keeping Cooking Simple",
      src: foodImg,
    },
    { title: "Simplicity and Work", src: workImg },
    { title: "Simple Decoration", src: decorImg },
  ];
  return (
    <div className="sidebar-widget">
      <h2 className="widget-title">RECENT POSTS</h2>
      {posts.map((el, i) => {
        return (
          <RecentPost index={i} title={el.title} src={el.src} key={el.title} />
        );
      })}
    </div>
  );
};
export default RecentPosts;
