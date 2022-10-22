import { useState } from "react"
import { GoogleInpt } from "./googleinput"
import { GoogleList } from "./googlelist"

export const GoogleMain=()=>{

    const [inputval, setinputval]= useState({
        title:"",
        creatername:"",
        position:"",
        date:"",
        experience:""
   })

   const [storeData, setstoreData]= useState([])


    const handleSubmit=(e)=>{
        e.preventDefault()

        setstoreData((alldata)=>{
            return ([...alldata, inputval])
        })
        
    }


    const handleDelete=(id)=>{
      const updateddata =  storeData.filter((elem,index)=>{
            return index != id

    })
        setstoreData(updateddata)

  }


    console.log(storeData)


      
    return(
        <div>
            <h1>Google App Clone Main</h1>
            <GoogleInpt 
              inputval={inputval}
              setinputval={setinputval}
              storeData={storeData}
              setstoreData={setstoreData}
              handleSubmit={handleSubmit}

            />


          {storeData.map((elem,index)=>(

            <GoogleList 
                key={index}
                id={index}
                elem={elem}
                index={index}
                handleDelete={handleDelete}
            />


         ) )}
           
        </div>
    )
}