import Main from "./Main/main";
import SideBar from "./Sidbar/sideBar";
import "./body.css";

import Link from "../Link/link";
const workImg = "/images/work.jpg";
const decorImg = "/images/decor.jpg";

const foodImg = "/images/food.jpg";
const lifeImg = '/images/life.jpg';

const Body = () => {

    const pathName = window.location.pathname;
    const content = [
        <span className="span">Life can get complicated really quickly</span>,
        `, but it doesn't have to be! There are many ways to simplify your life, `,
        <Link className="link" text="a few of which we've explored in the past." />,
        `This week we're taking a bit of a approach though,
            in how you can find simplicity in the life you already living`,
      ];
      const newRecntPost = {
        title:'Finding simplicity in life',
        text: content,
        src:lifeImg
      }
      
  const posts = [
    {
      title: "Keeping cooking Simple",
      text: `Food is a very important part of everyone's life.
        If you want to be healthy, you have to eat healthy.
        One of the easiest ways to do that is to keep your cooking nice and simple.`,
      src: foodImg,
    },
    {
      title: "Simplicity and Work",
      text: `Work is often a major source of stress.
        People get frustrated, it ruins their relationship with others and it leads to burnout.
        By keeping your work life as simple as possible,
        it will help balance everything out.`,
      src: workImg,
    },
    {
      title: "Simple Decoration",
      text: `A home isn't a home until you've decorated a little.
        People either don't decorate,
        or they go overboard and it doesn't have the impact they were hoping for.
        Staying simple will help draw the eye where you want it to and make things pop like never before.`,
      src: decorImg,
    },
  ];

  return (
    <div className="container container-flex">
      <Main 
      posts={pathName =='/Recent%20Posts' ? [newRecntPost,...posts]:posts}   //this is termporarly (I want to use react router )
      pathName={pathName}
      />
      <SideBar />
    </div>
  );
};
export default Body;
