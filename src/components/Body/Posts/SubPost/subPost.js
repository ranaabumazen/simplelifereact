import Link from "../../../Link/link";
import MainTitle from "../../../MainTitle/mainTitle";
import Paragraph from "../../../Paragraph/paragraph";
import Photo from "../../../Photo/photo";
import './subPost.css';

const SubPost = (props)=>{
    return(
        <div className="SubPost">
       
   <Photo styleCalss="subPost-image" src={props.photo} />

   <div>
    <MainTitle title={props.title}/>
    <Paragraph text={props.text}/>
    <Link text={props.link}/>
   </div>
   </div>
    )
}
export default SubPost;