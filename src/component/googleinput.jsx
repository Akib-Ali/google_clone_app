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
                 autoComplete="off"
                 name="title"  
                 value={props.inputval.title} 
                 placeholder="Enter Title"/>  
                 <br></br><br></br>


                <input type="text" 
                onChange={handleinput}
                autoComplete="off"
                name="creatername" 
                value={props.inputval.creatername} 
                placeholder="Enter Craeter Name"/>
            
                 <br></br><br></br>



                 <input type="text" 
                onChange={handleinput}
                autoComplete="off"
                name="position" 
                value={props.inputval.position} 
                placeholder="Enter Position"/>
            
                 <br></br><br></br>


                <input type="date"
                onChange={handleinput}
                autoComplete="off"
                name="date" 
                value={props.inputval.date} 
                placeholder="Enter Position"/>
                <br></br><br></br>


                <select name="experience" 
                 onChange={handleinput}
                value={props.inputval.experience}>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
               <option value="midsenior">Mid Senior</option>
                <option value="manager">Manager</option>
                </select>   <br></br> <br></br>


                {/* <div style={{display:"flex" , gap:"20px"}}>

                    <input type="radio" 
                    checked={handleinput}
                     name="gender"
                     value={props.inputval.male}/>
                     <label>Male</label> 

                     <input type="radio"
                        checked={handleinput}
                        name="gender"
                        value={props.inputval.female}
                     />
                     <label>Female</label>
                </div> */}
 



                <button onClick={props.handleSubmit}
                style={{backgroundColor:"black" , color:"white"}}>
                Submit
                </button>
            </form>
        </div>
    )




}