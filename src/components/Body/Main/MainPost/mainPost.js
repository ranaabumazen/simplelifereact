import Link from "../../../Link/link"
import MainTitle from "../../../MainTitle/mainTitle"
import Paragraph from "../../../Paragraph/paragraph"
import Photo from "../../../Photo/photo"

const MainPost =()=>{
    const paragraph = `Life can get complicated really quickly,
    but it doesn't have to be! There are many ways to simplify your life,
   a few of which we've explored in the past. This week we're taking a bit of a approach though,
    in how you can find simplicity in the life you already living`
    
    return(
        <div>
      
        <Photo/>
        <MainTitle title="Finding Simplicity in Life"/>
        <Paragraph text={paragraph}/>
        <Link  class="readMore" text="Continue Reading"/>
        </div>
    )
}
export default MainPost;