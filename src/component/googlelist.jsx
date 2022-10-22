export const GoogleList=(props)=>{
    return (


        <div style={{display:"flex" ,gap:"40px" }}>
        <h2>Aib sn,mn,msds</h2>
         <h2>{props.elem.title}</h2>
         <h2>{props.elem.creatername}</h2>
         <h2>{props.elem.position}</h2>
         <h2>{props.elem.date}</h2>
         <h2>{props.elem.experience}</h2>

         <button 
         onClick={(()=> props.handleDelete(props.index))}
         style={{ color:"red" , width:"100px" , height:"30px"}}>Delete</button>
        
        </div>
    )
}