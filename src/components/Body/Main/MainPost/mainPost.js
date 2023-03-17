import Link from "../../../Link/link";
import MainTitle from "../../../MainTitle/mainTitle";
import Paragraph from "../../../Paragraph/paragraph";
import Photo from "../../../Photo/photo";
import "./mainPost.css";
const logo = '/images/life.jpg';
const ProfilePhoto = '/images/Rana.jpg';


const MainPost = (props) => {

 
  return (
    props.pathName !== '/About%20Me' ? 
    <div className="article-featured">
      <Photo className="basic-image" src={logo} />
      <Paragraph text={props.comments} className="article-info" />

      <MainTitle title={props.mainTitle} className="article-title" />

      <Paragraph text={props.content} className="article-body" />
      <Link className="article-read-more" text="Continue Reading" />
  
 
    </div>:  <><Photo className="image-full" src={ProfilePhoto} />
   <MainTitle title={props.mainTitle}  className="article-title" />
  <Paragraph text={props.content} className="article-body" />
  </>
  );
};
export default MainPost;
