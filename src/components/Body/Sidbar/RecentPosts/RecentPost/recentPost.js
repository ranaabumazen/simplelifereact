import MainTitle from "../../../../MainTitle/mainTitle";
import Photo from "../../../../Photo/photo";
import './recentPost.css';

const RecentPost=(props)=>{
    return(
    <div className="recent-post">
      
        <Photo styleCalss="subPost-image" src={props.src}/>
        <MainTitle title={props.title}/>
        
    </div>
    )
}
export default RecentPost;