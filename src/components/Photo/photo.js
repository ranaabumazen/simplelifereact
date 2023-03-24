
const Photo =(props)=>{
    return(
       <img src={props.src} {...props} alt={props.src}/>
    )
}
export default Photo;