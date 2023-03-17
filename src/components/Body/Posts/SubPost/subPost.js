import Link from "../../../Link/link";
import MainTitle from "../../../MainTitle/mainTitle";
import Paragraph from "../../../Paragraph/paragraph";
import Photo from "../../../Photo/photo";
import "./subPost.css";

const SubPost = (props) => {
  return (
    <div className="article-recent">
      <div className="article-recent-main">
        <MainTitle title={props.title} className="article-title" />
        <Paragraph className="article-body" text={props.text} />
        <Link text={props.link} className="article-read-more" href="#"/>
      </div>

      <div className="article-recent-secondary">
        <Photo className="article-image" src={props.photo} />
        <Paragraph className="article-info" text="Feb 13,2023 | 3 comments" />
      </div>
    </div>
  );
};
export default SubPost;
