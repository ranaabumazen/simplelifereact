import "./link.css";

const Link = (props) => {
  return (
    <a href={props.href} 
    {...props} 
    style={{textDecoration:props.underline}}
    >
      {props.text}
    </a>
  );
};
export default Link;
