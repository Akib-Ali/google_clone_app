import { useState } from "react"
import { GoogleInpt } from "./googleinput"
import { GoogleList } from "./googlelist"

export const GoogleMain = () => {

    const [inputval, setinputval] = useState({
        company: "",
        creatername: "",
        position: "",
        date: "",
        experience: ""
    })

    const [storeData, setstoreData] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()

        setstoreData((alldata) => {
            return ([...alldata, inputval])
        })

    }


    const handleDelete = (id) => {
        const updateddata = storeData.filter((elem, index) => {
            return index != id

        })
        setstoreData(updateddata)

    }


    console.log(storeData)



    return (
        <div>
            <h1>Google App Clone Main</h1>
            <GoogleInpt
                inputval={inputval}
                setinputval={setinputval}
                storeData={storeData}
                setstoreData={setstoreData}
                handleSubmit={handleSubmit}

            />


            <table border="1" style={{width:"900px", margin:"auto" , marginTop:"50px"}}>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Creater Name</th>
                        <th>Position</th>
                        <th>Joing Date</th>
                        <th>Experience</th>
                        <th>Delete Detail</th>
                    </tr>
                </thead>


                {storeData.map((elem, index) => (

                    <GoogleList
                        key={index}
                        id={index}
                        elem={elem}
                        index={index}
                        handleDelete={handleDelete}
                    />
                ))}


            </table>





        </div>
    )
}