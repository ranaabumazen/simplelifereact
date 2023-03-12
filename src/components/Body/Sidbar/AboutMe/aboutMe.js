import MainTitle from '../../../MainTitle/mainTitle';
import Paragraph from '../../../Paragraph/paragraph';
import Photo from '../../../Photo/photo';
import './aboutMe.css';

const AboutMe = (props)=>{
    return(
        <div className='aboutMe'>
    <MainTitle title="About Me"/>
    <Photo styleCalss="aboutMe-image" 
    src={props.src}/>
    <Paragraph text="about Me"/>
    </div>
    )
}
export default AboutMe;