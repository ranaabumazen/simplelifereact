import "./posts.css";
import SubPost from "./SubPost/subPost";

const Posts = (props) => {

  return (
    <>
      {props.posts.map((el) => {
        return (
          <SubPost
            title={el.title}
            key={el.title}
            text={el.text}
            link="Continue Reading"
            photo={el.src}
          />
        );
      })}
    </>
  );
};
export default Posts;
