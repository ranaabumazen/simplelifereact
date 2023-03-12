import './link.css';

const Link =(props)=>{
    return(
      <a href="#" className={props.class}>{props.text}</a>
    )
}
export default Link;