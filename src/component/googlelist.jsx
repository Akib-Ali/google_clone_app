export const GoogleList=(props)=>{
    return (
      <tbody>
            <tr>
                <td>{props.elem.company}</td>
                <td>{props.elem.creatername}</td>
                <td>{props.elem.position}</td>
                <td>{props.elem.date}</td>
                <td>{props.elem.experience}</td>
                <td>
                <button 
                onClick={(()=> props.handleDelete(props.index))}
                style={{ color:"red" , width:"100px" , height:"30px"}}>Delete</button></td>
                </tr>
        </tbody>
    
    )
}