import Posts from "../Posts/posts";
import MainPost from "./MainPost/mainPost";
import Link from "../../Link/link";
import "./main.css";

const content = [
  <span className="span">Life can get complicated really quickly</span>,
  `, but it doesn't have to be! There are many ways to simplify your life, `,
  <Link className="link" text="a few of which we've explored in the past." />,
  `This week we're taking a bit of a approach though,
      in how you can find simplicity in the life you already living`,
];
const aboutMeTitle ="My Name is Rana and living simple life"
const aboutMe = [
  <p>
    <strong>I am software developer</strong>I studied computer enginnering and
    graduated from Al Najah National University in 2020, I studied many subjects
    such as web , java and more.
    <br />
    <br />I like to develop myself and acquire more skills. I like to live a
    simple and calm life, so I always try to do things simply, I like to make my
    home decor simple and I like to enjoy learning new things such as cooking
    new and healthy food and more fun things
  </p>,
];

const comments = "Feb 13,2023 | 3 comments";
const mainTitle = "Finding Simplicity in Life";



const Main = (props) => {
  // const MainBasicpost = ;

  return (
    <div className="main">
   
     {props.pathName === '/About%20Me'  ?
    <MainPost 
    mainTitle={aboutMeTitle}
    pathName={props.pathName}
    content={aboutMe}/>
   :
    <>
   {(props.pathName === "/" || 
     props.pathName === "/Home") && 
     <MainPost
     mainTitle={mainTitle}
     comments={comments}
     content={content}
     pathName={props.pathName}
     />
     }
   
     <Posts posts={props.posts} />
 </>}
    </div>
  );
};
export default Main;
