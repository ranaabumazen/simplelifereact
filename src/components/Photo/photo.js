import logo from '../../images/life.jpg';

const Photo =({styleCalss,src=logo})=>{
    return(
       <img src={src} className={styleCalss}/>
    )
}
export default Photo;