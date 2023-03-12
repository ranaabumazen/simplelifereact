import './posts.css';
import SubPost from './SubPost/subPost';
import food  from '../../../images/food.jpg';

import work  from '../../../images/work.jpg';
import decor  from '../../../images/decor.jpg';


const Posts =()=>{
    const posts =[{
        title:'Keeping cooking Simple',
        text:`Food is a very important part of everyone's life.
        If you want to be healthy, you have to eat healthy.
        One of the easiest ways to do that is to keep your cooking nice and simple.`,
        src:food
    },
    {
        title:'Simplicity and Work',
        text:`Work is often a major source of stress.
        People get frustrated, it ruins their relationship with others and it leads to burnout.
        By keeping your work life as simple as possible,
        it will help balance everything out.`,
        src:work
    },
    {
        title:'Simple Decoration',
        text:`A home isn't a home until you've decorated a little.
        People either don't decorate,
        or they go overboard and it doesn't have the impact they were hoping for.
        Staying simple will help draw the eye where you want it to and make things pop like never before.`,
        src:decor

    }
]

    return(
        <div>
   
   {posts.map(el=>{
    return(
        <SubPost title={el.title}
        key={el.title}
         text={el.text} link="Continue Reading"
         photo={el.src}
         />
    )
   })}
   </div>
    )
}
export default Posts;