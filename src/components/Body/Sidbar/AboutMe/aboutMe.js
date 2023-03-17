import MainTitle from "../../../MainTitle/mainTitle";
import Paragraph from "../../../Paragraph/paragraph";
import Photo from "../../../Photo/photo";
import "./aboutMe.css";

const AboutMe = (props) => {
  const aboutMe =
    "I find life better, and I'm happier, when things are nice and simple.";
  return (
    <div className="sidebar-widget">
      <MainTitle className="widget-title" title="About Me" />
      <Photo className="widget-image" src={props.src} />
      <Paragraph text={aboutMe} className="aboutme-p" />
    </div>
  );
};
export default AboutMe;
