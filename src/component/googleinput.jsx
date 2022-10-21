import { useState } from "react"

export const GoogleInpt=(props)=>{




    const handleinput=(e)=>{
        const name = e.target.name;
        const value= e.target.value;

        props.setinputval({...props.inputval, [name] : value})
      }


    // console.log(props.inputval)

    return(
        <div>
            <form>
                 <input type="text" 
                 onChange={handleinput} 
                 name="title"  
                 value={props.inputval.title} 
                 placeholder="Enter Title"/>  
                 <br></br><br></br>


                <input type="text" 
                onChange={handleinput}
                name="creatername" 
                value={props.inputval.creatername} 
                placeholder="Enter Craeter Name"/>
            
                 <br></br><br></br>


                <button onClick={props.handleSubmit}
                style={{backgroundColor:"black" , color:"white"}}>
                Submit
                </button>
            </form>
        </div>
    )




}