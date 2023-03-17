import MainTitle from '../../MainTitle/mainTitle';
import SubTitle from '../../SubTitle/subTitle';
import './leftNav.css';

const LeftNav = ()=>{
    return(
        <div>
        <MainTitle title="Living the Social Life" 
        className="main-title"/>
        <SubTitle 
        className="sub-title"
        title="A BLOG EXPLORING MINIMALISM IN LIFE"/>
        </div>
    )
}
export default LeftNav;