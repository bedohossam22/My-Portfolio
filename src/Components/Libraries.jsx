export default function Libraries(props){
    return (
        <div className="libraries">
        <div className="next">
   <span className={props.item.ClassName}> 
   {props.item.Name} {props.item.Precentage}</span>
   </div>
   </div>
   

   
    )
}