import './mainTitle.css';
const MainTitle = ({title,color="#143774"})=>{
    return(
        <div >
            <h3 className="MainTitle" style={{color:color}}>{title}</h3>
        </div>
    )
}
export default MainTitle;