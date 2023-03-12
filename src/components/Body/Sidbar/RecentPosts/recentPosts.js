import Divider from "../../../Divider/divider";
import RecentPost from "./RecentPost/recentPost";
import './recentPosts.css';
import Food from '../../../../images/food.jpg';
import Work from '../../../../images/work.jpg';

import Decor from '../../../../images/decor.jpg';



const RecentPosts=()=>{
    const posts=[{
        title:'Keeping Cooking Simple',
        src:Food
    },
{title:"Simplicity and Work",
src:Work},
{title:'Simple Decoration',
src:Decor
}
]
    return(
   <div className="recent-posts">
      <h1>Recent Posts</h1>
      {posts.map(el=>{
        return(
       <div>
            <RecentPost title={el.title} src={el.src}/>
            <Divider/>
         </div> 
        )
      })}
   
   
  
   </div>
    )
}
export default RecentPosts;