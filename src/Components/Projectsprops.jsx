
export default function Projectsprops(props){
    return (
       
            <div className="project">
                
            <div className={props.item.order1}>
                <h1>ProjectName: <a href={props.item.url} target="_blank" rel="noreferrer">{props.item.projectname}</a></h1>
                <p>{props.item.info}</p>
            </div>
            <div className={props.item.order2}>
            <img src={props.item.image} alt="pl"/>
            </div>
            </div>
       
    )
}